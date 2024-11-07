using System.ComponentModel.DataAnnotations;

namespace qaeryhub.Models
{
    public class Users
    {
        [Key]
        public int UserId {  get; set; }
        public string UserName { get; set; }
        public string FirstName {  get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ProfileImgUrl {  get; set; }
        public int QueryCount { get; set; } = 0;
        public DateTime CreatedAd { get; set; } = DateTime.Now.ToUniversalTime();
    }
}
