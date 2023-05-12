import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ComicCard from "../Components/ComicCard";

const ListComicByCharacter = (props) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();
  const { favorite, handleFavorite } = props;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          `https://site--marvel-backend--dgnyxjtbkkzs.code.run/comics/${characterId}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [characterId]);

  return isLoading ? (
    <p>Chargement en cours</p>
  ) : (
    <div className="list-comic-by-character">
      <div className="opacite">
        <div className="container">
          <h1>Personnage sélectionné</h1>
          <div className="small-container">
            <div className="personnage-selectionne">
              <img
                src={`${data.thumbnail.path}/portrait_incredible.${data.thumbnail.extension}`}
                alt="img"
              />
              <div className="name-description">
                <h3>{data.name}</h3>
                <div>{data.description}</div>
              </div>
            </div>
          </div>
          <h1>Comics liés à ce personnage</h1>
          <div className="comic-card">
            {data.comics &&
              data.comics.map((elem) => {
                const imageSrc = `${elem.thumbnail.path}/portrait_xlarge.${elem.thumbnail.extension}`;
                return (
                  <ComicCard
                    key={elem._id}
                    elem={elem}
                    imageSrc={imageSrc}
                    favorite={favorite}
                    handleFavorite={handleFavorite}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListComicByCharacter;
