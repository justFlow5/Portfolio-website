import React from "react"
import Typist from "react-typist"
import "./Typist.scss"
import homeStyle from "./homePage.module.scss"

const Text1 = ({ isTyped1, showCursor, showWhoIAm }) => {
  return (
    <>
      <Typist
        avgTypingSpeed={16500}
        startDelay={300}
        cursor={{ hideWhenDone: true }}
        onTypingDone={showCursor}
      >
        <span className={homeStyle.welcomeText}>
          Looking for a Front End Developer?
          <Typist.Delay ms={800} />
        </span>
      </Typist>

      <Typist
        cursor={{ show: isTyped1, hideWhenDone: true }}
        startDelay={1000}
        onTypingDone={showWhoIAm}
      >
        <Typist.Delay ms={4000} />
        <span className={`${homeStyle.welcomeText} ${homeStyle.text_center}`}>
          Look no more!
        </span>
        <Typist.Delay ms={500} />
      </Typist>
    </>
  )
}

export default Text1
