import { analyzeArticle } from "../services/aiService.js";
import { fetchNews } from "../services/ingestionService.js";

export const getArticles = async (req, res) => {
  const articles = fetchNews();

  const enriched = articles.map(article => ({
    ...article,
    analysis: analyzeArticle(article.content)
  }));

  res.json(enriched);
};
