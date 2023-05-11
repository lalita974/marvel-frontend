import axios from "axios";
import { useEffect, useState } from "react";
import CharacterCard from "../Components/CharacterCard";

const ListCharacter = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(`http://127.0.0.1:3000/characters`);
        setData(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="fond">
      <div className="list-character">
        <div className="opacite">
          <div className="container">
            <h1>Liste des personnages</h1>
            <input type="text" placeholder="Rechercher un personnage" />
            <div className="character-card ">
              {data.results.map((elem, index) => {
                const imageSrc = `${elem.thumbnail.path}/portrait_xlarge.${elem.thumbnail.extension}`;
                return (
                  <article key={index}>
                    <CharacterCard
                      name={elem.name}
                      description={elem.description}
                      imageSrc={imageSrc}
                    />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCharacter;
