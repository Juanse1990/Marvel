import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import axios from "axios";
import Characters from "./components/Characters";

const Detail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [comic, setComic] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const [comicResponse, charactersResponse] = await Promise.all([
          axios.get(
            `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=${
              import.meta.env.VITE_TS
            }&apikey=${import.meta.env.VITE_MARVEL_API_KEY}&hash=${
              import.meta.env.VITE_HASH
            }`
          ),
          axios.get(
            `https://gateway.marvel.com:443/v1/public/comics/${id}/characters?ts=${
              import.meta.env.VITE_TS
            }&apikey=${import.meta.env.VITE_MARVEL_API_KEY}&hash=${
              import.meta.env.VITE_HASH
            }`
          ),
        ]);
        setComic(comicResponse.data.data.results[0]);
        setCharacters(charactersResponse.data.data.results);
        console.log(charactersResponse.data.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!comic) {
    return null;
  }

  const comicImgPath =
    comic.images.length > 0
      ? comic.images[0].path.concat(".jpg")
      : "../../src/assets/placeholder.jpg";
  console.log(characters[0]);
  return (
    <div className="container text-white">
      <div className="row">
        <div className="col-12 col-md-6 mt-3 d-flex justify-content-center">
          <img
            src={comicImgPath}
            alt={"pepe"}
            className="rounded img-fluid mx-auto"
            style={{ width: "20rem", height: "30rem" }}
          />
        </div>
        <div className="col-12 col-md-6 mt-3">
          <p className="">
            <strong>Title:</strong> {comic.title}
          </p>
          <p>
            <strong>Description:</strong> {comic.description}
          </p>
          <p>
            <strong>Characters:</strong>
          </p>
          <Characters key={characters} characters={characters} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
