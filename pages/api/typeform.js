const connectToDatabaseModule = require("../../db");
const Recipe = require("../../models/Recipe");

function parseIngredients(q, u, t) {
  // quantity, unit, type
  var ingredient = {
    quantity: q,
    unit: u,
    type: t,
  };
  return ingredient;
}

module.exports = async (req, res) => {
  // first, check the password
  //   console.log(req.body.form_response.answers);
  try {
    const pw = req.body.form_response.answers[0].text;
    if (pw === "sweezy") {
      const all_answers = req.body.form_response.answers;
      const recipe_title = all_answers[1].text;
      const spotify_link = all_answers[2].text;
      const hashtag = all_answers[3].text;

      // now it is ingredients time.
      var has_ingredients_left = true;
      var step = 4; // current place in the form
      var all_ingredients = [];
      var breaker = 0;
      while (has_ingredients_left && breaker < all_answers.length) {
        cur_q = 0;
        cur_u = "";
        cur_t = "";
        if (all_answers[step].type === "number") {
          cur_q = all_answers[step].number;
        } else if (all_answers[step].type === "boolean") {
          has_ingredients_left = all_answers[step].boolean;

          all_ingredients.push(parseIngredients(cur_q, cur_u, cur_t));
          // console.log(all_ingredients);
          step = step + 1;
        }

        if (all_answers[step + 1].type === "text") {
          cur_u = all_answers[step + 1].text;
        } else if (all_answers[step + 1].type === "boolean") {
          has_ingredients_left = all_answers[step + 1].boolean;

          all_ingredients.push(parseIngredients(cur_q, cur_u, cur_t));
          // console.log(all_ingredients);
          step = step + 2;
        }

        if (all_answers[step + 2].type === "text") {
          cur_t = all_answers[step + 2].text;
        } else if (all_answers[step + 2].type === "boolean") {
          has_ingredients_left = all_answers[step + 2].boolean;

          all_ingredients.push(parseIngredients(cur_q, cur_u, cur_t));
          console.log(all_ingredients);
          step = step + 3;
        }

        if (all_answers[step + 3].type === "boolean") {
          // console.log("in");
          has_ingredients_left = all_answers[step + 3].boolean;
          // console.log("out");

          all_ingredients.push(parseIngredients(cur_q, cur_u, cur_t));
          // console.log(all_ingredients);
          step = step + 4;
        }
        breaker++;
      }

      var steps = [];
      while (step < all_answers.length) {
        steps.push(all_answers[step].text);
        step = step + 1;
      }

      await connectToDatabaseModule();
      var recipe = Recipe({
        recipe_title: recipe_title,
        spotify_link: spotify_link,
        hashtag: hashtag,
        ingredients: all_ingredients,
        steps: steps,
      });
      recipe.save();
      // console.log("saved");
    }
  } catch (e) {
    console.log(e);
  }
  res.status(200).send("ok");
};
