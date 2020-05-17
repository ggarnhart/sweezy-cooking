const mongoose = require("mongoose");
const RecipeSchema = mongoose.Schema({
  date_added: { type: Date, default: Date.now() },
  recipe_title: { type: String },
  spotify_link: { type: String },
  hashtag: { type: String },
  ingredients: [
    {
      quantity: { type: Number },
      unit: { type: String },
      type: { type: String },
    },
  ],
  steps: [{ type: String }],
});

global.RecipeSchema =
  global.RecipeSchema || mongoose.model("Recipe", RecipeSchema);
module.exports = global.RecipeSchema;
