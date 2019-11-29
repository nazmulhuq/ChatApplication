using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChatApp
{
    public class ChatHub : Hub
    {
        public void Announce(string message)
        {
            Clients.Others.Announce(message);
        }
    }
}