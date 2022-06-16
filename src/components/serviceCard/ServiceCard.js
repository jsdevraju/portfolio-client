import React from "react";

const ServiceCard = ({ title, icon, sortDesc, className }) => {
  return (
    <>
      <div className={className}>
        {icon}
        <h3 style={{
            marginTop:"10px"
        }}>{title}</h3>
        <p style={{
            marginTop:"10px",
            color:"#6e6e6e",
            lineHeight:"24px"
        }}>{sortDesc}</p>
      </div>
    </>
  );
};

export default ServiceCard;
