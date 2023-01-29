import Article from "../model/article.js";

export const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getArticleById = async (req, res) => {
  try {
    const articles = await Article.findById(req.params.id);
    res.json(articles);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createArticle = async (req, res) => {
  try {
    await Article.create(req.body);
    res.json({
      message: "Article Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateArticle = async (req, res) => {
  try {
    await Article.findByIdAndUpdate(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Article Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteArticle = async (req, res) => {
  try {
    await Article.findByIdAndRemove(req.params.id);
    res.json({
      message: "Article Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
