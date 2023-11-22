//import { useState } from "react"
import './Contact.scss'


export default function Contact () {

  //const [name, setName] = useState('')

  return (
    <main className="contact">
      <h2 className="contact__title">Contact</h2>

      <form action="" className="form">
        <label htmlFor="" className='form__label'>
          Namn:
          <input type='text' />
        </label>

        <label>
          E-post:
          <input type="email" />
        </label>

      <label>
        Telefonnummer:
        <input type="tel" />
      </label>

      <label>
        Meddelande:
        <textarea />
      </label>

        <button type='submit'></button>
      </form>

    </main>
  )
}






  
