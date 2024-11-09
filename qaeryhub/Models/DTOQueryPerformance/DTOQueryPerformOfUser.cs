namespace qaeryhub.Models.DTOQueryPerformance
{
    public class DTOQueryPerformOfUser
    {
        public int Id { get; set; }
        public string UrlSite { get; set; }
        public int CountQueries {  get; set; }
        public double AverageResult {  get; set; }
        public DateTimeOffset LastQueryTime {  get; set; }
    }
}
