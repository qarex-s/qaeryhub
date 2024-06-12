namespace qaeryhub.Models.Dto
{
    public class DtoGetPerformance
    {
        public string siteUrl { get; set; }
        public string generalValue { get; set; }
        public int averageValue { get; set; }
        public string formFactor { get; set; }
        public DateTime fetchingDate { get; set; }

        public DtoSpeedPagePerformanceItems speedPagePerformanceItemsObj { get; set; } = new DtoSpeedPagePerformanceItems();
    
        public List<DtoMetrics> metrics { get; set; } = new List<DtoMetrics> { };

    }
}
