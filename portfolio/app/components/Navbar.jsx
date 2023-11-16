import Link from 'next/link'
import './Navbar.scss'


export default function Navbar () {
  return (
    <nav className='navbar'>
      <h1 className='navbar__logo'>LOGO</h1>
      <div className='navbar__links'>
        <Link href="/">Home</Link>
        <Link href="/cv">CV</Link>
        <Link href="/contact">Contact</Link>
      </div>
  </nav>
  )
}