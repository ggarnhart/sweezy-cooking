import Head from "next/head";
import useSWR from "swr";
import Landing from "../components/landing";

function fetcher(url) {
  return fetch(url).then((r) => r.json());
}

export default function Home() {
  // const { data, error } = useSWR("../api/get-recipes", fetcher);

  // if (data) {
  //   var recipes = data.recipes.map(function (recipe) {
  //     // return
  //   });
  // }

  return (
    // <div className="container">
    //   <a href="/recipe">see recipe page</a>
    //   <a href="https://gregoryegarnhart.typeform.com/to/m7AI6C">Typeform</a>
    // </div>
    <Landing
      data={[
        {
          date: "May 15, 2020",
          title: "Recipe Title 2",
          description: "A delcious blend of flavors",
          image:
            "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80",
        },
        {
          date: "May 15, 2020",
          title: "Recipe Title 3",
          description: "A delcious blend of flavors",
          image:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
        },
        {
          date: "May 15, 2020",
          title: "Recipe Title 4",
          description: "A delcious blend of flavors",
          image:
            "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
        },
        {
          date: "May 15, 2020",
          title: "Recipe Title 5",
          description: "A delcious blend of flavors",
          image:
            "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1862&q=80",
        },
        {
          date: "May 19, 2020",
          title: "Recipe Title 1",
          description: "A delcious blend of flavors",
          image:
            "https://images.unsplash.com/photo-1515516969-d4008cc6241a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3265&q=80",
        },
      ]}
    />
  );
}
