/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { movieContext } from "../../context";
import { getImgUrl } from "../../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { cardData, setCardData } = useContext(movieContext);

  //handlers here///

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleSelectedMovie = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleAddToCard = (e, movie) => {
    e.stopPropagation();
    const found = cardData.find((item) => {
      return item.id === movie.id;
    });

    if (!found) {
      setCardData([...cardData, movie]);
    } else {
      console.error(
        `The Movie ${movie.title} has been added to the card already`
      );
    }
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
      <figure className="p-4 border border-black/10 shadow-md  dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleSelectedMovie(movie)}>
          <img
            className="w-full h-[514px] object-cover"
            src={getImgUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie?.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie?.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie?.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCard(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>$ {movie?.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
