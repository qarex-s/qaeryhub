using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace qaeryhub.Models
{
    public class UserDescription
    {
        [Key]
        public int DescriptionId {  get; set; }
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public Users SomeUser { get; set; }
    }
}
