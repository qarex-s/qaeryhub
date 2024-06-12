namespace qaeryhub.Models.Dto
{
    public class DtoGetCategory
    {
        public string title { get; set; }
        public int score { get; set; }
        public List<Audits> listAudits { get; set; }
    }
}
