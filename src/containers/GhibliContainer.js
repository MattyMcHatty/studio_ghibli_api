import React, {useState, useEffect} from "react";
import GhibliFilmSelector from "../components/GhibliFilmSelector";
import GhibliFilm from "../components/GhibliFilm";
import FavouriteGhibliFilms from "../components/FavouriteGhibliFilms";

const GhibliContainer = () => {

    const [ghibliFilms, setGhibliFilms] = useState([]);
    const [selectedGhibliFilmID, setSelectedGhibliFilmID] = useState('');

    useEffect(() => {
        getGhibliFilms()
    }, [])

    const getGhibliFilms = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then(res => res.json())
        .then(ghibliFilmsData => setGhibliFilms(ghibliFilmsData))
    }

    const handleGhibliFilmSelected = id => {
        setSelectedGhibliFilmID(id);
    }

    const handleFavouriteToggle = (id) => {
        const updatedGhibliFilms = ghibliFilms.map((ghibliFilm) => {
            return ghibliFilm.id === id
                ?{...ghibliFilm, isFavourite: !ghibliFilm.isFavourite} : ghibliFilm
        })
        setGhibliFilms(updatedGhibliFilms);
    }

    const totalRunningTime = ghibliFilms.reduce((total, ghibliFilm) => {
        return total + parseInt(ghibliFilm.running_time)
    }, 0)

    
    const selectedGhibliFilm = ghibliFilms.find(ghibliFilm => ghibliFilm.id === selectedGhibliFilmID);

    return(

        <>
            <p>Total Running Time: {totalRunningTime}</p>
            <GhibliFilmSelector ghibliFilms={ghibliFilms} onGhibliFilmSelected={handleGhibliFilmSelected} />
            <GhibliFilm ghibliFilm={selectedGhibliFilm} onFavouriteToggle={handleFavouriteToggle} />
            <FavouriteGhibliFilms ghibliFilms={ghibliFilms} onGhibliFilmSelected={handleGhibliFilmSelected} />

        </>



    )

}

export default GhibliContainer;