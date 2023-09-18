import PropTypes from "prop-types";

const Card = ({ character }) => {
  console.log(character);
  const imagePath =
    character.thumbnail != null
      ? character.thumbnail.path.concat(".jpg")
      : "../../src/assets/placeholder.jpg";

  return (
    <>
      <div className="col-3">
        <div className="card bg-black">
          <img src={imagePath} className="card-img-top rounded" alt="Empty" />
          <div className="card-body">
            <h5 className="card-text text-center text-white fs-6">
              {character.name}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  character: PropTypes.object.isRequired,
};

export default Card;
