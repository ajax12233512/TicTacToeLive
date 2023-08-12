using Microsoft.AspNetCore.SignalR;
using System;
using TicTacToeLive.Models;

namespace TicTacToeLive.Hubs
{
    public class GameHub : Hub
    {
        public async Task SendMessage(string message, string gameId)
        {
            await Clients.Groups(gameId).SendAsync("RecieveMessage", message);
        }
        /*
        public async Task JoinGame(string gameId)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, gameId);
        }
        */
        public async Task CreateGame(string gameId)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, gameId);
        }
    }
}
