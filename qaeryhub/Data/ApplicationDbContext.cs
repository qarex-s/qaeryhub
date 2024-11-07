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
        public DbSet<Users> Users { get;set; }
        public DbSet<UserDescription> UserDescription { get;set; }
        public DbSet<Roles> Roles { get;set; }
        public DbSet<UsersRoles> UsersRoles { get;set; }
        public DbSet<BlockedUsers> BlockedUsers { get;set; }


    }
}
