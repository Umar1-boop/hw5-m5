import './banner.scss'
import banner from '../../../../img/banner.png'

export default function Banner() {
  return (
    <section className="container home-banner">
      <img src={banner} alt="Spicy delicious chicken wings" />
    </section>
  )
}
