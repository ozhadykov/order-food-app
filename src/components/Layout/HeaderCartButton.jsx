import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'

function HeaderCartButton(props) {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={styles.badge}>2</span>
    </button>
  )
}

export default HeaderCartButton
