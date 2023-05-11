import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

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
  const [favorite, setFavorite] = useState(Cookies.get("favoriteCards") || []);

  if (typeof favorite === "string") {
    setFavorite(JSON.parse(Cookies.get("favoriteCards")));
  }

  const handleFavorite = (elem, imageSrc) => {
    console.log(elem);
    console.log(imageSrc);
    const newTab = [...favorite];
    console.log(newTab);
    newTab.push({ ...elem, imageSrc: imageSrc });
    setFavorite(newTab);
    const cookieString = JSON.stringify(newTab);
    Cookies.set("favoriteCards", cookieString, {
      expires: 7,
      sameSite: "Strict",
    });
  };

  return (
    <Router>
      <Hearder />
      <Routes>
        <Route
          path="/"
          element={
            <ListCharacter
              favorite={favorite}
              handleFavorite={handleFavorite}
            />
          }
        />
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
