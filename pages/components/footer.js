import styles from '../../styles/Footer.module.css'


function Footer() {
    return (
        <div className={styles.parent}>
            <h3>Noob to development's Blog</h3>
            <div>
                <input type="text" placeholder="search"></input>
            </div>
        </div>
    )
}

export default Footer;