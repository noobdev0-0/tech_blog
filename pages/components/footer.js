import styles from '../../styles/Footer.module.css'


function Footer() {
    return (
        <div className={styles.parent}>
            <div>
                <h4>wisit my socials if you like the post</h4>
            </div>
            <ul>
                <li><a>twitter</a></li>
                <li><a>github</a></li>
                <li><a>youtube</a></li>
            </ul>
        </div>
    )
}

export default Footer;