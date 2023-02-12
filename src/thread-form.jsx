import "./thread-form.css";
import anonymousLogo from "./assets/anonymous.png";

function ThreadForm() {
  return (
    <>
      <div className="tudo">
        <div className="imagem">
          <img src={anonymousLogo} id="imagem" alt="" />
        </div>
        <button className="new">Novas publicações</button>
      <input type="button" />
      </div>
    </>
  );
}

export default ThreadForm;
