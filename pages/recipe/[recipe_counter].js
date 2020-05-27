// import RecipeSplash from "../components/recipeSplash";
import { Container, Spinner } from "react-bootstrap";
import SpotifySquare from "../../components/spotifySquare";
import Ingredients from "../../components/ingredients";
import RecipeStep from "../../components/recipeStep";
import HashtagSquare from "../../components/hashtagSquare";
import { useRouter } from "next/router";
import useSWR from "swr";
import RecipeSplash from "../../components/recipeSplash";

function fetcher(url) {
  return fetch(url).then((r) => r.json());
}

export default function Recipe() {
  const router = useRouter();
  const { recipe_counter } = router.query;
  //   console.log(recipe_counter);
  var { data, error } = useSWR(`../api/get-recipe/${recipe_counter}`, fetcher);

  // primarily used because of the counter with i.
  function renderSteps() {
    var i = 0;
    var stepComponents = data.steps.map(function (step) {
      i = i + 1;
      return (
        <RecipeStep
          imageLink={step.step_photo}
          stepCount={i}
          details={step.step_instructions}
          key={step._id}
        />
      );
    });
    return stepComponents;
  }

  if (data) {
    return (
      <div>
        <RecipeSplash
          pictureLink={data.main_image}
          videoLink={data.videoLink}
          recipeTitle={data.recipe_title}
        />
        <Container>
          <br />
          <h2 className="heaviest margin-top-header">Prep</h2>
          <SpotifySquare link={data.spotify_link} />
          <Ingredients indgredientArray={data.ingredients} />
          <h2 className="heaviest margin-top-header">Recipe</h2>
          {renderSteps()}
          <HashtagSquare hashtag={data.hashtag} />
        </Container>
      </div>
    );
  } else {
    return (
      <div className="full-height offwhite-background center-everything">
        <Spinner animation="border" />
      </div>
    );
  }
}
