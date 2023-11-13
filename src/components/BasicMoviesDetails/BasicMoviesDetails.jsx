const BasicMoviesDetails = ({ query }) => {
  const { poster_path, original_title, popularity, overview, genres } = query;

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          width={280}
        />
      </div>
      <div>
        <h2>{original_title}</h2>
        <p>User Score: {popularity}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(genre => genre.name)}</p>
      </div>
    </div>
  );
};

export default BasicMoviesDetails;
