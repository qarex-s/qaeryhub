using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using qaeryhub.Data;
using qaeryhub.Models;
using qaeryhub.Models.Dto;
using qaeryhub.Services;
using System.Text.Json.Nodes;

namespace qaeryhub.Controllers
{
    [Route("api/Performance")]
    [ApiController]
    public class PerformanceController : ControllerBase
    {
        private ApplicationDbContext _ctx;
        private ICRUDPerformance _crudPerformance;
        private readonly IHttpContextAccessor _contextAccessor;
        public PerformanceController(ApplicationDbContext ctx,ICRUDPerformance crudPerformance, IHttpContextAccessor httpContextAccessor) {
            _ctx = ctx;
            _crudPerformance = crudPerformance;
            _contextAccessor = httpContextAccessor;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var allGeneralPerformances = await _crudPerformance.GetAll();
            if (allGeneralPerformances == null)
            {
                return BadRequest("Bad request for getting all general performances");
            }


            return Ok(allGeneralPerformances);
            
        }

        [Authorize]
        [HttpGet("{id}")]
        public  async Task<IActionResult> GetById(int id)
        {

          var generalPerformance = await _crudPerformance.Get(id);

            if(generalPerformance == null)
            {
                return NotFound("General performance not found");
            }

            return Ok(generalPerformance);

        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] DtoCreateGeneralPerformane DtoGeneralPerformance)
        {
            
            if(DtoGeneralPerformance == null || DtoGeneralPerformance.PerformanceCategory==null)
            {
                return BadRequest("NEEEET");
            }

            var newGeneralPerformance = await _crudPerformance.Create(DtoGeneralPerformance);
            if (newGeneralPerformance == null)
            {
                return BadRequest("ERROR FOR CREATING PERFROMANCES");
            }

         

           
            return CreatedAtAction(nameof(GetById),new {id = newGeneralPerformance.Id},newGeneralPerformance);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {

            var result = await _crudPerformance.Delete(id);
            if (result == null)
            {
                return NotFound("ID OF SITE DIDN'T FIND");
            }

            return Ok();


        }

    }
}
