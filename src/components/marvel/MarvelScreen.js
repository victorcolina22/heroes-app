import { HeroeList } from "../heroe/HeroeList";


export const MarvelScreen = () => {
    return (
        <div>
            <h1>MarvelScreen</h1>
            <hr />

            <HeroeList publisher={'Marvel Comics'} />
        </div>
    );
};
