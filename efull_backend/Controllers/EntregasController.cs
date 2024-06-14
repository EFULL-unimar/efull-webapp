using ApiProva.DataContext;
using ApiProva.DTO;
using ApiProva.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ApiProva.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EntregasController : Controller
    {
        private readonly ApiContext _context;

        public EntregasController(ApiContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> RegistrarEntrega([FromBody] EntregaDTO entregaDto)
        {
            if (entregaDto == null)
            {
                return BadRequest();
            }

            var entrega = new Entrega
            {
                EnderecoDestinatario = entregaDto.EnderecoDestinatario,
                EnderecoRemetente = entregaDto.EnderecoRemetente,
                Distancia = entregaDto.Distancia,
                DataEntrega = DateTime.Now,
                Status = "Pendente" // Status inicial
            };

            _context.Entregas.Add(entrega);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Entrega registrada com sucesso" });
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Entrega>>> GetEntregas()
        {
            var entregas = await _context.Entregas.ToListAsync();
            return Ok(entregas);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> AtualizarStatus(int id, [FromBody] AtualizarStatusDTO atualizarStatusDto)
        {
            var entrega = await _context.Entregas.FindAsync(id);
            if (entrega == null)
            {
                return NotFound();
            }

            if (atualizarStatusDto.Status != "Finalizada")
            {
                return BadRequest(new { message = "Status inválido. O status deve ser 'Finalizada'." });
            }

            entrega.Status = atualizarStatusDto.Status;
            _context.Entregas.Update(entrega);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Entrega>> GetEntregaById(int id)
        {
            var entrega = await _context.Entregas.FindAsync(id);
            if (entrega == null)
            {
                return NotFound();
            }

            return Ok(entrega);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEntrega(int id)
        {
            var entrega = await _context.Entregas.FindAsync(id);
            if (entrega == null)
            {
                return NotFound();
            }

            _context.Entregas.Remove(entrega);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
