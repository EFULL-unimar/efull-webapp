using ApiProva.Models;
using Microsoft.EntityFrameworkCore;

namespace ApiProva.DataContext
{
    public class ApiContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)

        {
            optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=ApiProvaDB;ConnectRetryCount=0");
        }
        public DbSet<Usuario> Usuarios { get; set; }

        public DbSet<Central> UsuariosCentral { get; set; }

        public DbSet<Entrega> Entregas { get; set; }
    }
}