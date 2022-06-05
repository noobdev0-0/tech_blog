import styles from '../../styles/Header.module.css'


function Header() {
    return (
        <div className={styles.parent}>
            <div></div>
            <div className={styles.logo}><h3>Noob to development's Blog</h3></div>
            <div className={styles.search}><input type="text" placeholder="search"></input><button>se</button></div>
        </div>
    )
}

export default Header;