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
        <button onClick={handleClick} id='btnTesteClass' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, placeat eum id tempora, officia aut nulla labore dolorem sit cupiditate error? Qui perferendis blanditiis, nam totam maxime velit libero labore?</button>
        </div>
        
        {isVisible && (
          <div className="full-page">
            <button className="close-button" onClick={handleClick}>
              X
            </button>
            <div id="conteudo">
              <div className="conteudoPost"> 
              <h6 className="nomeAuthor">nome</h6>
              <h1 className="Titulo">Titulo do assunto</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor velit rem illum hic, illo voluptatem id ea doloribus exercitationem beatae ex omnis nihil dolores voluptates praesentium corporis eum perspiciatis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio sit modi perspiciatis enim eos molestiae ullam id, magnam nam, laudantium eveniet deserunt quas magni animi ea error vel, eaque laboriosam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quibusdam rerum eum, illum hic nihil rem dolores, ex earum sequi vel consequuntur esse ipsa? Provident ad veniam doloremque voluptatum quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias eos numquam sunt nisi eveniet provident amet ducimus, esse excepturi sit natus est. Officiis aspernatur, quas omnis similique odit tempora? Quae.</p>
              </div>
            </div>
            <div className="coments"><h1>Comentarios</h1></div>
          </div>
        )}
      </div>
    </>
  );
};

export default FullPage;
