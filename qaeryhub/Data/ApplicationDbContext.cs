using Microsoft.EntityFrameworkCore;
using qaeryhub.Models;

namespace qaeryhub.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<GeneralPerformance> GeneralPerformances { get; set; }
        public DbSet<PerformanceCategory> PerformanceCategory { get; set; }
        public DbSet<Audits> Audits { get;set; }
        public DbSet<Metrics> Metrics { get;set; }


    }
}
