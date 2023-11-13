import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../api';

const Reviews = () => {
  const [query, setQuery] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const castData = await fetchReviews(movieId);
      if (castData) {
        setQuery(castData);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <div>
      {query !== null && query.length > 0 ? (
        <ul>
          {query.map(item => (
            <li key={item.id}>
              <h3>Author:{item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;
