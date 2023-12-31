import React from "react";
import Tile from "./components/Tile";
import brand from "./assets/brand.png";
import our_story from "./assets/our_story.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Tile title="The brand">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
      </Tile>
      <Tile img={brand} imgDescription="The brand logo" />
      <Tile img={our_story} imgDescription="The designers" />
      <Tile title="Our story">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eligendi exercitationem illo, labore laboriosam nihil omnis praesentium. Aspernatur cum deleniti excepturi itaque, laboriosam nisi rerum sunt. At repellendus tenetur veniam!</p>
      </Tile>
    </div>
  );
}

export default App;
