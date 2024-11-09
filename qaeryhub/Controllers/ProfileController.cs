using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using qaeryhub.Data;
using qaeryhub.Models;
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

        public ProfileController(ApplicationDbContext ctx, IHttpContextAccessor contextAccessor)
        {
            _ctx = ctx;
            _contextAccessor = contextAccessor;

        }
        // GET: api/<ProfileController>
        [HttpGet]
        public async Task<Users> Get()
        {

            var userEmail = _contextAccessor.HttpContext?.User.FindFirstValue(ClaimTypes.NameIdentifier);
            Users user = await _ctx.Users.FirstOrDefaultAsync(u => u.Email == userEmail);
            return user;
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
