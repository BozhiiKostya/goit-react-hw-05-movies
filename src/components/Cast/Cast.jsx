import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../../api';

const Cast = () => {
  const [query, setQuery] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      const castData = await fetchCast(movieId);
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
          {query.map(item => {
            return (
              <li key={item.id}>
                <img
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGoQ1w27W852q5VdmWhkHCWKd90q528BafXuOjIZOr0q1VOwW4pKFEShXlO1yGOuncy7g&usqp=CAU'
                  }
                  alt={item.name}
                  width={100}
                />
                <p>{item.name}</p>
                <p>{item.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any cast for this movie</p>
      )}
    </div>
  );
};

export default Cast;
