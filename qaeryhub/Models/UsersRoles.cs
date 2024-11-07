using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace qaeryhub.Models
{
    public class UsersRoles
    {
        [Key]
        public int UserRoleId {  get; set; }
        public int UserId { get; set; }
        public int RoleId { get; set; }
        [ForeignKey("UserId")]
        public Users SomeUser { get; set; }
        [ForeignKey("RoleId")]
        public Roles SomeRole { get; set; }
    }
}
