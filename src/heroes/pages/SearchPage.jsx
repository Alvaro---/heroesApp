import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroByName } from "../helpers";

export const SearchPage = () => {
    const navigate = useNavigate();

    const location = useLocation();
    console.log("location", location); //En Search se encuentran los query parameters
    // const query = queryString.parse(location.search)
    // console.log("query extraido", query)
    const { q = "" } = queryString.parse(location.search);
    console.log("query extraido", q);

    const heroes = getHeroByName(q);

    const { searchText, onInputChange } = useForm({
        searchText: q,
    });

    const showSearch = q.length === 0;
    const showError = q.length > 0 && heroes.length === 0;

    const onSearchSubmit = (e) => {
        e.preventDefault();
        // if (searchText.trim().length <= 0) return
        console.log({ searchText });

        //Enviar a la misma pagina con query parameter
        navigate(`?q=${searchText.toLowerCase().trim()}`);
    };

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={onSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search a hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-1">Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {/* {
                    q === '' ?
                        <div className="alert alert-primary">Search a hero</div>
                        : heroes.length === 0 && <div className="alert alert-danger">Not Hero Found with <b>{q}</b></div>
                    } */}
                    {/* <div className="alert alert-primary" style={{ display: q !== '' ? 'none' : '' }}> */}
                    <div
                        className="alert alert-primary animate__animated animate__fadeIn"
                        style={{ display: showSearch ? "" : "none" }}
                    >
                        Search a hero
                    </div>
                    {/* <div className="alert alert-danger" style={{ display: "none" }}> */}
                    <div
                        className="alert alert-danger animate__animated animate__fadeIn"
                        style={{ display: showError ? "" : "none" }}
                    >
                        Not Hero Found with <b>{q}</b>
                    </div>
                    {heroes.map((hero) => (
                        <HeroCard key={hero.id} {...hero} />
                    ))}
                </div>
            </div>
        </>
    );
};
