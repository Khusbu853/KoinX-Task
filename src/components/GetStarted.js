import React from 'react'
import img from "./img-header.jpeg";

const GetStarted = () => {
  return (
    <div className="get-started">
          <h3 className="get-started-title">
            Get Started with KoinX for FREE
          </h3>
          <h5 className="get-started-subtitle">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </h5>
          <img
            alt="get-started"
            loading="lazy"
            width="180"
            height="167"
            decoding="async"
            data-nimg="1"
            className="get-started-img"
            style={{ color: "transparent" }}
            src={img}
          />
          
          <button
            className=" Button_Button__tyW3l get-started-btn  "
            style={{
              background: "white",
              color: "black",
              borderRadius: "10px",
              fontSize: "16px",
            }}
          >
            <p className="undefined undefined">Get Started for FREE &#8594;</p>
          </button>
        </div>
  )
}

export default GetStarted
