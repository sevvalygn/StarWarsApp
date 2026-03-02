import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getStarshipById } from '../api/swapi'

export default function StarshipDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [ship, setShip] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)
    getStarshipById(id)
      .then(setShip)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p className="loading">Yükleniyor...</p>
  if (error) return <p className="error">{error}</p>
  if (!ship) return null

  const fields = [
    { label: 'Ad', value: ship.name },
    { label: 'Model', value: ship.model },
    { label: 'Yolcu sayısı', value: ship.passengers },
    { label: 'Atmosferdeki maks. hız', value: ship.max_atmosphering_speed },
    { label: 'Üretici', value: ship.manufacturer },
    { label: 'Mürettebat', value: ship.crew },
    { label: 'Kargo kapasitesi', value: ship.cargo_capacity },
  ]

  return (
    <div className="detail-page">
      <h2>{ship.name}</h2>
      <div className="detail-grid">
        {fields.map(({ label, value }) => (
          <div key={label} className="detail-row">
            <span>{label}</span>
            <span>{value ?? '—'}</span>
          </div>
        ))}
      </div>
      <button type="button" className="back-btn" onClick={() => navigate('/')}>
        ← Ana sayfaya dön
      </button>
    </div>
  )
}
