import './InfoCard.scss'
import Link from 'next/link'

export default function InfoCard () {

  return (
    <main className="card">
      <Link href='/projects'>
      <div className='card__top'>
        <h1 className='card__title'>Projects</h1>
      </div>
      </Link>
      <p className='card__text'>Upptäck de spännande projekt jag har arbetat med. Från webbutveckling till kreativa företag, utforska min portfölj</p>
    </main>
  )
}