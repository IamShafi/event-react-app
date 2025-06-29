import React from 'react'

import Footer from '../components/Footer'
import Ticket from '../components/BookingSuccess/Ticket'
import CoverSection from '../components/BookingSuccess/CoverSection'

const BookingSuccessPage = () => {
  return (
    <div>
      <CoverSection/>
      <Ticket/>
      <Footer/>
    </div>
  )
}

export default BookingSuccessPage
