using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using qaeryhub.Data;
using qaeryhub.Models;
using qaeryhub.Models.DTOUser;
using qaeryhub.Services.User;
using System.Security.Claims;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace qaeryhub.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private readonly ApplicationDbContext _ctx;
        private readonly IHttpContextAccessor _contextAccessor;
        private readonly IUserInfo _userInfo;

        public ProfileController(ApplicationDbContext ctx, IHttpContextAccessor contextAccessor, IUserInfo userInfo)
        {
            _ctx = ctx;
            _contextAccessor = contextAccessor;
            _userInfo = userInfo;

        }
        // GET: api/<ProfileController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {

            var userEmail = _contextAccessor.HttpContext?.User.FindFirstValue(ClaimTypes.NameIdentifier);
            var user = await _ctx.Users.FirstOrDefaultAsync(u => u.Email == userEmail);

            if (user != null)
            {
                return Ok(await _userInfo.getAllInfoUser(user.UserId));
            }
            return BadRequest("user Not Found || ProfileController");
        }

        // GET api/<ProfileController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            
            return "value";
        }

        // POST api/<ProfileController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<ProfileController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ProfileController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
