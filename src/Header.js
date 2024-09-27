import robotImage from './img/img-app.png';

const Header = () => {
  return (
    <div className="header">
      <h1>Adopta un Robot con Robot Lovers!</h1>
      <img src={robotImage} alt="Robots" className="header-image" />
    </div>
  );
};


export default Header;
