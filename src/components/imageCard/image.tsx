import React, { FunctionComponent } from "react";

interface Props {
  path: string;
  altText: string;
  onClick: any;
}

const Image: FunctionComponent<Props> = ({ path, altText, onClick }) => {
  return (
    <div onClick={onClick} >
      <img src={path} alt={altText} />
    </div>
  )
}

export default Image;