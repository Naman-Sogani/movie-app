import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='col'>
				<div className='image-container justify-content-start m-3'>
					<img src={movie.Poster} alt={movie.Title}></img>
					<div 
					onClick={() => props.handleFavouritesClick(movie)}
					className='overlay d-flex align-items-center justify-content-center'>
					<FavouriteComponent />
					</div>
				</div>
				</div>
			))}
		</>
	);
};

export default MovieList;