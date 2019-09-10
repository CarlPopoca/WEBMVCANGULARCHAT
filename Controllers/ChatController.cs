using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WEBMVCANGULARCHAT.Models;

namespace WEBMVCANGULARCHAT.Controllers
{
    [Route("api/[controller]")]
    public class ChatController : Controller
    {
        private MyDBContext db;

        public ChatController(MyDBContext context)
        {
            db = context;
        }

        [HttpGet("[action]")]
        public IEnumerable<MessageViewModel> Message()
        {
            List<MessageViewModel> lst = (from d in db.Message
                                          select new MessageViewModel
                                          {
                                              Id = d.Id,
                                              Name = d.Name,
                                              Text = d.Text
                                          }
            ).ToList();

            return lst;

        }
    }
}
