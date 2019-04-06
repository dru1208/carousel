import React, { FunctionComponent } from "react"
import ImageCard from "../imageCard/"
import Image from "../imageCard/image"
import { usePhoto } from "../../hooks/usePhoto"
import RightArrow from "../../assets/right-arrow.png"
import LeftArrow from "../../assets/left-arrow.png"
import { PhotoConfig } from "../../shared/types"

interface Props {
  photos: PhotoConfig[]
}

const PhotoDisplay: FunctionComponent<Props> = () => {
  const { current, increment, decrement } = usePhoto()
  return (
    <div>
      <Image path={LeftArrow} altText={"left-arrow"} onClick={decrement} />
      <ImageCard photoConfig={current} />
      <Image path={RightArrow} altText={"right-arrow"} onClick={increment}/>
    </div>
  )
}

export default PhotoDisplay;