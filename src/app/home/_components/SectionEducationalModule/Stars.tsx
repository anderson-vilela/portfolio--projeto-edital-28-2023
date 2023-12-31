import { FaRegStar, FaStar, FaStarHalfStroke } from 'react-icons/fa6'

type StarsProps = {
  rating: string | number
}

const Stars = ({ rating }: StarsProps) => {
  const ratingNumber = Number(rating)

  const fullStar = <FaStar />
  const halfStar = <FaStarHalfStroke className="text-[28px]" />
  const emptyStar = <FaRegStar className="border-blue-400 text-[26px]" />

  return (
    <div className="flex items-center justify-center gap-2 text-2xl text-tw-primary-color-light">
      {ratingNumber >= 1
        ? fullStar
        : ratingNumber >= 0.5
          ? halfStar
          : emptyStar}
      {ratingNumber >= 2
        ? fullStar
        : ratingNumber >= 1.5
          ? halfStar
          : emptyStar}
      {ratingNumber >= 3
        ? fullStar
        : ratingNumber >= 2.5
          ? halfStar
          : emptyStar}
      {ratingNumber >= 4
        ? fullStar
        : ratingNumber >= 3.5
          ? halfStar
          : emptyStar}
      {ratingNumber >= 5
        ? fullStar
        : ratingNumber >= 4.5
          ? halfStar
          : emptyStar}
    </div>
  )
}

export default Stars
