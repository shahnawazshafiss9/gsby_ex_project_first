import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import './styles.css'
const Templatelayout = ({children}) => {
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

export default Templatelayout
