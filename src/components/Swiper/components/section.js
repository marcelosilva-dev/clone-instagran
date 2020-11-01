import React from "react";

const Section = ({ children }) => {
  return (
    <>
      <section
        style={{
          margin: "0 0 20px 0",
          maxWidth: "100%",
          marginBottom: "3rem",
        }}
      >
        {children}
      </section>
    </>
  );
};

export default Section;
