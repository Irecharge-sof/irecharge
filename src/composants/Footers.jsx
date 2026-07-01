import logo from '../assets/rechargelogo.jpeg'
import { FaStar } from "react-icons/fa"
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'

function Footers() {
    return (
        <footer>
            <section className='pied'>
            <div>
                <img src={logo} alt="logo" className="logo" />
                
                <h4>FR cartes prepayés</h4>
            </div>
            <div>
                <h3>Email</h3>
                <p>IrechargeaAD01@gmail.com</p>
                <div style={{ color: "gold", fontSize: "24px"}}><FaStar/><FaStar/><FaStar/><FaStar/></div>
            </div>
            <div>
                <h4>certicat © </h4>
                <h4>Reseaux</h4>
                <FaFacebook/>
                <FaInstagram/>
                <FaTiktok/>
                <FaTwitter/>
            </div>
            </section>
            <p className='fin'>© 2024 Irecharge. All rights reserved.</p>
            
        </footer>
    )
}
export default Footers