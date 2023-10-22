import './Footer.css'
import image from './footer.png'


const Footer = () => {
    const year = new Date().getFullYear();
    const img = image
    return (
        <footer className="footer">
            <div className="footer-item">
                <img className="footer-icon" alt="footer-img" src={img}></img>
                <p className="copyright">GREET &copy; {year} </p>
            </div>
        </footer>
    )
};

export default Footer;