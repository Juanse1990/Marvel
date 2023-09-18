import { useLocation } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import Comics from "./components/Comics";

const Home = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("search");
  const debouncedSearch = useDebounce(searchValue, 700);

  return <Comics key={searchValue} search={debouncedSearch} />;
};

export default Home;
