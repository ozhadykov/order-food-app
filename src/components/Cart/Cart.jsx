import styles from './Cart.module.css'

function Cart(props) {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: 'm1', name: 'Sushi', amount: 2, price: 10.99 }].map((item) => (
        <li>item.name</li>
      ))}
    </ul>
  )

  return (
    <div>
      {cartItems}
      <div className={styles.total}>
        <span>Amount</span>
        <span>49.99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </div>
  )
}

export default Cart
