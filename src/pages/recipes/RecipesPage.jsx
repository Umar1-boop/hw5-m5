import './recipes.scss'
import food from '../../img/food.png'
import food2 from '../../img/food2.png'

export default function RecipesPage() {
  return (
    <main className="container recipe-page">
      <section className="recipe-hero">
        <div className="recipe-copy">
          <span className="eyebrow">HEALTHY & DELICIOUS</span>
          <h1>Health Japanese Fried Rice</h1>
          <p>Make a delicious and healthy Japanese fried rice at home. A simple recipe packed with fresh vegetables, fluffy rice and amazing flavor.</p>

          <div className="recipe-meta">
            <span>◷ 20 Minutes</span>
            <span>♨ Easy Recipe</span>
          </div>

          <div className="recipe-author">
                <div className="author-avatar">UM</div>
              <div>
                <b>Umar Manapov</b>
                <small>Foodieland kitchen</small>
              </div>
          </div>
        </div>
       <div className="recipe-photo"><img src={food} alt="Japanese fried rice" /></div>
      </section>
    </main>
  )
}
