using Microsoft.AspNetCore.SignalR;
using System;
using TicTacToeLive.Models;

namespace TicTacToeLive.Hubs
{
    public class GameHub : Hub
    {
        public async Task SendMessage(string message, string gameId, string fromUsername)
        {
            await Clients.Groups(gameId).SendAsync("RecieveMessage", message, fromUsername);
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
