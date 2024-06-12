namespace qaeryhub.Models.Dto
{
    public class DtoCreateGeneralPerformane
    {
        public string SiteUrl { get; set; }
        public string GeneralValue { get; set; }
        public int AverageValue { get; set; }
        public string FormFactor { get; set; }
        public DateTimeOffset fetchingDate { get; set; }
        public DtoLightHouseCategories? PerformanceCategory { get; set; }
        public DtoLightHouseCategories? AccessibilityCategory { get; set; }
        public DtoLightHouseCategories? BestPracticesCategory { get; set; }
        public DtoLightHouseCategories? SEOCategory { get; set; }
        public List<DtoMetrics >metrics { get; set; }


    }
}
