import Hero from './Hero'
import { Link } from 'react-router-dom';


//TMDB api key= de35792f53ad41ab4b69e22bbdf63f82
//example=https://api.themoviedb.org/3/search/movie?api_key=de35792f53ad41ab4b69e22bbdf63f82&language=en-US&page=1&include_adult=false

const MovieCard = ({ movie }) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    const detailUrl = `/movie/${movie.id}`
    return (
        <div className="col-lg-3 col-md-3 col-2 my-4">
            <div className="card">
                <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}c</h5>
                    <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
                </div>
            </div>    
        </div>
    )
} 


const SearchView = ({ keyword, searchResults}) => {
    const title = `you are searching for ${keyword}`
    
    const resultHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />
    })
    
    
    return (
        <>
            <Hero text={title}/>
            {resultHtml &&
                <div className="container">
                    <div className="row">
                    {resultHtml}
                    </div>
                </div>
            }
        </>
    )

}

export default SearchView;