
import React, { useEffect, useState } from 'react'
import FlipMove from 'react-flip-move';

import './Results.css'
import VideoCard from '../VideoCard/VideoCard'
import axios from '../../utils/axios';

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)

    // Featching movies when selectedOption prop changes
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results)
      setLoading(false)
    }

    fetchData();

  }, [selectedOption])




  return (
    <div className="results">
      <FlipMove>
        {movies.map(movie => (
          <VideoCard loading={loading} key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  )
}

export default Results
