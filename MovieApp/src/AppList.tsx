import { FunctionComponent, useState, useEffect } from "react";
import AppCard from "./AppCard";

interface movie {
    id: number;
    original_title: string;
    // Add other properties as needed
  }
  

const AppList: FunctionComponent = () => {
  const [movies, setMovies] = useState<movie[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=a79413f5');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        console.error(err); // Handle the error as needed
      }
    };

    fetchData();
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.original_title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className="section__movies">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="movies__header">
              <h2 className="header__title">Movies</h2>
              <div className="header__search">
                <input
                  type="text"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3">
          {filteredMovies.map((movie) => (
            <div className="col-md-4" key={movie.id}>
              <AppCard movie={{
                 poster_path: 'path_to_poster',
                 original_title: 'Movie Title',
                 vote_average: 8.0, // Example rating
                 overview: 'Movie overview text',
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AppList;
