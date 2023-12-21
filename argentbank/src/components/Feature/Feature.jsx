import '../../styles/main.css';

function Feature({ iconSrc, iconAlt, title, text }) {
  return (
    <figure className="feature-item">
      <img src={iconSrc} alt={iconAlt} className="feature-icon" />
      <figcaption>
        <h3 className="feature-item-title">{title}</h3>
        <p>{text}</p>
      </figcaption>
    </figure>
  );
}

export default Feature;
