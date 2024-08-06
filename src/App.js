import React from 'react'
import ContextAndProduct from './components/ContextAndProduct'
import Header from './components/Header'
import SelectedItem from './components/SelectedItem'

function App() {
  return (
    <ContextAndProduct>
      <Header />
      <SelectedItem />
    </ContextAndProduct>
  )
}

export default App