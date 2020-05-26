const connectToDatabaseModule = require("../../db");
const Recipe = require("../../models/Recipe");

module.exports = async (req, res) => {
  try {
    await connectToDatabaseModule();
    var recipes = await Recipe.find();
    res.send(recipes);
  } catch (e) {
    console.log(e);
    res.status(400).send("no luck");
  }
};
