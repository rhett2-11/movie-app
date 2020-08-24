import React from 'react';
import { Link } from '@reach/router';

import { StyledMovieThumb } from '../styles/StyledMovieThumb';

const MovieThumb = ({ image, movieId, movieName, clickable}) => (
    <StyledMovieThumb>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <div>
                    <img className="clickable" src={image} alt="moviethumb" />
                    <h5>{movieName}</h5>
                </div>
            </Link>
        ) : (
            <div>            
                <img src={image} alt="moviethumb" />
                <h5>{movieName}</h5>
            </div>
            
        )

        }
    </StyledMovieThumb>
)

export default MovieThumb;