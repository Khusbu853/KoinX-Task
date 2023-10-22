import React from 'react'
import img from "./img-header.jpeg";

const TrackPortfolio = () => {
  return (
    <div
        class="track-portfolio "
        style={{ backgroundColor: "#ffffff" }}
      >
        <div class="track-portfolio-inner">
          <img
            alt="track-portfolio"
            loading="lazy"
            width="317"
            height="295"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent", padding: "20px", margin: "20px" }}
            src={img}
          />
          <div>
            <h2>Track your portfolio &amp; taxes</h2>
            <p>
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports.
            </p>

            <button
              // class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium css-pshh79"
              tabindex="0"
              type="button"
              style={{
                padding: "15px 30px",
                background: "white",
                fontSize: "14px",
                fontWeight: "bold",
                borderRadius: "10px",
                border: "none",
                cursor: 'pointer'
              }}
            >
              Sign up at KoinX for free →
            </button>
          </div>
        </div>
      </div>
  )
}

export default TrackPortfolio
