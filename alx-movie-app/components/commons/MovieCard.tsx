import React from "react";

interface MovieCardProps {
  title: string;
  year?: string;
  posterUrl?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, year, posterUrl }) => {
  return (
    <div>
      {posterUrl && <img src={posterUrl} alt={title} />}
      <h3>{title}</h3>
      {year && <p>{year}</p>}
    </div>
  );
};

export default MovieCard;
