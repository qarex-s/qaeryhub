using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace qaeryhub.Models
{
    public class BlockedUsers
    {
        [Key]
        public int BlockedId {  get; set; }
        public string BlockedReason { get; set; }
        public DateTime BlockedAt { get; set; }
        public bool isBlocked {  get; set; }
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public Users SomeUser { get; set; }
            
    }
}
