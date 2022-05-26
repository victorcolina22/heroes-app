import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroeById } from "../../helpers/getHeroeById";


export const HeroeScreen = () => {

  // El "useParams" es un hook propio de "react-router-dom" que nos sirve para obtener los parametros de nuestro url del navegador, en este caso el path y el id
  // porque así se lo especificamos en el "Router".
  const { heroeId } = useParams();
  const navigate = useNavigate();

  // Utilizamos el "useMemo" para llamar a la función "getHeroeById" y traer el "array" de héroes según su "publisher" para que así React memorice los datos y no
  // los vuelva a cargar cada vez que se ingrese a este componente, es una manera de optimizar la aplicación para que no hayan recargas de datos innecesarias.
  const heroe = useMemo(() => getHeroeById(heroeId), [heroeId]);
  console.log(heroe);
  const { alter_ego, characters, first_appearance, id, publisher, superhero } = heroe;

  if (!heroe) {
    // El componente "Navigate"(es un componente propio de react-router-dom) se encarga de hacer la redirección cuando es posible hacerlo, es decir, para este caso
    // se requiere enviar al usuario a la pantalla de inicio donde se muestran los héroes si no existe tal héroe con un id, entonces este componente es útil para estos
    // casos.
    return <Navigate to="/" />
  }

  const imagePath = `/assets/images/${id}.jpg`;

  const handleReturn = () => {
    // Esto indica que navegue al historial anterior, es decir, si se está en la lista de DC y se ingresa a un personaje cuando se ejecute la función para regresar
    // regresará al historial anterior, en este caso la lista de DC.
    navigate(-1);
  };

  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__fadeInLeft">
        <img
          src={imagePath}
          className="img-thumbnail"
          alt={superhero}
        />
      </div>

      <div className="col-8 animate__animated">
        <h3>{superhero}</h3>
        <ul className="list-group">
          <li className="list-group-item"><b>Alter ego: {alter_ego}</b></li>
          <li className="list-group-item"><b>Pubilsher: {publisher}</b></li>
          <li className="list-group-item"><b>First Appearance: {first_appearance}</b></li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button
          className="btn btn-outline-info"
          onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
