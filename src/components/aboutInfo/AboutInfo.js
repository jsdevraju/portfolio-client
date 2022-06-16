import React from "react";

const AboutInfo = ({ icon, title, sort, className }) => {

  return (
    <>
      <div className={className}>
        {icon}
        <h4 style={{
          display:"flex",
          alignItems:"center",
          gap:"5px"
        }}>
          {title}: <span style={{
            fontWeight:"400",
            opacity:"0.7",
            fontSize:".9em",
            display:"flex",
            gap:"5px"
          }}>{sort}</span>
        </h4>
      </div>
    </>
  );
};

export default AboutInfo;
