import { Routes, Route } from 'react-router-dom'
import StarshipList from './pages/StarshipList'
import StarshipDetail from './pages/StarshipDetail'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StarshipList />} />
      <Route path="/starships/:id" element={<StarshipDetail />} />
    </Routes>
  )
}
