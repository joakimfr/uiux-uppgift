import Image from "next/image"
import './components/infocard/InfoCard.scss'
import profile from '../public/profilepic.jpg'
import './home.scss'
import Link from 'next/link'
export default function Home() {



  return (
    <main className='home'>
      <section className="left">
        <div className='profile'>
        <Image
          className='profile__image'
          src={profile}
          quality={100}
          placeholder='blur'
          alt='Profilbild av Joakim Fritz'
        />
        <div className='profile__desc'>
          <h1 className='profile__title'>Joakim Fritz</h1>
          <h2 className='profile__text'>Studerar till Front end-utvecklare.</h2>
        </div>
        </div>
      </section>
      <section className="right">
        <article className="card">
          <Link href='/projects'>
            <div className='card__top'>
              <h1 className='card__title'>Projects</h1>
            </div>
          </Link>
          <p className='card__text'>Upptäck de spännande projekt jag har arbetat med. Från webbutveckling till kreativa företag, utforska min portfölj</p>
        </article>
        <article className="card">
          <Link href='/projects'>
            <div className='card__top card__border'>
              <h1 className='card__title'>About me</h1>
            </div>
          </Link>
          <p className='card__text'>Upptäck de spännande projekt jag har arbetat med. Från webbutveckling till kreativa företag, utforska min portfölj</p>
        </article>
    
        </section>
      </main>
  )
}
