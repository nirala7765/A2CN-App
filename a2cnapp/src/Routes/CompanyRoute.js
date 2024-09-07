import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import ServicePage from '../Pages/ServicePage'
import Ourwork from '../Pages/OurWork'
import AboutPage from '../Pages/AboutPage'
import ContactUs from '../Pages/ContactUs'
// import BlogPage from '../Pages/BlogPage'
import ContactLeads from '../Components/Conatctleads'
import ErrorPage from '../Pages/ErrorPage'
import Webpage from '../Pages/WebPage'
import DigitalMarketing from '../Pages/DigitamMarketing'
import Mobileapp from '../Pages/Mobileapp'
import FAQs from '../Pages/FAQs'


function CompanyRoute() {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/services' element={<ServicePage/>}/>
        <Route path='/our-works' element={<Ourwork/>}/>
        <Route path='/about-us' element={<AboutPage/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
          {/* <Route path='/blogs' element={<BlogPage/>}/>  */}
        <Route path='/error' element={<ErrorPage/>}/>
        <Route path='/web-development' element={<Webpage/>} /> 
        <Route path='/application-Development' element={<Mobileapp/>} />
        <Route path='/digital-Marketing' element={<DigitalMarketing/>} />
        <Route path='/faqs' element={<FAQs/>} />
    </Routes>
  )
}

export default CompanyRoute