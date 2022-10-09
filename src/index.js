import React, {  Fragment, useState } from "react";
import "./magnifier.css";

export  function Magnifier({
  src,
  width,
  height,
  className,
  zoomFactor,
  mgHeight,
  mgWidth,
  mgBorderWidth,
  contentView,
  ...otherProps
}) {
  const [activeItem, setActiveItem] = useState(0);
  return(
    <div
    className={`magnifierAccordian ${className}`}
    style={{
      width,
      height,
    }}
  >
    <img
  alt="Magnifier glass"
      className="magnifier-image"
      src={src}
      width="100%"
      height="100%"
      {...otherProps}
    />

    {contentView.filter((_,index) => index === activeItem).map(({ content, imagePositionStyle, contentPositionStyle, image }, index) => (
      <Fragment key={index}>
        <div
          className={`magnifying-glass circle `}
          style={{
            width: mgWidth,
            height: mgHeight,
            backgroundImage: `url("${image}")`,
            backgroundPosition: `10% 10%`,
            backgroundSize: `100% 100%`,
            borderWidth: mgBorderWidth,
            zIndex: 400,
            left: 0,
            top: 0,
            ...imagePositionStyle
          }}
        />
        <div
          className={`magnifying-content  `}
          style={{
            width: "400px",
            height: "400px",
            zIndex: 400,
            left: 0,
            top: 0,
            ...contentPositionStyle
          }}
        >
          <p onClick={() => console.log("samw")}> {content}</p>
         <div className="magnifierButtonContainer">
   {activeItem !== 0 && (
            <div
              className="navigation"
              onClick={() =>
                setActiveItem(activeItem - 1 )
              }
            >
              <Backward />
            </div>
          )}

          {activeItem !== contentView.length - 1 && (
            <div
              className="navigation"
              onClick={() =>
                setActiveItem(activeItem + 1 )
              }
            >
              <Forward />
            </div>
          )}
   </div>
        </div>
      </Fragment>
    ))}
  </div>
  )
}


function Backward() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="20px"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
    </svg>
  );
}

function Forward() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height="20px"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
    </svg>
  );
}
