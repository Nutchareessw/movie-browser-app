import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutView from './components/AboutView'
import SearchView from './components/SearchView'
import MovieView from './components/MovieView'
import { Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';



function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  
  useEffect(() => {
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=de35792f53ad41ab4b69e22bbdf63f82&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSearchResults(data.results)
      })
    }
  }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search" component={SearchView}>
          <SearchView keyword={searchText} searchResults={searchResults}/>
        </Route> 
        <Route path="/movie/:id" component={MovieView} />
      </Switch>
      
    </div>
  );
}

export default App;
