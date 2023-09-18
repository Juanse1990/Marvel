import { Link, useLocation, useSearchParams } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useSearchParams();
  const search = query.get("search");
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith("/detail");

  return (
    <div className="container">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="col-12 d-flex justify-content-center mt-3">
            <Link to="/" className="navbar-brand mx-auto">
              <h1
                className="text-white"
                style={{
                  fontSize: "3rem",
                  textShadow:
                    "0 0 10px #ed1c24, 0 0 20px #ed1c24, 0 0 30px #ed1c24, 0 0 40px #ed1c24, 0 0 50px #ed1c24, 0 0 60px #ed1c24, 0 0 70px #ed1c24",
                }}
              >
                Marvel
              </h1>
            </Link>
          </div>
          {!isDetailPage && (
            <form
              className="d-flex mx-auto my-4"
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                className="form-control me-2"
                type="text"
                value={search}
                placeholder="Search Comic"
                aria-label="Search"
                onChange={(e) => {
                  const value = e.target.value;
                  setQuery({ search: value });
                }}
              />
            </form>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
