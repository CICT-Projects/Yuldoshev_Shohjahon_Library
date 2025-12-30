using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthorsController : ControllerBase
    {
        private readonly AppDbContext _db;

        public AuthorsController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Author>>> GetAll()
        {
            return Ok(await _db.Authors.ToListAsync());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Author>> Get(int id)
        {
            var author = await _db.Authors.FindAsync(id);
            if (author == null) return NotFound();
            return Ok(author);
        }

        [HttpPost]
        public async Task<ActionResult<Author>> Create(Author author)
        {
            _db.Authors.Add(author);
            await _db.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = author.Id }, author);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var author = await _db.Authors.FindAsync(id);
            if (author == null) return NotFound();
            _db.Authors.Remove(author);
            await _db.SaveChangesAsync();
            return NoContent();
        }
    }
}
