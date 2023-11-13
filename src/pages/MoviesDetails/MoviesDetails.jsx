import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { fetchDetails } from '../../api';
import BasicMoviesDetails from 'components/BasicMoviesDetails/BasicMoviesDetails';
import { StyledSection } from './MoviesDetails.styled';

const MoviesDetails = () => {
  const [query, setQuery] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const linkRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const getDetails = async () => {
      try {
        const detailsData = await fetchDetails(movieId);
        setQuery(detailsData);
      } catch (error) {
        console.log(error);
      }
    };
    getDetails();
  }, [movieId]);

  return (
    <StyledSection>
      <Link className="link-details" to={linkRef.current}>
        Go back
      </Link>
      {query !== null && <BasicMoviesDetails query={query} />}
      <ul className="list-details">
        <li className="item-details">
          <Link to="cast">Cast</Link>
        </li>
        <li className="item-details">
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </StyledSection>
  );
};

export default MoviesDetails;
