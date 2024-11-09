using qaeryhub.Models.DTOQueryPerformance;

namespace qaeryhub.Models.DTOUser
{
    public class DTOUserInfo
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email{ get; set; }
        public string? Description {  get; set; }
        public string? ProfileImgUrl { get; set; }
        public int CountAttempts {  get; set; }
        public int CountComparing {  get; set; }
        public int CountAllQueries {  get; set; }
        public string FavoriteSite {  get; set; }
        public DateTime CreatedAt {  get; set; }
        public List<DTOQueryPerformOfUser>? allQueriesOfUser { get; set; }

    }
}
