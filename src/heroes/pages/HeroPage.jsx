import { useMemo } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom'
import { getHeroById } from '../helpers';

export const HeroPage = () => {

    // const params = useParams();
    // console.log(params)
    const { heroId, ...res } = useParams();
    const navigate = useNavigate();
    console.log(res, heroId)

    //Cada vez que cambie el estado, se puede recargar, y esto llamaria de nuevo la carga
    // Por esto es mejor el memo
    const hero = useMemo(() => getHeroById(heroId), [heroId])
    console.log(hero)
    //Si no llega nada es undefine. Si tratamos de trabajar asi dara error. 

    const onNavigateBack = () => {
        navigate(-1); //Puede sacarlo de la pagina si no venia de alli
    }

    if (!hero) {
        //Se puede retornar un jsx o redirigir
        //Se puede redirigir con el useNavigate pero habria que retornar un jsx vacio. 
        // Lo mejor es retornar el componente navigate.
        return <Navigate to="/" />
    }
    return (
        // Hay distintas clases para la velocidad y para delay.
        // Se pueden alterar las clases en css
        <div className='row mt-5 animate__animated animate__fadeInLeft'>
            <div className="col-4">
                <img
                    src={`/assets/heroes/${hero.id}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail" />
            </div>

            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter Ego: </b>{hero.alter_ego}</li>
                    <li className='list-group-item'><b>Publisher: </b>{hero.publisher}</li>
                    <li className='list-group-item'><b>First Appearence: </b>{hero.first_appearance}</li>
                </ul>

                <h5 className='mt-3'>Characters:</h5>
                <p>{hero.characters}</p>

                <button className='btn btn-outline-primary' onClick={onNavigateBack}>Retornar</button>
            </div>
        </div>
    );
};
