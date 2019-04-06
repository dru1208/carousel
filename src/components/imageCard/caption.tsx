import React, { FunctionComponent } from "react"
import * as styles from "../../styles/caption"

interface Props {
  titleText: string;
  captionText: string;
}

const Caption: FunctionComponent<Props> = ({ titleText, captionText }) => {
  return (
    <div>
      <div className={styles.captionTitle} >Photo: { titleText }</div>
      <div className={styles.captionText} >{ captionText }</div>
    </div>
  )
}

export default Caption;