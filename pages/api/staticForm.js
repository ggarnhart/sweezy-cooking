const connectToDatabaseModule = require("../../db");
const Recipe = require("../../models/Recipe");

module.exports = async (req, res) => {
  const data = req.body.data;

  // console.log(data);

  if (data.password === "sweezy") {
    try {
      await connectToDatabaseModule();

      var recipe_title = "";
      var main_image = "";
      var spotify_link = "";
      var recipe_hashtag = "";
      var recipe_description = "";

      if (undefined !== data.recipe_title) {
        recipe_title = data.recipe_title;
      }

      if (undefined !== data.main_image) {
        main_image = data.main_image;
      }

      if (undefined !== data.spotify_link) {
        spotify_link = data.spotify_link;
      }

      if (undefined !== data.recipe_hashtag) {
        recipe_hashtag = data.recipe_hashtag;
      }
      if (undefined !== data.recipe_description) {
        recipe_description = data.recipe_description;
      }
      // now ingredients.
      var foundIngredientEnd = false;
      var i = 0;
      var ingredients = [];

      while (!foundIngredientEnd) {
        if (undefined !== data[`ingredientEND${i}`]) {
          i++;
        } else {
          foundIngredientEnd = true;
        }
      }
      for (var ingCounter = 0; ingCounter < i; ingCounter++) {
        var curIngredient = {
          quantity: data[`ingredient${ingCounter}quantity`],
          unit: data[`ingredient${ingCounter}unit`],
          type: data[`ingredient${ingCounter}type`],
        };

        ingredients.push(curIngredient);
      }

      // let's do steps now.
      i = 0;
      var stepCountFound = false;

      while (!stepCountFound) {
        if (undefined !== data[`stepEND${i}`]) {
          i++;
        } else {
          stepCountFound = true;
        }
      }

      var steps = [];
      for (var stepCounter = 0; stepCounter < i; stepCounter++) {
        var curStep = {};
        if (undefined !== data[`step ${stepCounter} image`]) {
          curStep["step_photo"] = data[`step ${stepCounter} image`];
        }
        curStep["step_instructions"] = data[`step ${stepCounter}`];
        steps.push(curStep);
      }

      var recipe = new Recipe({
        recipe_title,
        recipe_hashtag,
        spotify_link,
        main_image,
        ingredients: ingredients,
        steps: steps,
        recipe_description,
      });
      // console.log(recipe);
      await recipe.save();
      res.status(200).send("Ok!");
    } catch (e) {
      console.log(e);
      res.status(500).send("internal server error.");
    }
  } else {
    console.log("Password not confirmed");
    res.status(500).send("bad pw");
  }
};
