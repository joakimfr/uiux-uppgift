import Link from 'next/link'
import './Header.scss'


export default function Header () {
  return (
    <main className='header'>
       <h1 className='header__logo'>LOGO</h1>
    <nav className='header__navbar'>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
        
      </nav>
      <div className='header__icons-container'>
        <div className='header__icons'></div>
        <div className='header__icons'></div>
      </div>
  </main>
  )
}