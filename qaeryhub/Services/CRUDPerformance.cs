using Microsoft.AspNetCore.Mvc;
using qaeryhub.Data;
using qaeryhub.Models.Dto;
using Microsoft.EntityFrameworkCore;
using qaeryhub.Models;
namespace qaeryhub.Services
{
    public class CRUDPerformance : ICRUDPerformance
    {

        private ApplicationDbContext _ctx;
        public CRUDPerformance(ApplicationDbContext ctx) {
            _ctx = ctx;
        }
        public async Task<List<DtoGetGeneralPerformance>> GetAll()
        {
            var generalPerformance = await _ctx.GeneralPerformances.ToListAsync();
            List<DtoGetGeneralPerformance> dtoGetGeneralPerformance = generalPerformance
                .Select(p => new DtoGetGeneralPerformance
                {
                    GeneralPerformanceId = p.Id,
                    SiteUrl = p.SiteUrl,
                    FormFactor = p.FormFactor,
                    AverageValue = p.AverageValue,
                    GeneralValue = p.GeneralValue,
                    TimeTesting = p.TimeTesting,
                    TimeTestingFormated = p.TimeTesting.ToString("dd-MM-yyyy HH:mm:ss")
                })
                .OrderByDescending(p => p.TimeTesting)
                .ToList();

            return dtoGetGeneralPerformance;
        }
        public async Task<string> Delete (int id)
        {
            var generalPerformance = await _ctx.GeneralPerformances.FirstOrDefaultAsync(p => p.Id == id);
            if(generalPerformance == null)
            {
                return null;
            }
            _ctx.GeneralPerformances.Remove(generalPerformance);
            await _ctx.SaveChangesAsync();

            return "Succesfull";
        }
        public async Task<DtoGetPerformance> Get(int id)
        {
            var generalPerformance = await _ctx.GeneralPerformances.FirstOrDefaultAsync(x => x.Id == id);
            if (generalPerformance == null)
            {
                return null;
            }

            var performanceCategory = await _ctx.PerformanceCategory.Where(c => c.GeneralPerformanceId == generalPerformance.Id).ToListAsync();
            if (performanceCategory.Count < 4)
            {
                return null;
            }
            var performance = performanceCategory.FirstOrDefault(c => c.NamePerformanceCategory == "Performance");
            var accessibility = performanceCategory.FirstOrDefault(c => c.NamePerformanceCategory == "Accessibility");
            var bestPractices = performanceCategory.FirstOrDefault(c => c.NamePerformanceCategory == "Best Practices");
            var seo = performanceCategory.FirstOrDefault(s => s.NamePerformanceCategory == "SEO");

            var listAudits = await _ctx.Audits.Where(a => a.GeneralPerformanceId == generalPerformance.Id).ToListAsync();
            
            if (performance == null || accessibility == null || bestPractices == null || seo == null)
            {
                return null;
            }
            var metrics = await _ctx.Metrics.Where(m => m.GeneralPerformanceId == generalPerformance.Id).ToListAsync();
            if (metrics == null)
            {
                return null;
            }

            var performanceAudits = listAudits.Where(a => a.PerformanceCategoryId == performance.Id).ToList();
            var accessibilityAudits = listAudits.Where(a => a.PerformanceCategoryId == accessibility.Id).ToList();
            var bestPracticesAudits = listAudits.Where(a => a.PerformanceCategoryId == bestPractices.Id).ToList();
            var seoAudits = listAudits.Where(a => a.PerformanceCategoryId == seo.Id).ToList();
        
            DtoGetPerformance dtoGetPerformance = new DtoGetPerformance();

            dtoGetPerformance.siteUrl = generalPerformance.SiteUrl;
            dtoGetPerformance.averageValue = generalPerformance.AverageValue;
            dtoGetPerformance.generalValue = generalPerformance.GeneralValue;
            dtoGetPerformance.formFactor = generalPerformance.FormFactor;

            dtoGetPerformance.speedPagePerformanceItemsObj.performance.title = performance.NamePerformanceCategory;
            dtoGetPerformance.speedPagePerformanceItemsObj.performance.score = performance.CurentValue;
            dtoGetPerformance.speedPagePerformanceItemsObj.performance.listAudits = performanceAudits;

            dtoGetPerformance.speedPagePerformanceItemsObj.accessibility.title = accessibility.NamePerformanceCategory;
            dtoGetPerformance.speedPagePerformanceItemsObj.accessibility.score = accessibility.CurentValue;
            dtoGetPerformance.speedPagePerformanceItemsObj.accessibility.listAudits = accessibilityAudits;


            dtoGetPerformance.speedPagePerformanceItemsObj.bestPractices.title = bestPractices.NamePerformanceCategory;
            dtoGetPerformance.speedPagePerformanceItemsObj.bestPractices.score = bestPractices.CurentValue;
            dtoGetPerformance.speedPagePerformanceItemsObj.bestPractices.listAudits = bestPracticesAudits;

            dtoGetPerformance.speedPagePerformanceItemsObj.seo.title = seo.NamePerformanceCategory;
            dtoGetPerformance.speedPagePerformanceItemsObj.seo.score = seo.CurentValue;
            dtoGetPerformance.speedPagePerformanceItemsObj.seo.listAudits = seoAudits;

            foreach (var metric in metrics)
            {
                dtoGetPerformance.metrics.Add(new DtoMetrics
                {
                    score = metric.score,
                    title = metric.title,
                    numericValue = metric.numericValue,
                });   
            }

            return dtoGetPerformance;
        }

        public async Task<GeneralPerformance> Create([FromBody] DtoCreateGeneralPerformane DtoGeneralPerformance)
        {
            if (DtoGeneralPerformance == null || DtoGeneralPerformance.PerformanceCategory == null)
            {
                return null;
            }

            var generalPerformanceNew = new GeneralPerformance();
            generalPerformanceNew.SiteUrl = DtoGeneralPerformance.SiteUrl;
            generalPerformanceNew.AverageValue = DtoGeneralPerformance.AverageValue;
            generalPerformanceNew.GeneralValue = DtoGeneralPerformance.GeneralValue;
            generalPerformanceNew.FormFactor = DtoGeneralPerformance.FormFactor;
            generalPerformanceNew.TimeTesting = DtoGeneralPerformance.fetchingDate;

            await _ctx.GeneralPerformances.AddAsync(generalPerformanceNew);
            await _ctx.SaveChangesAsync();
            List<Metrics> listNewMetric = new List<Metrics>();
            foreach (var metric in DtoGeneralPerformance.metrics)
            {
                listNewMetric.Add(new Metrics
                {
                    title = metric.title,
                    score = metric.score,
                    numericValue = metric.numericValue,
                    GeneralPerformanceId = generalPerformanceNew.Id
                });
            }


            await _ctx.Metrics.AddRangeAsync(listNewMetric);

            var categoryData = new[]
            {
                DtoGeneralPerformance.PerformanceCategory,
                DtoGeneralPerformance.AccessibilityCategory,
                DtoGeneralPerformance.BestPracticesCategory,
                DtoGeneralPerformance.SEOCategory
            };
            int averageAudits = 0;
            foreach (var category in categoryData)
            {
                var cagegoryPerf = new PerformanceCategory
                {
                    NamePerformanceCategory = category.TitleCategory,
                    CurentValue = category.ScoreCategory,
                    GeneralPerformanceId = generalPerformanceNew.Id
                    
                };
                averageAudits += cagegoryPerf.CurentValue;

                await _ctx.PerformanceCategory.AddAsync(cagegoryPerf);
                await _ctx.SaveChangesAsync();

                foreach (var audit in category.listAudits)
                {
                    var auditNew = new Audits
                    {
                        title = audit.title,
                        PerformanceCategoryId = cagegoryPerf.Id,
                        GeneralPerformanceId = cagegoryPerf.GeneralPerformanceId,
                        Weight = 0,
                    };
                    await _ctx.Audits.AddAsync(auditNew);
                }
                generalPerformanceNew.AverageValue = averageAudits/4;
                _ctx.SaveChanges();
            }

            return generalPerformanceNew;
        }
    }
}
