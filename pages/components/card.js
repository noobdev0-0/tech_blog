import styles from '../../styles/Card.module.css'


function Card() {
    return (
        <div className={styles.parent}>
            <div>
                <div>
                    <h4>Blog Heading </h4>
                </div>
                <div>
                    <p>Blog Dricptrion</p>
                </div>
            </div>

        </div>
    )
}

export default Card;