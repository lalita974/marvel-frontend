import axios from "axios";
import { useEffect, useState } from "react";
import ComicCard from "../Components/ComicCard";
import Pagination from "../Components/Pagination";

const ListComic = (props) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { favorite, handleFavorite } = props;
  const [searchComic, setSearchComic] = useState("");
  const [totalComic, setTotalComic] = useState();
  const [currentPageComic, setCurrentPageComic] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          `http://127.0.0.1:3000/comics?title=${searchComic}&skip=${currentPageComic}`
        );
        setData(response.data);
        setTotalComic(response.data.count);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [searchComic, currentPageComic]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="fond">
      <div className="list-comic">
        <div className="opacite">
          <div className="container">
            <h1>Liste des comics</h1>
            <div className="recherche">
              <div>Nombre de comics : {totalComic}</div>
              <input
                type="text"
                placeholder="Rechercher un comic..."
                onChange={(event) => {
                  setSearchComic(event.target.value);
                }}
              />
              <div>Page actuelle : {currentPageComic}</div>
            </div>
            <Pagination
              total={totalComic}
              setCurrentPage={setCurrentPageComic}
            />
            <div className="comic-card ">
              {data.results.map((elem) => {
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
            <Pagination
              total={totalComic}
              setCurrentPage={setCurrentPageComic}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListComic;
