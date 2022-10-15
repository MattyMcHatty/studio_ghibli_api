const FavouriteGhibliFilms = ({ ghibliFilms, onGhibliFilmSelected}) => {

    const favouriteGhibliFilms = ghibliFilms.filter(ghibliFilm => ghibliFilm.isFavourite)

    return(

        <>
        
            <h2>Favourite Films</h2>
            <ul>
                {favouriteGhibliFilms.map(ghibliFilm => {
                    return(
                        <li key={ghibliFilm.id}>
                            <button onClick={() => onGhibliFilmSelected(ghibliFilm.id)}>{ghibliFilm.title}</button>
                        </li>
                    )
                })}
            </ul>

        </>

    )
    
}

export default FavouriteGhibliFilms;