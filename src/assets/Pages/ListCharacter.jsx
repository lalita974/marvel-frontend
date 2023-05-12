import axios from "axios";
import { useEffect, useState } from "react";
import CharacterCard from "../Components/CharacterCard";
import Pagination from "../Components/Pagination";

const ListCharacter = (props) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { favorite, handleFavorite } = props;
  const [searchCharacter, setSearchCharacter] = useState("");
  const [totalCharacter, setTotalCharacter] = useState();
  const [currentPageCharacter, setCurrentPageCharacter] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          `https://site--marvel-backend--dgnyxjtbkkzs.code.run/characters?name=${searchCharacter}&skip=${currentPageCharacter}`
        );
        setData(response.data);
        setTotalCharacter(response.data.count);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [searchCharacter, currentPageCharacter]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="fond">
      <div className="list-character">
        <div className="opacite">
          <div className="container">
            <h1>Liste des personnages</h1>
            <div className="recherche">
              <div>Nombre de personnages : {totalCharacter}</div>
              <input
                type="text"
                placeholder="Rechercher un personnage..."
                onChange={(event) => {
                  setSearchCharacter(event.target.value);
                }}
              />
              <div>Page actuelle : {currentPageCharacter}</div>
            </div>
            <Pagination
              total={totalCharacter}
              setCurrentPage={setCurrentPageCharacter}
            />
            <div className="character-card">
              {data.results.map((elem) => {
                const imageSrc = `${elem.thumbnail.path}/portrait_xlarge.${elem.thumbnail.extension}`;
                return (
                  <CharacterCard
                    key={elem._id}
                    elem={elem}
                    imageSrc={imageSrc}
                    favorite={favorite}
                    handleFavorite={handleFavorite}
                  />
                );
              })}
            </div>
            <Pagination
              total={totalCharacter}
              setCurrentPage={setCurrentPageCharacter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCharacter;
