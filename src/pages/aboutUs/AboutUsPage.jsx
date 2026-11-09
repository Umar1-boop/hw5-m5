import './about.scss'

export default function AboutUsPage() {
  return (
    <main className="container about-page">
      <section className="about-hero">
        <div>
          <span className="eyebrow">WELCOME TO FOODIELAND</span>
          <h1>Everyone can be a chef in their own kitchen</h1>
          <p>Foodieland is a place for people who love good food. We share easy recipes, fresh ideas and inspiration to make every meal special.</p>
          <a href="/recipes-page">Explore recipes</a>
        </div>
        <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85" alt="Cooking fresh food in the kitchen"/>
        </section>
    </main>
  )
}
