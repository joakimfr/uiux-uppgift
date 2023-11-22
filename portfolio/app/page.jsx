import InfoCard from "./components/infocard/InfoCard"
import Image from "next/image"
import profile from '../public/profilepic.jpg'
import './home.scss'

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
          alt='profile picture'
        />
        <div className='profile__desc'>
          <h1 className='profile__title'>Joakim Fritz</h1>
          <h2 className='profile__text'>Studerar till Front end-utvecklare.</h2>
        </div>
        </div>
      </section>
      <section className="right">
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </section>
    </main>
  )
}
