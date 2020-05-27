const connectToDatabaseModule = require("../../../db");
const Recipe = require("../../../models/Recipe");

module.exports = async (req, res) => {
  var count = await req.query.recipe_counter;
  if (undefined === count) {
    res.status(100).send("searching"); // this doesn't work but i have absolutely no idea why
  }
  if (!Number.isNaN(count)) {
    count = parseInt(count);
  }
  try {
    await connectToDatabaseModule();
    if (!Number.isNaN(count)) {
      const recipe = await Recipe.findOne({ count: count });

      res.send(recipe);
    } else {
      res.status(100).send("searching");
    }
  } catch (e) {
    console.log(e);
    res.status(500).send("Recipe not found");
  }
};
