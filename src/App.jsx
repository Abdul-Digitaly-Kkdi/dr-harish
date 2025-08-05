import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Component/Layout'
import Home from './Pages/Home/Index'
import AboutPage from './Pages/About/Index'
import ServicePage from './Pages/Services/Index'
import ContactPage from './Pages/Contact/Index'
import ScrollToTop from './Component/ScrollToTop'
import ScrollToTopButton from './Component/ScrollToTopButton'
import StickyContactButtons from './Component/StickyContactButtons'
import NotFound from './Pages/NotFound/Index'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToTopButton />
      <StickyContactButtons />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='services' element={<ServicePage />} />
          <Route path='contact' element={<ContactPage />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
