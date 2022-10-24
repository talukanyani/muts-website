import { Link } from 'react-router-dom';
import styles from './Footer.module.css'

function Footer() {
    var date = new Date()

    const scrollTop = () => window.scrollTo(0, 0);

    return (
        <div className={styles.footer}>
            <p> &copy; {date.getFullYear()} Tmlab. All rights reserved.</p>
            <ul>
                <li>
                    <Link to='/terms' onClick={scrollTop}>Terms</Link>
                </li>
                <li>
                    <Link to='/privacy' onClick={scrollTop}>Privacy</Link>
                </li>
            </ul>
        </div>
    );
}

export default Footer;