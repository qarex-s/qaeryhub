using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using qaeryhub.Data;
using qaeryhub.Models;
using qaeryhub.Models.DtoAuth;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace qaeryhub.Services.Auth
{
    public class AuthIdentity : IAuthIdentity
    {
        private readonly ApplicationDbContext _ctx;
        private readonly IConfiguration _config;
        public AuthIdentity(ApplicationDbContext ctx, IConfiguration config)
        {
            _ctx = ctx;
            _config = config;
        }

        public async Task<string> GetJwtToken(DtoAuthUserCred dtoAuthUserCred)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub,dtoAuthUserCred.UserName),
                new Claim(JwtRegisteredClaimNames.Email,dtoAuthUserCred.Email),
            };

            var SecToken = new JwtSecurityToken(
                _config["Jwt:Issuer"],
                audience: _config["Jwt:Issuer"], claims: claims,
                expires: DateTime.Now.AddMinutes(120),
                signingCredentials: credentials);

            var token = new JwtSecurityTokenHandler().WriteToken(SecToken);

            return token;
        }

        public async Task<Users>  Login(DtoLoginUser dtoLoginUser)
        {
            var someUser = await _ctx.Users.FirstOrDefaultAsync(x=>x.UserName==dtoLoginUser.UserName);
            if(someUser != null)
            {
                if(someUser.Password == dtoLoginUser.Password)
                {

                    return  someUser;
                }
            }
            return  null;
        }

        public async Task<Users> SignIn(DtoSignInUser dtoSignInUser)
        {
            if(await _ctx.Users.FirstOrDefaultAsync(x=>x.UserName== dtoSignInUser.UserName) == null)
            {
                Users newUser = new Users()
                {
                    UserName = dtoSignInUser.UserName,
                    Email = dtoSignInUser.UserName,
                    Password = dtoSignInUser.Password,
                    FirstName = dtoSignInUser.FirstName,
                    LastName = dtoSignInUser.LastName,
                    ProfileImgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRufJoXh6ISQsrdzd8h8GbUe_xmfoBNX09w&s",
                };
                return newUser;
            }
            return null;
        }
    }
}
