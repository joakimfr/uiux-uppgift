import Link from 'next/link'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function Header () {
  return (
    <header className='header'>
      <h1 className='header__logo'>JF</h1>
      <nav className='header__navbar'>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume">About me</Link>
      </nav>
      <div className='header__icons-container'>
        <FontAwesomeIcon icon={faLinkedin} className='header__icons' />
        <FontAwesomeIcon icon={faGithub} className='header__icons' />
      </div>
    </header>
    )
  }