import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//Import des components
import Hearder from "./assets/Components/Header";
import CharacterCard from "./assets/Components/CharacterCard";
import ComicCard from "./assets/Components/ComicCard";

//Import des pages
import ListComic from "./assets/Pages/ListComic";
import ListCharacter from "./assets/Pages/ListCharacter";
import ListComicByCharacter from "./assets/Pages/ListComicByCharacter";
import ListFavorite from "./assets/Pages/ListFavorite";

const App = () => {
  return (
    <Router>
      <Hearder />
      <Routes>
        <Route path="/" element={<ListCharacter />} />
        <Route path="/comics" element={<ListComic />} />
        <Route path="/favorite" element={<ListFavorite />} />
        <Route path="/comics/:characterId" element={<ListComicByCharacter />} />
        <Route path="/comic/:comicId" element={<ComicCard />} />
        <Route path="/character/:characterId" element={<CharacterCard />} />
      </Routes>
    </Router>
  );
};

export default App;
