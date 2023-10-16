import React, { useState, useEffect } from 'react';
import '../assets/css/Movies.css';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Simulated data for the example
    const movieData = [
      {
        id: 1,
        title: 'Movie 1',
        price: 'Rs. 3000/hr',
        image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/thalapathy-vijay-leo-tamil-poster-out-203320658-16x9.jpg?VersionId=be5LnvEqRvSA8OfSA8xD15TN_mLDkF0p',
      },
      {
        id: 2,
        title: 'Movie 2',
        price: 'Rs. 1200/hr',
        image: 'https://www.bollywoodhungama.com/wp-content/uploads/2022/11/Pathaan-5.jpg'
      },
      {
        id: 3,
        title: 'Movie 3',
        price: 'Rs. 1200/hr',
        image: 'https://wallpapercave.com/wp/wp4110197.jpg',
      },
      {
        id: 4,
        title: 'Movie 4',
        price: 'Rs. 1200/hr',
        image: 'https://wallpapercave.com/wp/wp2751453.jpg',
      },
      {
        id: 5,
        title: 'Movie 5',
        price: 'Rs. 1200/hr',
        image: 'https://cdn.wallpapersafari.com/66/53/IiFMyZ.jpg',
      },
      {
        id: 6,
        title: 'Movie 6',
        price: 'Rs. 1200/hr',
        image: 'https://moviegalleri.net/wp-content/uploads/2021/07/Vijay-Sethupathi-Kamal-Fahadh-Faasil-Vikram-Movie-First-Look-Poster-HD.jpg',
      },
      {
        id: 7,
        title: 'Movie 7',
        price: 'Rs. 1200/hr',
        image: 'https://www.koimoi.com/wp-content/new-galleries/2023/07/oppenheimer-full-movie-in-hd-leaked-online-christopher-nolans-biographical-thriller-faces-wrath-of-piracy-is-available-to-download-illegally.jpg',
      },
      {
        id: 8,
        title: 'Movie 8',
        price: 'Rs. 1200/hr',
        image: 'https://static.javatpoint.com/best/images/best-hd-movies9.png',
      },
      // Add more movie items here
    ];

    // Simulate an API call or data retrieval
    setTimeout(() => {
      setMovies(movieData);
    }, 1000); // Simulated delay of 1 second
  }, []);

  return (
    <div>
      <section className="products">
        <h2>List of Movies</h2>
        <div className="all-products">
          {movies.map(movie => (
            <div key={movie.id} className="product">
              <img src={movie.image} alt={movie.title} />
              <div className="product-info">
                <h4 className="product-title">{movie.title}</h4>
                <h4 className="product-price">{movie.price}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Movies;
