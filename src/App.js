import './App.css';
import Movie from './components/Movie';
import {useState, useEffect} from 'react';


const movieApi = 'https://imdb-api.com/en/API/SearchMovie/k_egq93pb4/'
const movieTop = 'https://imdb-api.com/en/API/Top250Movies/k_egq93pb4'



function App() {
  const [movie,setMovie] = useState([])
  const [term,setTerm] = useState('')
  
  const onHandleTerm = (e) => {
    setTerm(e.target.value)
  }


  useEffect(() => {
    fetch(movieTop)
    .then(res => res.json())
    .then(res => setMovie(res.items))
  },[])

const onHandleSearch = (e) => {
    e.preventdefault()
    fetch(movieApi + term)
    .then(res => res.json())
    .then(res => setMovie(res.results))
    setTerm('')
}

  return (
    <>
    <header>
      <form action='submit' onSubmit={onHandleSearch}>
      <input type="text" placeholder='search' value={term} onChange={onHandleTerm} />
      </form>
    </header>
    <div className="movies">
      {movie.map((elem) => <Movie  key={elem.id} {...elem}/>)}
    </div>
    </>
  );
}

export default App;
