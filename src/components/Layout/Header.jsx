import sushiImage from '../../assets/003 sushi.jpg'
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Japanise Cuisine</h1>
        <HeaderCartButton />
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImage} alt="sushi" />
      </div>
    </>
  )
}

export default Header
