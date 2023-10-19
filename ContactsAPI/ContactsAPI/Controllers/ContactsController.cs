using AutoMapper;
using ContactsAPI.Data;
using ContactsAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ContactsAPI.Controllers
{


    [ApiController]
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
        private readonly ContactsAPIDbContext dbContext;
        private readonly IMapper _mapper;

        public ContactsController(ContactsAPIDbContext dbContext, IMapper mapper)
        {
            this.dbContext = dbContext;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetContacts()

        {
            return Ok(await dbContext.Contacts.ToListAsync()); //talk to contacts table and return list
        }

        [HttpGet("noid")]
        public async Task<IActionResult> GetCon()

        {
            var existingContact = await dbContext.Contacts.ToListAsync();
            
            
            var add = _mapper.Map<List<AddContactRequest>>(existingContact);
            return Ok(add);

        }


        [HttpPost]
        public async Task<IActionResult> AddContacts(AddContactRequest addContactRequest)
        {
            var add = _mapper.Map<Contacts>(addContactRequest);
            await dbContext.Contacts.AddAsync(add);
            await dbContext.SaveChangesAsync();
            return Ok();
        }
        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> EditContacts([FromRoute] Guid id, [FromBody] AddContactRequest addContactRequest)
        {
            var existingContact = await dbContext.Contacts.FindAsync(id);

            if (existingContact == null)
            {
                return NotFound();
            }

            _mapper.Map(addContactRequest, existingContact);

            try
            {
                await dbContext.SaveChangesAsync();
                return Ok();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Handle concurrency exception, if needed
                return StatusCode(500, "Concurrency error occurred while updating the contact.");
            }
        }
        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            var existingContact = await dbContext.Contacts.FindAsync(id);

            if (existingContact == null)
            {
                return NotFound();


            }
            dbContext.Contacts.Remove(existingContact);
            await dbContext.SaveChangesAsync();
            return Ok();
        }
    }

}
