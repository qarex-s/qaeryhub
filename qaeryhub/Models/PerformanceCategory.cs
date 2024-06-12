using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace qaeryhub.Models
{
    public class PerformanceCategory
    {
        [Key]
        public int Id { get; set; }
        public string NamePerformanceCategory { get; set; }

        public int CurentValue { get; set; }

        [ForeignKey("generalPerformance")]
        public int GeneralPerformanceId { get; set; }
        public GeneralPerformance? generalPerformance { get; set; }
    }
}