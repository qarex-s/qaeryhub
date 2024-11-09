using qaeryhub.Models.DTOUser;

namespace qaeryhub.Services.User
{
    public interface IUserInfo
    {
        public Task<DTOUserInfo> getAllInfoUser(int userId);
    }
}
