import './GhibliFilmSelector.css'
const GhibliFilmSelector = ({ghibliFilms, onGhibliFilmSelected}) => {

    const handleChange = event => {
        onGhibliFilmSelected(event.target.value)
    }

    return(

        <select className="film-select" defaultValue="" onChange = {handleChange}>
            <option value = "" disabled  >Pick a Film</option> {
                ghibliFilms.map(ghibliFilm => {
                    return(
                        <option key = {ghibliFilm.id} value = {ghibliFilm.id}>{ghibliFilm.title}</option>
                    )
                })
                
            }
        </select>
    )

}

export default GhibliFilmSelector;