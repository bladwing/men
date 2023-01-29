import express from "express";
import {
  getAllArticles,
  createArticle,
  getArticleById,
  updateArticle,
  deleteArticle,
} from "../controllers/article.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render('pages/main');
});

router.get("/article/", getAllArticles);
router.get("/article/:id", getArticleById);
router.post("/article/", createArticle);
router.patch("/article/:id", updateArticle);
router.delete("/article/deleteById/:id", deleteArticle);

export default router;
