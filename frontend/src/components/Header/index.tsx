import logo from "../../assets/img/logo.svg";

import "./styles.css";

export const Header = () => {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://github.com/phlima3"> Pedro Lima</a>
        </p>
      </div>
    </header>
  );
};
