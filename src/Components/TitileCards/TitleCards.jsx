import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data  from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom' 
const TitleCards = ({title , category}) => {
  const cardsRef = useRef();
  const[apiData , setapiData]=useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDQxMTA4NWEzNDNkMGU3YWQ1NWNmYmI5NzFhYWM2OCIsIm5iZiI6MTcyNjg0ODMxMi4yMDc2NDUsInN1YiI6IjY2OGI3ZWRlYjliN2NkZjNlZTc0OWU3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rkGsDHTLMVOqn9An79TKdbfreqBjFkfDPZuQZ-Mm5RI'
    }
  };
  
 

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setapiData(response.results))
    .catch(err => console.error(err)); 

    const refCurrent = cardsRef.current;
    refCurrent.addEventListener('wheel', handleWheel);
    
    return () => {
      refCurrent.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    
    <div className='titlecards'>
      <h2>{title?title:"Popular in Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
          return <Link to={`/player/${card.id}`} className="card" key={index}>
          <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
          <p>{card.original_title}</p>
        </Link>
         
        })}
      </div>
      
    </div>
  )
}

export default TitleCards
