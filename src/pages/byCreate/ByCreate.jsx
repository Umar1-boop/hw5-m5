import './byCreate.scss'
import cat from '../../img/cat.jpg'


export default function ByCreate() {
  return (
    <main className="container creator-page">
      <section className="creator-card">
        <img className="creator-photo" src={cat} alt="Profile avatar" />
        <span className="creator-label">ABOUT THE DEVELOPER</span>
        <h1>Умар Манапов</h1>
        <p className="creator-role">Студент · Frontend Developer</p>
        <div className="creator-line" />
        <div className="creator-info"><span>ФИО</span><b>Умар Манапов</b></div>
        <div className="creator-info"><span>Группа</span><b>45-1F150626</b></div>
        <p className="creator-description">Я изучаю веб-разработку и учусь создавать современные сайты с помощью HTML, CSS и React.</p>
      </section>
    </main>
  )
}
