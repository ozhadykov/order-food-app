import DUMMY_MEALS from './dummy-meals'
import Card from '../UI/Card'
import styles from './MealList.module.css'
import MealItem from './MealItem/MealItem'

function MealList() {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ))

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  )
}

export default MealList
