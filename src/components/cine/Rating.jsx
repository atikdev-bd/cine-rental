/* eslint-disable react/prop-types */
import starIcon from "../../assets/star.svg";

export default function Rating({ value }) {
  const stars = Array(value).fill(starIcon);
  return (
    <>
      {stars.map((star, index) => (
        <img src={star} key={index} alt="star" />
      ))}
    </>
  );
}
