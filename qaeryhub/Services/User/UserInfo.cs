using Microsoft.EntityFrameworkCore;
using qaeryhub.Data;
using qaeryhub.Models;
using qaeryhub.Models.DTOQueryPerformance;
using qaeryhub.Models.DTOUser;
using System.Text.RegularExpressions;

namespace qaeryhub.Services.User
{
    public class UserInfo : IUserInfo
    {
        private readonly ApplicationDbContext _ctx;
        public UserInfo(ApplicationDbContext ctx)
        {
            _ctx = ctx;
        }
        public async Task<DTOUserInfo> getAllInfoUser(int userId)
        {
            var someUser = await _ctx.Users.FirstOrDefaultAsync(u=>u.UserId == userId);
            if(someUser != null)
            {
                var userDescription = await _ctx.UserDescription.FirstOrDefaultAsync(d => d.UserId == someUser.UserId);

                var userQueries = await _ctx.GeneralPerformances
                    .Where(g=>g.UserId == someUser.UserId)
                    .ToListAsync();


                var userGroupQueries = userQueries
                    .GroupBy(x => x.SiteUrl)
                    .Select(group => 
                    new DTOQueryPerformOfUser{ 
                        UrlSite = group.Key,
                        LastQueryTime = group.Last().TimeTesting,
                        AverageResult = group.Average(g=>g.AverageValue),
                        CountQueries = group.Count()
                    }).ToList();
                
                var favoriteQuery = userQueries
                    .OrderByDescending(p => p.SiteUrl)
                    .FirstOrDefault();

                DTOUserInfo user = new DTOUserInfo()
                {
                    UserId = someUser.UserId,
                    FirstName = someUser.FirstName,
                    LastName = someUser.LastName,
                    Email = someUser.Email,
                    UserName = someUser.UserName,
                    ProfileImgUrl = someUser.ProfileImgUrl,
                    CreatedAt = someUser.CreatedAd,
                    CountAllQueries = someUser.QueryCount,
                    FavoriteSite = favoriteQuery?.ToString() ?? "No queries found",
                    CountAttempts = userQueries.Count,
                    CountComparing = userQueries.Count,
                    Description = userDescription?.ToString() ?? "No queries found",
                    allQueriesOfUser = userGroupQueries

                };

                return user;
            }
            
            return null;

        }
    }
}
