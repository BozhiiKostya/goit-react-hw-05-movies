import { useEffect, useState } from 'react';
import { fetchTrending } from '../../api';
import { Link, useLocation } from 'react-router-dom';
import { StyledSection } from './Home.styled';
import Loading from 'components/Loading/Loading';

const Home = () => {
  const [query, setQuery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const getTrending = async () => {
      try {
        setIsLoading(true);
        const trendingData = await fetchTrending();
        if (trendingData) {
          setQuery(trendingData);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getTrending();
  }, []);

  return (
    <StyledSection>
      <ul className="home-list">
        {query.map(movie => (
          <li key={movie.id}>
            {
              <Link state={{ from: location }} to={`/movies/${movie.id}`}>
                {movie.name ? movie.name : movie.title}
              </Link>
            }
          </li>
        ))}
      </ul>
      {isLoading && <Loading />}
    </StyledSection>
  );
};

export default Home;
