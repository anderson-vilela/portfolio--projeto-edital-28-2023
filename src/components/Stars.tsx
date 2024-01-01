import { FaRegStar, FaStar, FaStarHalfStroke } from 'react-icons/fa6'
import { twMerge } from 'tailwind-merge'

type StarsProps = {
  rating: string | number
  className?: {
    fullStarStyle?: string
    halfStarStyle?: string
    emptyStarStyle?: string
    mainDivStyle?: string
  }
}

const Stars = ({ rating, className }: StarsProps) => {
  const ratingNumber = Number(rating)

  const fullStar = (
    <FaStar className={twMerge('text-[26px]', className?.fullStarStyle)} />
  )
  const halfStar = (
    <FaStarHalfStroke
      className={twMerge('text-[30px]', className?.halfStarStyle)}
    />
  )
  const emptyStar = (
    <FaRegStar className={twMerge('text-[28px]', className?.emptyStarStyle)} />
  )

  return (
    <div
      className={twMerge(
        'flex items-center justify-center gap-2 text-2xl text-tw-primary-color-light',
        className?.mainDivStyle,
      )}
    >
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
