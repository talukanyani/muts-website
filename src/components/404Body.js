import styles from './404Body.module.css'

function Body() {
    return (
        <div className={styles.body}>
            <div className={styles.illustration}></div>
            <div className={styles.content}>
                <h1>404</h1>
                <h2>Ooops! Page Not Found</h2>
                <p>We can't find the page you are looking for.</p>
                <button>
                    <a href='/'>Go to Home Page</a>
                </button>
            </div>
        </div>
    )
}

export default Body