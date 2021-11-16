import React, { forwardRef } from 'react'
import TextTruncate from 'react-text-truncate';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';


import './VideoCard.css'
const base_url = "https://image.tmdb.org/t/p/original/"

const VideoCard = forwardRef(({ movie, loading }, ref) => {
  return (
    <>
      <div ref={ref} className={`videocard`}>
        <img src={`${base_url}${movie.backdrop_path || movie.poster_path} `} alt="movie poster" />
        <TextTruncate
          style={{ "color": "lightgray" }}
          className="videocard__text"
          line={1}
          element="p"
          truncateText="..."
          text={movie.overview}
        />
        <h2>{movie.title || movie.original_name}</h2>
        <p className="videocard__status">
          {movie.media__type && `${movie.media__type} •`}
          {movie.release_date || movie.first_air_date}•
          <ThumbUpAltIcon fontSize='small' />
          {movie.vote_count}
        </p>
      </div>
    </>
  )
})

export default VideoCard
