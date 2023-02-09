import "./landingpage.css";
import anonymousLogo from './assets/anonymous.png'
import facebookLogo from './assets/facebook.svg'
import twitterLogo from './assets/twitter.svg'
import instagramLogo from './assets/instagram.svg'

function Page() {
  return (
    <>
      <div id="testando">
        <div>
          <img src={anonymousLogo} id="imagem"  alt="" />
        </div>
        <div id="teste">
          <div>
            <h1>Tópicos</h1>
          </div>
          <div className="principal">
            <div>
              <ul>
                <h2 className="temas">💻Técnologia</h2>
                <li>Programação</li>
                <li>Jogos</li>
                <li>Aplicativos</li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div>
              <ul>
                <h2 className="temas">⚽Esportes</h2>
                <li>Futebol</li>
                <li>Basquete</li>
                <li>Vôlei</li>
                <li>UFC</li>
                <li>E-Sports</li>
              </ul>
            </div>
            <div>
              <ul>
                <h2 className="temas">🍽Culinária</h2>
                <li>Culinária brasileira</li>
                <li>Culinária japonesa</li>
                <li>Culinária mexicana</li>
                <li>Culinária italiana</li>
                <li>Culinária francesa</li>
              </ul>
            </div>
            <div>
              <ul>
                <h2 className="temas">🎞Filmes</h2>
                <li>Ação</li>
                <li>Animado</li>
                <li>Comédia</li>
                <li>Ficção científica</li>
                <li>Romance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <img
                src={anonymousLogo}
                className="bi"
                width="30"
                height="24"
              />
              <use xlinkHref="#bootstrap"></use>
            </a>
            <span className="mb-3 mb-md-0 text-muted">© 2023 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="#">
                <img
                  src={twitterLogo}
                  className="bi"
                  width="5"
                  height="5"
                />
                <use xlinkHref="#twitter"></use>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <img
                  src={instagramLogo}
                  className="bi"
                  width="5"
                  height="5"
                />
                <use xlinkHref="#instagram"></use>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <img
                  src={facebookLogo}
                  className="bi"
                  width="5"
                  height="5"
                />
                <use xlinkHref="#facebook"></use>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Page;

