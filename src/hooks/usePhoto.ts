import { useState } from "react"
import { PhotoConfig } from "../shared/types"
import { testPhotoDisplay as photos } from "../shared/test"

interface PhotoHook {
  current: PhotoConfig,
  increment: () => void,
  decrement: () => void
}

export const usePhoto = (): PhotoHook => {
  const totalNum = photos.length
  const [index, setIndex] = useState(0)
  const increment = (): void => { if (index < totalNum - 1) setIndex(index + 1) }
  const decrement = (): void => { if (index > 0) setIndex(index - 1) }
  return {
    current: photos[index],
    increment,
    decrement
  }
}

