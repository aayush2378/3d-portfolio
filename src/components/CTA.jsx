import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='CTA flex flex-col justify-center items-center py-16 px-6 text-center space-y-6'>
      <p className='cta-text text-lg sm:text-2xl leading-relaxed'>
        Have a project in mind? <br className='sm:block hidden'/>
        Let's get started!
      </p>
      <Link to="/contact" className='btn px-8 py-4'>
        Contact
      </Link>
    </section>
  )
}

export default CTA
