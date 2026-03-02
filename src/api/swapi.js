const BASE = 'https://swapi.dev/api'

export function getStarshipsPage(page = 1, search = '') {
  const params = new URLSearchParams()
  if (page > 1) params.set('page', page)
  if (search.trim()) params.set('search', search.trim())
  const query = params.toString()
  return fetch(`${BASE}/starships/${query ? `?${query}` : ''}`).then((r) => {
    if (!r.ok) throw new Error('API hatası')
    return r.json()
  })
}

export function getStarshipById(id) {
  return fetch(`${BASE}/starships/${id}/`).then((r) => {
    if (!r.ok) throw new Error('Gemi bulunamadı')
    return r.json()
  })
}

/** Extract numeric id from SWAPI url (e.g. "https://swapi.dev/api/starships/10/" -> 10) */
export function getIdFromUrl(url) {
  if (!url) return null
  const match = url.match(/\/(\d+)\/?$/)
  return match ? match[1] : null
}
