import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { StyledSection } from './Movies.styled';
import { useEffect, useState } from 'react';
import { fetchSearchMovies } from '../../api';
import Loading from 'components/Loading/Loading';

const Movies = () => {
  const [query, setQuery] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const queryValue = searchParams.get('query');

  useEffect(() => {
    if (!queryValue) return;

    const getSearchMovies = async () => {
      try {
        setIsLoading(true);
        const detailsData = await fetchSearchMovies(queryValue);
        setQuery(detailsData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getSearchMovies();
  }, [queryValue]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const value = evt.target.elements.query.value;
    setSearchParams({ query: value });
  };

  return (
    <StyledSection>
      <form className="movies-form" onSubmit={handleSubmit}>
        <input className="movies-input" type="text" name="query" />
        <button className="movies-button" type="submit">
          Search
        </button>
      </form>
      {isLoading && <Loading />}
      <ul style={{ listStyle: 'square' }}>
        {query !== null &&
          query.map(movie => (
            <li key={movie.id}>
              <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </StyledSection>
  );
};

export default Movies;
