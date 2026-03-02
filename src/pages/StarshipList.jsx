import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { getStarshipsPage, getIdFromUrl } from '../api/swapi'

export default function StarshipList() {
  const [ships, setShips] = useState([])
  const [nextPage, setNextPage] = useState(null)
  const [search, setSearch] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState(null)

  const load = useCallback(async (page = 1, searchTerm = '', append = false) => {
    if (append) setLoadingMore(true)
    else setLoading(true)
    setError(null)
    try {
      const data = await getStarshipsPage(page, searchTerm)
      setShips((prev) => (append ? [...prev, ...data.results] : data.results))
      setNextPage(data.next ? page + 1 : null)
    } catch (e) {
      setError(e.message)
      if (!append) setShips([])
    } finally {
      setLoading(false)
      setLoadingMore(false)
    }
  }, [])

  useEffect(() => {
    load(1, search)
  }, [search, load])

  const handleSearch = (e) => {
    e.preventDefault()
    setSearch(searchInput.trim())
  }

  const handleLoadMore = () => {
    if (nextPage && !loadingMore) load(nextPage, search, true)
  }

  return (
    <div>
      <h1>Yıldız Gemileri</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Ad veya modele göre ara..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">Ara</button>
      </form>

      {loading && <p className="loading">Yükleniyor...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <>
          {ships.length === 0 ? (
            <p className="empty">Sonuç bulunamadı.</p>
          ) : (
            <div className="card-list">
              {ships.map((ship) => {
                const id = getIdFromUrl(ship.url)
                return (
                  <Link key={ship.url} to={`/starships/${id}`} className="card">
                    <h3>{ship.name}</h3>
                    <p><strong>Model:</strong> {ship.model}</p>
                    <p><strong>Hız (atm.):</strong> {ship.max_atmosphering_speed}</p>
                  </Link>
                )
              })}
            </div>
          )}

          {nextPage && (
            <div style={{ marginTop: 24, textAlign: 'center' }}>
              <button onClick={handleLoadMore} disabled={loadingMore}>
                {loadingMore ? 'Yükleniyor...' : 'Daha Fazla'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
