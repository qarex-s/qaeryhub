using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace qaeryhub.Models
{
    public class MetricsDetail
    {
        [Key]
        public int Id { get; set; }
        public string title { get; set; }
        public float numericValue { get; set; }
        public float score {  get; set; }
        [ForeignKey("metrics")]
        public int MetricsId { get; set; }
        public Metrics metrics { get; set; }
    }
}
