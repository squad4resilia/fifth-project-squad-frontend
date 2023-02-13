import anonymousLogo from './assets/anonymous.png'
import "./css/replypage.css";

function Reply() {
    return (
      <>
      <div class="container">
    <div class="imagem">
        <img src={anonymousLogo} alt=""/>
    </div>

  <div class="wrapper">
    <div class="input-box">
      <div class="tweet-area">
        <span class="placeholder">O que é que há, velhinho?</span>
        <div class="input editable" contenteditable="true" spellcheck="false"></div>
        <div class="input readonly" contenteditable="true" spellcheck="false"></div>
      </div>
      <div class="privacy">
        <i class="fas fa-globe-asia"></i>
        <span>Qualquer pessoa pode responder</span>
      </div>
    </div>
    <div class="bottom">
      <ul class="icons">
        <li><i class="uil uil-capture"></i></li>
        <li><i class="far fa-file-image"></i></li>
        <li><i class="fas fa-map-marker-alt"></i></li>
        <li><i class="far fa-grin"></i></li>
        <li><i class="far fa-user"></i></li>
      </ul>
      <div class="content">
        <span class="counter">100</span>
        <button>Enviar</button>
      </div>
    </div>
  </div>
</div>
      </>
    );
  }
  
  export default Reply;