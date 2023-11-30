import './resume.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faHtml5, faCss3Alt, faReact, faJs } from '@fortawesome/free-brands-svg-icons'

export default function Resume () {

  return (
    <main className='main'>
      
      <section className='top'>
        <article className='about'>
          <h2>Om mig</h2>
          <p>Målinriktad och kreativ före detta plåtslagare med 10 års erfarenhet av att hantera båda större och mindre projekt. För närvarande studerar jag till front-end utvecklare och har slutfört hälften av utbildningen och i december ska vi ut i praktik. Jag är skicklig på planering, kommunikation och har utvecklat stark problemlösningsförmåga. Jag trivs både med att arbeta självständigt och i team och har en förmåga att anpassa mig till olika arbetsmiljöer. Min motivation för att lära mig och utvecklas, tillsammans med min kreativitet och noggrannhet, gör mig övertygad om att jag kommer vara framgångsrik i min nya karriär som front-end utvecklare.</p>
        </article>
        <article className='work'>
          <h2>Tidigare arbete</h2>
          <h4>Plåtslagare på Hägnens plåtslageri. 2013 - 2023</h4>
          <ul>
            <li>- Hanterat många stora och mindre projekt med nära kundkontakt.</li>
            <li>- Utvecklat starka planerings och samarbetsfärdigheter inom teambaserade projekt.</li>
            <li>- Blivit van vid att arbeta både självständigt och i team och haft stort ansvar för att leda projekt.</li>
          </ul>
          <div className='education'>
            <h2>Utbildning</h2>
            <p>Gymnasieexamen Bäckadalsgymnasiet. 2009 - 2012</p>
            <p>Pågående utbildning Front-end utvecklare Jensen yrkeshögskola. 2022 – 2024</p>
          </div>
        </article>
      </section>

      <section className='bottom'>
        <div className='skills'>
          <h2>Tekniska färdigheter</h2>
          <ul>
            <li className='skills__li'><FontAwesomeIcon icon={faJs} className='icon'/>Javascript</li>
            <li className='skills__li'><FontAwesomeIcon icon={faHtml5} className='icon'/>Html</li>
            <li className='skills__li'><FontAwesomeIcon icon={faCss3Alt} className='icon'/>Css</li>
            <li className='skills__li'><FontAwesomeIcon icon={faReact} className='icon'/>React</li>
          </ul>
        </div>
        <div className='info'>
          <h2>Kontakt</h2>
        <ul>
          <li className='skills__li'><FontAwesomeIcon icon={faPhone} className='icon'/>0735046544</li>
          <li className='skills__li'><FontAwesomeIcon icon={faLocationDot} className='icon'/>Kålgårdsgatan 33, Jönköping</li>
          <li className='skills__li'><FontAwesomeIcon icon={faEnvelope} className='icon'/>fritzjoakim@hotmail.com</li>
          <li className='skills__li'>
            <FontAwesomeIcon icon={faGithub} className='icon'/>
            <a href="https://github.com/joakimfr" target="_blank" rel="noopener noreferrer" className='gh-link'>Besök min GutHub-profil</a>
          </li>
        </ul>
        </div>
      </section>

    </main>
  )
}