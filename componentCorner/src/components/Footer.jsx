import './Footer.css';

function Footer(props) {
  return (
    <div className="footer">
        <br></br>
        <div className="text-div">
            <h3 className="store">{props.store}</h3>
            <p className="email">{props.email}</p>
            <p className="phone">{props.phone}</p>
            <p className="address">{props.address}</p>
        </div>
        <br></br>
        <div className="nav-div">
            <nav className="nav-menu">
                <a href="#" className="nav-link">About</a>
                <a href="#" className="nav-link">Contact</a>
                <a href="#" className="nav-link">Privacy Policy</a>
                <a href="#" className="nav-link">Terms of Service</a>
            </nav>
        </div>
    </div>
  );
}

export default Footer;