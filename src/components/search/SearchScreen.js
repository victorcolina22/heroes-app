import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../../helpers/getHeroesByName";
import { useForm } from "../../hooks/useForm";
import { HeroeCard } from "../heroe/HeroeCard";


export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    // El "queryString" es una librería que sirve para cortar los querys o peticiones en la barra de navegación del navegador y dividirlos en propiedades dentro de un
    // objeto, así nos ayuda a no hacerlo manualmente.
    const { q = '' } = queryString.parse(location.search);

    const [formValue, handleInputChange] = useForm({
        searchText: q,
    })
    const { searchText } = formValue;

    const heroeFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`?q=${searchText}`);
    }

    return (
        <>
            <h1>Search Hero</h1>

            <div className="row">
                <div className="col-5">
                    <h4>Search</h4>
                    <hr />

                    <form onSubmit={handleSubmit} className="d-grid">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Busca tu héroe..."
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <button
                            className="btn btn-outline-primary mt-3"
                            type="submit">
                            Buscar
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        (q === '')
                            ? <div className="alert alert-info">Buscar un héroe</div>
                            : (heroeFiltered.length === 0) && <div className="alert alert-danger">No hay resultados: {q}</div>
                    }

                    {
                        heroeFiltered.map(heroe => (
                            <HeroeCard
                                key={heroe.id}
                                {...heroe}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
};
