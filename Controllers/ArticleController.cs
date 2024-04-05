using Microsoft.AspNetCore.Mvc;
using APITest.Models.Article;
using APITest.BddConnection;

namespace APITest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]


    public class ArticleController : ControllerBase
    {
        private static List<Article> articles = new(); // Liste obsolète, supprimer 

        [HttpGet]
       /** public IActionResult GetAllArticle()
        {
            
        } */

        [HttpGet("{id}")]
        public IActionResult GetArticleById(int id)
        {
            var article = articles.FirstOrDefault(u => u.Id == id); // ligne à supprimer, à remplacer par la requête pour chercher l'article
            if (article == null)
            {
                return NotFound();
            }

            return Ok(article);
        }

        [HttpPost]
        public IActionResult CreateArticle([FromBody] Article article)
        {
            article.Id = articles.Count + 1;
            articles.Add(article);

            return CreatedAtAction(nameof(GetArticleById), new { id = article.Id }, article);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateArticle(int id, [FromBody] Article updateArticle)
        {
            var existingArticle = articles.FirstOrDefault(u => u.Id == id);
            if (existingArticle == null)
            {
                return NotFound();
            }

            existingArticle.Name = updateArticle.Name;
            existingArticle.Description = updateArticle.Description;
            existingArticle.SellingPrice = updateArticle.SellingPrice;
            existingArticle.BuyingPrice = updateArticle.BuyingPrice;

            return NoContent();

        }

        [HttpDelete("{id}")]
        public IActionResult DeleteArticle(int id)
        {

            var article = articles.FirstOrDefault(u => u.Id == id);
            if (article == null)
            {
                return NotFound();
            }

            articles.Remove(article);

            return NoContent();
        }




    }
}
