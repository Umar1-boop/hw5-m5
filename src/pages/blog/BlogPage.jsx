import './blog.scss'
export default function BlogPage() {
  return (
    <main className="container editorial-page">
      <section className="editorial-hero blog-hero">
        <span className="eyebrow">OUR LATEST STORIES</span>
        <h1>Blog & Article</h1>
        <p>Discover delicious recipes, cooking tips and stories from the Foodieland kitchen.</p>
        <div className="blog-search"><input type="search" placeholder="Search article, news or recipe..."/><button>Search</button></div>
      </section>
    </main>
  )
}
