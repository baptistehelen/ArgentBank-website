import PropTypes from 'prop-types';



const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt={`${title} Icon`} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureItem;

FeatureItem.propTypes = {
    icon: PropTypes.string.isRequired, // Valide que icon est une chaîne de caractères requise
    title: PropTypes.string.isRequired, // Valide que title est une chaîne de caractères requise
    description: PropTypes.string.isRequired, // Valide que description est une chaîne de caractères requise
  };