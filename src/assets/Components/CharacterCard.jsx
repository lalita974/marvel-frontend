const CharacterCard = (props) => {
  const { name, description, imageSrc } = props;
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={imageSrc} alt="img character" />
      <div>{description}</div>
    </div>
  );
};

export default CharacterCard;
