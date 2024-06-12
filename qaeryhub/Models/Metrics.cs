using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace qaeryhub.Models
{
    public class Metrics
    {
        [Key]
        public int Id { get; set; }
        public string title { get; set; }
        public float numericValue { get; set; }
        public float score { get; set; }


        [ForeignKey("generalPerformance")]
        public int GeneralPerformanceId { get; set; }
        public GeneralPerformance? generalPerformance { get; set; }
    }
}