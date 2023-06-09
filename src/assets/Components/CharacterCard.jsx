import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";

const CharacterCard = (props) => {
  const { elem, imageSrc, favorite, handleFavorite } = props;
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const checkFavorite = (elem) => {
      for (let i = 0; i < favorite.length; i++) {
        if (favorite[i]._id === elem._id) {
          return setIsFavorite(true);
        }
      }
      return setIsFavorite(false);
    };
    checkFavorite(elem);
  }, [favorite, elem]);

  return (
    <article className="card">
      <h2>{elem.name}</h2>
      <a href={`/comics/${elem._id}`}>
        Voir comics associés{" "}
        <FontAwesomeIcon icon={faBoltLightning} style={{ color: "#35cfb8" }} />
      </a>

      <img src={imageSrc} alt="img character" />
      <div>{elem.description}</div>
      {isFavorite ? (
        <p>Carte favorite</p>
      ) : (
        <button
          onClick={() => {
            handleFavorite(elem, imageSrc);
          }}
        >
          Ajouter aux favoris
        </button>
      )}
    </article>
  );
};

export default CharacterCard;
