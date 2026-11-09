import './contact.scss'
import con from '../../img/contac.png'


export default function ContactPage() {
  return (
    <main className="container contact-page">
      <section className="contact-heading">
        <span className="eyebrow">WE'D LOVE TO HEAR FROM YOU</span>
        <h1>Contact Us</h1>
        <p>Have a question, suggestion or just want to say hello? Send us a message.</p>
      </section>
      <section className="contact-content">
        <div className="contact-image">
          <img src={con} alt="Bright modern kitchen"/>
        </div>
          <form className="contact-form" onSubmit={(e)=>e.preventDefault()}>
            <label>Name<input placeholder="Enter your name"/></label>
            <label>Email address<input type="email" placeholder="Your email address"/></label>
            <label>Subject<input placeholder="How can we help?"/></label>
            <label>Message<textarea rows="5" placeholder="Write your message..."/></label>
          <button type="submit">Submit</button>
          </form>
      </section>
    </main>
  )
}
