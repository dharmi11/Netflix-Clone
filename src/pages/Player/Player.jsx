import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate=useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "" 
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDQxMTA4NWEzNDNkMGU3YWQ1NWNmYmI5NzFhYWM2OCIsIm5iZiI6MTcyNjg0ODMxMi4yMDc2NDUsInN1YiI6IjY2OGI3ZWRlYjliN2NkZjNlZTc0OWU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rkGsDHTLMVOqn9An79TKdbfreqBjFkfDPZuQZ-Mm5RI'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        if (response.results && response.results.length > 0) {
          setApiData(response.results[0]);
        }
      })
      .catch(err => console.error(err));
  }, [id]); // Added "id" as a dependency to re-fetch when the ID changes

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="Back" onClick={()=>{navigate(-1)}}/>
      {apiData.key ? (
        <iframe
          width='90%'
          height='90%'
          src={`https://www.youtube.com/embed/${apiData.key}`}
          frameBorder='0'
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
      <div className="player-info">
        {apiData.published_at && <p>{apiData.published_at.slice(0, 10)}</p>}
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
