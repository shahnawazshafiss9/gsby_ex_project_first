import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import './layout.css'
const Layout = ({children}) => {
    return (
        <>
          <Header />
          <main>
          {children}
          </main>
          <Footer />  
        </>
    )
}

export default Layout
