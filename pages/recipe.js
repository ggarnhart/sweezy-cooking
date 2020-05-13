import RecipeSplash from "../components/recipeSplash";
import { Container } from "react-bootstrap";
import SpotifySquare from "../components/spotifySquare";
import Ingredients from "../components/ingredients";
import RecipeStep from "../components/recipeStep";
import HashtagSquare from "../components/hashtagSquare";
export default function Recipe() {
  var ingArr = [
    {
      amount: 1,
      unit: "cup",
      ingredient: "flour",
    },
    {
      amount: 2,
      unit: "cups",
      ingredient: "sugar",
    },
    { amount: 3, unit: "tsp", ingredient: "espresso" },
  ];
  var exSteps = [
    {
      imageLink:
        "https://images.unsplash.com/photo-1506238359040-22480587eb7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80",
      details:
        "Start by preheating your coffee to 375 degrees because it is probably cold by now. That said, 375 degrees is a little hot. Let's not burn ourselves, eh?",
    },
    {
      details:
        "Now that your coffee is hot, we're gonna want to cool it down by putting some ice in it. Just a thought.",
    },
  ];
  function renderSteps(steps) {
    var i = 0;
    var stepComponents = steps.map(function (step) {
      i = i + 1;
      if (undefined !== step.imageLink) {
        return (
          <RecipeStep
            imageLink={step.imageLink}
            stepCount={i}
            details={step.details}
          />
        );
      } else {
        return <RecipeStep stepCount={i} details={step.details} />;
      }
    });
    return stepComponents;
  }
  return (
    <div>
      <RecipeSplash
        pictureLink="https://images.unsplash.com/photo-1542676303584-c8043a6c7618?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
        videoLink="https://www.youtube.com/watch?v=EtU2f0qrGrY"
        recipeTitle="Creamy Mediterranean Hummus"
      />
      <Container>
        <br />
        <h2 className="heaviest margin-top-header">Prep</h2>
        <SpotifySquare
          link="https://open.spotify.com/track/0mJQlCl9YgxW7kyeltNiVk?si=dM9msNzoSTCkWRunc0JZAg"
          songTitle="Touch of Grey"
        />
        <Ingredients indgredientArray={ingArr} />

        <h2 className="heaviest margin-top-header">Recipe</h2>
        {renderSteps(exSteps)}

        <HashtagSquare hashtag="sweezyHummus" />
      </Container>
    </div>
  );
}
