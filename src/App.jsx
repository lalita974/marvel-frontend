import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

//Import des components
import Hearder from "./assets/Components/Header";

//Import des pages
import ListComic from "./assets/Pages/ListComic";
import ListCharacter from "./assets/Pages/ListCharacter";
import ListComicByCharacter from "./assets/Pages/ListComicByCharacter";
import ListFavorite from "./assets/Pages/ListFavorite";

//Import des icones
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
library.add(faBoltLightning);

const App = () => {
  const [favorite, setFavorite] = useState(Cookies.get("favoriteCards") || []);

  if (typeof favorite === "string") {
    setFavorite(JSON.parse(Cookies.get("favoriteCards")));
  }

  const handleFavorite = (elem, imageSrc) => {
    const newTab = [...favorite];
    if (elem.name) {
      newTab.push({
        _id: elem._id,
        name: elem.name,
        description: elem.description,
        imageSrc: imageSrc,
      });
    } else {
      newTab.push({
        _id: elem._id,
        title: elem.title,
        description: elem.description,
        imageSrc: imageSrc,
      });
    }
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
        <Route
          path="/comics"
          element={
            <ListComic favorite={favorite} handleFavorite={handleFavorite} />
          }
        />
        <Route
          path="/favorite"
          element={
            <ListFavorite favorite={favorite} setFavorite={setFavorite} />
          }
        />
        <Route
          path="/comics/:characterId"
          element={
            <ListComicByCharacter
              favorite={favorite}
              handleFavorite={handleFavorite}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
