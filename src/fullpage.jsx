import React, { useState } from "react";
import "./css/fullpage.css";

const FullPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {" "}
      <div>
        <div id="btnTesteId">
        <button onClick={handleClick} id='btnTesteClass' >Abrir página completa</button>
        </div>
        {isVisible && (
          <div className="full-page">
            <button className="close-button" onClick={handleClick}>
              X
            </button>
            <div id="conteudo">
            Conteúdo da página completa
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FullPage;
