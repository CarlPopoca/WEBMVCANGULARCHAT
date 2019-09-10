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
                                          orderby d.Id descending
                                          select new MessageViewModel
                                          {
                                              Id = d.Id,
                                              Name = d.Name,
                                              Text = d.Text
                                          }
            ).ToList();

            return lst;

        }
        [HttpPost("[action]")]
        public MyResponse Add([FromBody] MessageViewModel model)
        {
            MyResponse oR = new MyResponse();
            try
            {
                Message objMessage = new Message();
                objMessage.Name = model.Name;
                objMessage.Text = model.Text;
                db.Message.Add(objMessage);
                db.SaveChanges();
                oR.Success = 1;
            }
            catch (Exception ex)
            {
                oR.Success = 1;
                oR.Message = ex.Message;
            }
            return oR;
        }
    }
}
