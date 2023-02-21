import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>

      <span type='button' className='btn btn--outline'>
        Email me: {`${contact.email}`}
      </span>
      <br />
      <span type='button' className='btn btn--outline'>
        Phone number: +526682319914
      </span>
    </section>
  )
}

export default Contact
