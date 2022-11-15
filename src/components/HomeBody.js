import styles from './HomeBody.module.css'
import { useNavigate } from 'react-router-dom';

import Button from '../elements/Button1';
import SmallHeading from '../elements/SmallHeading';

export default function Body() {
    let navigate = useNavigate()

    const goToApps = () => {
        window.scrollTo(0, 0)
        navigate('/apps')
    }

    return (
        <div className={styles.body_overlay}>
            <div className={styles.body}>
                <div className={styles.container_apps}>
                    <SmallHeading text='Apps' />
                    <h2>Explore apps engineered and developed for you.</h2>
                    <Button
                        text='Show all apps'
                        onClick={goToApps}
                    />
                </div>
            </div>
        </div>
    );
}