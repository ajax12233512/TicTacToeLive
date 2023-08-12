using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TicTacToeLive.Models;

namespace TicTacToeLive.Controllers
{
    public class BoardController : Controller
    {
        private static Random random = new Random();
        public static string RandomString(int length)
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }
        // GET: BoardController
        public ActionResult Index()
        {
            var user = new User();
            user.ConnectionId = RandomString(10);
            
            ViewData["connectionId"] = user.ConnectionId;
            return View();

        }

        /*
        public ActionResult Index(bool join, int gameCode)
        {
            
            return Ok();
        }
        */
        // GET: BoardController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: BoardController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: BoardController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: BoardController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: BoardController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: BoardController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: BoardController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
