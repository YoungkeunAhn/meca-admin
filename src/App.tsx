import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Error404 from './pages/error/Error404'
import Login from './pages/Login'
import ContactList from './pages/contact/ContactList'
import NoticeList from './pages/notice/NoticeList'
import PortfolioList from './pages/portfolio/PortfolioList'
import PortfolioEdit from './pages/portfolio/PortfolioEdit'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/main' element={<Main />} />
      <Route path='/contact' element={<ContactList />} />
      <Route path='/notice' element={<NoticeList />} />
      <Route path='/portfolio' element={<PortfolioList />} />
      <Route path='/portfolio/edit/:id' element={<PortfolioEdit />} />
      <Route path='/portfolio/add' element={<PortfolioEdit />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default App
