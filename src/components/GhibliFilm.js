import './GhibliFilm.css';

const GhibliFilm = ({ghibliFilm, onFavouriteToggle}) => {

    if(!ghibliFilm){
        return null
    }

    const handleClick = () => {
        onFavouriteToggle(ghibliFilm.id)
    }

    const favouriteBtnText = ghibliFilm.isFavourite ? 'Remove from favourites' : 'Add to favourites'

    return(

        <main>

            <h1>{ghibliFilm.title}</h1>
            <h3>{ghibliFilm.original_title}</h3>
            <button onClick={handleClick}>{favouriteBtnText}</button>
            <h5>Directed by {ghibliFilm.director}, Producued by {ghibliFilm.producer}</h5>
            <h4>Synopsis</h4>
            <div>{ghibliFilm.description}</div><br></br>
            <img src={ghibliFilm.image} alt={`Banner for ${ghibliFilm.title}`}></img><br></br>
            {/* <img src={ghibliFilm.movie_banner} alt={`Banner for ${ghibliFilm.title}`}></img> */}
        </main>

    )

}

export default GhibliFilm;