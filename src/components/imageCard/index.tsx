import React, { FunctionComponent } from "react"
import { PhotoConfig } from "../../shared/types"
import Image from "./image"
import Caption from "./caption"

interface Props {
  photoConfig: PhotoConfig;
}

const ImageCard: FunctionComponent<Props> = ({ photoConfig }) => {
  const { path, titleText, captionText } = photoConfig
  return (
    <div>
      <Image path={path} altText={titleText} onClick={() => {}} />
      <Caption titleText={titleText} captionText={captionText} />
    </div>
  )
}

export default ImageCard;