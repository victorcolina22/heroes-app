import { heroes } from '../data/heroes';


export const getHeroeByPublisher = (publisher) => {

    // Se crea un array con los posibles "publisher" a evaluar, de manera de manejar el error si se envía cualquier otra cosa.
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    // Se crea un condicional preguntando si en el array donde están los posibles "publisher" a evaluar contiene el "publisher" que se pasa como parámetro en la
    // función para luego filtrar y retornar un nuevo array con los heroes que hagan match con el "publisher", sino arroja un error.
    if (validPublisher.includes(publisher)) {
        return heroes.filter(heroe => heroe.publisher === publisher);
    } else {
        throw new Error(`${publisher} is not a valid publisher`);
    }

};