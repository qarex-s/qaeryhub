namespace qaeryhub.Models.Dto
{
    public class DtoSpeedPagePerformanceItems
    {
        public DtoGetCategory performance { get; set; } = new DtoGetCategory();
        public DtoGetCategory accessibility { get; set; } = new DtoGetCategory();
        public DtoGetCategory bestPractices { get; set; } = new DtoGetCategory();
        public DtoGetCategory seo { get; set; } = new DtoGetCategory();

    }
}
