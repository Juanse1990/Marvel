import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import placeholder from "../../../assets/placeholder.jpg";

const Card = ({ comics }) => {
  const imagePath =
    comics.images.length > 0
      ? comics.images[0].path.concat(".jpg")
      : placeholder;

  return (
    <>
      <Link
        className="col-12 col-md-3 mb-5 d-flex justify-content-center"
        to={`/detail/${comics.id}`}
      >
        <div
          className="card bg-black"
          style={{ width: "16rem", cursor: "pointer" }}
        >
          <img src={imagePath} className="card-img-top rounded" alt="Empty" />
          <div className="card-body">
            <h5 className="card-title text-center text-white">
              {comics.title}
            </h5>
          </div>
        </div>
      </Link>
    </>
  );
};

Card.propTypes = {
  comics: PropTypes.object.isRequired,
};

export default Card;
