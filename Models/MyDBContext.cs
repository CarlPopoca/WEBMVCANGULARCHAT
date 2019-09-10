using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WEBMVCANGULARCHAT.Models
{
    public class MyDBContext : DbContext

    {

        public MyDBContext(DbContextOptions<MyDBContext> options) : base(options)
        {
        }
        public DbSet<Message> Message { get; set; }
    }
}
