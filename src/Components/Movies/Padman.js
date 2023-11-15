import React from 'react';
import "../Style.css";

function Padman(props) {

  return (
    <div className='padManDiv1'>
        <div className="movieImage">
            <img src={props.movieImage} alt="image" />
        </div>
        <div className="movieDetails">
            <div className="movieName">{props.movieName}</div>
            <div className="movieBio">{props.movieBio}</div>
        </div>
    </div>
  )
}

export default Padman;
