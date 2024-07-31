import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {
      <App />
      // <>
      //   <StarRating maxRating={5} size={24} />
      //   <StarRating maxRating={10} />
      //   <StarRating
      //     color="purple"
      //     className="test"
      //     messages={["Tirrable", "Bad", "Ok", "Good", "Amazing"]}
      //     defaultRating={3}
      //   />
      //   <Test />
      // </>
    }
  </React.StrictMode>
);

// const x = `Space travel requires some seriously amazing technology and
// collaboration between countries, private companies, and international
// space organizations. And while it's not always easy (or cheap), the
// results are out of this world. Think about the first time humans stepped
// foot on the moon or when rovers were sent to roam around on Mars.`;

// const p = x.split(" ").slice(0, 20);
// console.log(p);
