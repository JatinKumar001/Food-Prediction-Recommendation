import React from 'react'
import Card from './components/Card'
import Category from './components/Category'
import Food from './components/Food'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Foodrecipe from './components/Foodrecipe'
import InputColumn from './components/InputColumn'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Recommendation from './components/Recommendation'

const App = () => {
  return (
    <>
          <Navbar />
          <Hero />
          <Card />
          <InputColumn />
          <Food />
          <Recommendation />
          <Category />
          {/* <Foodrecipe /> */}
    </>
  )
}

export default App