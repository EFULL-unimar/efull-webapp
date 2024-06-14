using ApiProva.DataContext;
using ApiProva.DTO;
using ApiProva.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ApiProva.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CentralUsuariosController : ControllerBase
    {
        private readonly ApiContext _context;

        public CentralUsuariosController(ApiContext context)
        {
            _context = context;
        }

        // GET: api/CentralUsuarios
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Central>>> GetUsuariosCentral()
        {
            return await _context.UsuariosCentral.ToListAsync();
        }

        // GET: api/CentralUsuarios/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Central>> GetUsuarioCentral(int id)
        {
            var usuarioCentral = await _context.UsuariosCentral.FindAsync(id);

            if (usuarioCentral == null)
            {
                return NotFound();
            }

            return usuarioCentral;
        }

        // POST: api/CentralUsuarios
        [HttpPost]
        public async Task<ActionResult<Central>> PostUsuarioCentral(CentralDTO centralDto)
        {
            var usuarioCentral = new Central
            {
                Nome = centralDto.Nome,
                Email = centralDto.Email
            };

            _context.UsuariosCentral.Add(usuarioCentral);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUsuarioCentral), new { id = usuarioCentral.CentralId }, usuarioCentral);
        }

        // PUT: api/CentralUsuarios/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsuarioCentral(int id, CentralDTO centralDto)
        {
            var usuarioCentral = await _context.UsuariosCentral.FindAsync(id);
            if (usuarioCentral == null)
            {
                return NotFound();
            }

            usuarioCentral.Nome = centralDto.Nome;
            usuarioCentral.Email = centralDto.Email;

            _context.Entry(usuarioCentral).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsuarioCentralExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/CentralUsuarios/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsuarioCentral(int id)
        {
            var usuarioCentral = await _context.UsuariosCentral.FindAsync(id);
            if (usuarioCentral == null)
            {
                return NotFound();
            }

            _context.UsuariosCentral.Remove(usuarioCentral);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UsuarioCentralExists(int id)
        {
            return _context.UsuariosCentral.Any(e => e.CentralId == id);
        }
    }
}
