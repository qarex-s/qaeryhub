using qaeryhub.Models;
using qaeryhub.Models.DtoAuth;

namespace qaeryhub.Services.Auth
{
    public interface IAuthIdentity
    {
        public Task<Users> Login(DtoLoginUser dtoLoginUser);
        public Task<Users> SignIn(DtoSignInUser dtoSignInUser);
        public Task<string> GetJwtToken(DtoAuthUserCred dtoAuthUserCred);
    }
}
