import React from 'react'
import Header from '../components/Header.jsx'
import SpecilaityMenu from '../components/SpecilaityMenu.jsx'
import TopDoctors from '../components/TopDoctors.jsx'

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecilaityMenu/>
      <TopDoctors/>
    </div>
  )
}

export default Home