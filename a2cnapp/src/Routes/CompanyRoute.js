import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Homepage from '../Pages/Homepage'
import ServicePage from '../Pages/ServicePage'
import Ourwork from '../Pages/OurWork'
import AboutPage from '../Pages/AboutPage'
import ContactUs from '../Pages/ContactUs'
import BlogPage from '../Pages/BlogPage'

function CompanyRoute() {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/services' element={<ServicePage/>}/>
        <Route path='/our-works' element={<Ourwork/>}/>
        <Route path='/about-us' element={<AboutPage/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/blogs' element={<BlogPage/>}/>
    </Routes>
  )
}

export default CompanyRoute