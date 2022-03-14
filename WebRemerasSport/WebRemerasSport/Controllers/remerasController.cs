using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using WebRemerasSport.Models;

namespace WebRemerasSport.Controllers
{
    [RoutePrefix("api/remeras")]
    public class remerasController : ApiController
    {
        private remeras_dbEntities db = new remeras_dbEntities();

        // GET: api/remeras
        public IQueryable<remera> Getremera()
        {
            return db.remera;
        }

        [ResponseType(typeof(remera))]
        [HttpGet]
        [Route("obtener-remeras/{name}")]
        public IHttpActionResult GetFilterRemeras(string name/*, string talla, string precio*/)
        {   
            var listado = db.remera.Where(x => x.nombre_remera.Contains(name) || x.talla.Contains(name)).ToList();

            return Ok(listado);
        }

        // GET: api/remeras/5
        [ResponseType(typeof(remera))]
        public async Task<IHttpActionResult> Getremera(int id)
        {
            remera remera = await db.remera.FindAsync(id);
            if (remera == null)
            {
                return NotFound();
            }

            return Ok(remera);
        }

        // PUT: api/remeras/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Putremera(int id, remera remera)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != remera.remera_id)
            {
                return BadRequest();
            }

            db.Entry(remera).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!remeraExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/remeras
        [ResponseType(typeof(remera))]
        public async Task<IHttpActionResult> Postremera(remera remera)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.remera.Add(remera);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = remera.remera_id }, remera);
        }

        // DELETE: api/remeras/5
        [ResponseType(typeof(remera))]
        public async Task<IHttpActionResult> Deleteremera(int id)
        {
            remera remera = await db.remera.FindAsync(id);
            if (remera == null)
            {
                return NotFound();
            }

            db.remera.Remove(remera);
            await db.SaveChangesAsync();

            return Ok(remera);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool remeraExists(int id)
        {
            return db.remera.Count(e => e.remera_id == id) > 0;
        }
    }
}