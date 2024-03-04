import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ForgetPassword from './pages/ForgetPassword'
import JobPreview from './pages/JobPreview'
import BlogPage from './pages/BlogPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
      <Route path='/forget-password' element={<ForgetPassword />} />
      <Route path='/jobs/:id' element={<JobPreview />} />
      <Route path='/blog' element={<BlogPage />} />
    </Routes>
  )
}

export default App
