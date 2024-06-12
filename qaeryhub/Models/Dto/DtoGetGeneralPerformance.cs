namespace qaeryhub.Models.Dto
{
    public class DtoGetGeneralPerformance
    {
        public int GeneralPerformanceId {  get; set; }
        public string SiteUrl { get; set; }
        public string GeneralValue { get; set; }
        public int AverageValue { get; set; }
        public string FormFactor { get; set; }
        public DateTimeOffset TimeTesting { get; set; }
        public string TimeTestingFormated { get; set; }


    }
}
