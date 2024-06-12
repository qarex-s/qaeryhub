using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace qaeryhub.Models
{
    public class GeneralPerformance
    {
        [Key]
        public int Id { get; set; }
        public string SiteUrl { get; set; }
        public string GeneralValue { get; set; }
        public int AverageValue { get; set; }
        public string FormFactor { get; set; }
        public DateTimeOffset TimeTesting { get; set; }
       


    }

    

    

}
