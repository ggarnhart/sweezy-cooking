const connectToDatabaseModule = require("../../db");
const Recipe = require("../../models/Recipe");

module.exports = async (req, res) => {
  const data = req.body.data;

  if (data.password === "sweezy") {
    try {
      await connectToDatabaseModule();

      var count = await Recipe.find().countDocuments();
      count = count + 1;

      var recipe_title = "";
      var main_image = "";
      var spotify_link = "";
      var spotify_title = "";
      var hashtag = "";
      var recipe_description = "";
      var servings = "";
      var time = "";
      var tagline = "";
      var video_link = "";
      if (undefined !== data.spotify_title) {
        spotify_title = data.spotify_title;
      }
      if (undefined !== data.video_link) {
        video_link = data.video_link;
      }

      if (undefined !== data.tagline) {
        tagline = data.tagline;
      }
      if (undefined !== time) {
        time = data.time;
      }
      if (undefined !== data.servings) {
        servings = String(data.servings);
      }

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
        hashtag = data.recipe_hashtag;
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
        hashtag,
        spotify_link,
        main_image,
        ingredients: ingredients,
        steps: steps,
        recipe_description,
        time,
        servings,
        tagline,
        video_link,
        count,
      });

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
