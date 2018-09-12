using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SignalRDemo
{
    public class MyHub: Hub
    {
        public void Announce(string message)
        {
            Clients.All.Bannounce(message+" haha");
        }
        public void getServerDateTime()
        {
            Clients.All.Bannounce("BanCho");
            Clients.Caller.Bannounce(DateTime.Now.ToString());
           
        }
    }
}