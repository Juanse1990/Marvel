import PropTypes from "prop-types";
import Card from "./Card";

const Characters = ({ characters }) => {
  console.log(characters);
  return (
    <div className="container">
      <div className="d-flex flex-wrap flex-row col-12">
        {characters.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

Characters.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default Characters;
