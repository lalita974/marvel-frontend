import Cookies from "js-cookie";

const ListFavorite = (props) => {
  const { favorite, setFavorite } = props;
  return (
    <div className="fond">
      <div className="list-favorite">
        <div className="opacite">
          <div className="container">
            <h1>Liste des favoris</h1>
            {favorite.length !== 0 && (
              <button
                onClick={() => {
                  Cookies.remove("favoriteCards");
                  setFavorite([]);
                }}
              >
                Vider la liste des favoris
              </button>
            )}

            <div className="character-card">
              {favorite.length === 0 ? (
                <div className="empty-favorite">
                  Votre liste de favoris est vide.
                </div>
              ) : (
                favorite.map((elem) => {
                  return (
                    <article key={elem._id} className="card">
                      {elem.name ? <h2>{elem.name}</h2> : <h2>{elem.title}</h2>}
                      <img src={elem.imageSrc} alt="img favorite" />
                      <div>{elem.description}</div>
                    </article>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListFavorite;
