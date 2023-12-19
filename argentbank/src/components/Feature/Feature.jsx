import '../../styles/main.css';

function Feature({ iconSrc, iconAlt, title, text }) {
  return (
    <div className="feature-item">
      <img src={iconSrc} alt={iconAlt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Feature;
