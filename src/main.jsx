import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header/Header.jsx'
import Body from './Components/Body/Body.jsx'
import SectionOne from './Components/Body/SectionOne.jsx'
import SectionTwo from './Components/Body/SectionTwo.jsx'
import SectionThree from './Components/Body/SectionThree.jsx'
import SectionFour from './Components/Body/SectionFour.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Body />
   <SectionOne />
   <SectionTwo />
   <SectionThree />
   <SectionFour />
  </React.StrictMode>,
)
