import { Link } from "react-router-dom";
import { useEffect } from "react";
import './Error.css'

function Error() {
  useEffect(() => {
    document.title = 'Argent Bank - 404';
    return () => {
      document.title = 'Argent Bank';
    };
  }, []);

  return (
    <section className="main error">
      <h1 className="error-title">404</h1>
      <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error-link">Retourner sur la page d’accueil</Link>
    </section>
  );
}

export default Error;
