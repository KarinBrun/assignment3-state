import './Hero.css';

function Hero(props) {
  return (
    <div className="hero">
        <br></br>
        <h3 className="title">{props.title}</h3>
        <p className="subtitle">{props.subtitle}</p>
        <br></br>
        <button className="cta">{props.cta}</button>
        <br></br>
    </div>
  );
}

export default Hero;