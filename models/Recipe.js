const mongoose = require("mongoose");
const RecipeSchema = mongoose.Schema({
  date_added: { type: Date, default: Date.now() },
  recipe_title: { type: String },
  spotify_link: { type: String },
  hashtag: { type: String },
  count: { type: Number },
  main_image: { type: String },
  recipe_description: { type: String, default: "" },
  ingredients: [
    {
      quantity: { type: String, default: "" },
      unit: { type: String, default: "" },
      type: { type: String, default: "" },
    },
  ],
  steps: [
    {
      step_instructions: { type: String },
      step_photo: { type: String },
    },
  ],
});

global.RecipeSchema =
  global.RecipeSchema || mongoose.model("Recipe", RecipeSchema);
module.exports = global.RecipeSchema;
