using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace qaeryhub.Models
{
    public class Audits
    {
        [Key]
        public int Id { get; set; }
        [Column("TitleAudit")]
        public string title { get; set; }
        public int Weight { get; set; }
        [ForeignKey("performanceCategory")]
        public int PerformanceCategoryId { get; set; }

        [ForeignKey("generalPerformance")]
        public int GeneralPerformanceId { get; set; }
    }
}
