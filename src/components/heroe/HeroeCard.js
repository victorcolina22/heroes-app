import { Link } from "react-router-dom";


export const HeroeCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const imagePath = `/assets/images/${id}.jpg`;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={imagePath} className="card-img" alt={superhero} />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            {
                                // Se pregunta si el "alter_ego" es distinto de "characters" entonces que muestre la etiqueta "p"
                                (alter_ego !== characters) &&
                                <p className="text-muted">{characters}</p>
                            }

                            <p className="card-text">
                                <small>{first_appearance}</small>
                            </p>
                            <Link to={`/heroe/${id}`}>Más...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
