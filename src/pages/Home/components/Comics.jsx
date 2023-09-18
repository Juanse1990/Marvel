import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Card from "./Card";
import Loader from "../../../components/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Comics = ({ search }) => {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? `https://gateway.marvel.com:443/v1/public/comics?title=${search}
        &limit=50&ts=${import.meta.env.VITE_TS}&apikey=${
          import.meta.env.VITE_MARVEL_API_KEY
        }&hash=${import.meta.env.VITE_HASH}`
      : `https://gateway.marvel.com:443/v1/public/comics?&limit=50&offset=${
          page * 50
        }&ts=${import.meta.env.VITE_TS}&apikey=${
          import.meta.env.VITE_MARVEL_API_KEY
        }&hash=${import.meta.env.VITE_HASH}`;
    axios(searchUrl).then(({ data }) => {
      setIsLoading(false);
      setComics((prevComics) => prevComics.concat(data.data.results));
      setHasMore(data.data.total > page * 50);
    });
  }, [search, page]);

  if (!isLoading && comics.length === 0) {
    return <div className="text-white text-center">No comics found</div>;
  }

  return (
    <InfiniteScroll
      dataLength={comics.length}
      hasMore={hasMore}
      next={() => setPage((prevPage) => prevPage + 1)}
      loader={<Loader />}
    >
      <div className="container">
        <div className="d-flex flex-column flex-wrap flex-md-row justify-content-center">
          {comics.map((comic) => (
            <Card key={comic.id} comics={comic} />
          ))}
        </div>
      </div>
    </InfiniteScroll>
  );
};

Comics.propTypes = {
  search: PropTypes.object.isRequired,
};

export default Comics;
