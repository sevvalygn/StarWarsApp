# Ödev 2 - Star Wars App - Teslim

**Star Wars App** — [SWAPI](https://swapi.dev/) kullanarak yıldız gemilerini listeleme, arama ve detay görüntüleme.

---

## Gereksinimler karşılanan özellikler

- **Yıldız gemilerini listeleme** — API’den sayfalı olarak gemiler çekilir ve listelenir.
- **Yıldız gemileri arasında arama** — Tek bir arama kutusu ile ad veya modele göre API üzerinden arama (`?search=...`).
- **Belirli bir geminin detayları** — Listeden bir öğeye tıklanınca detay sayfasına gidilir.
- **"Daha Fazla" düğmesi** — Sonraki sayfa varsa ek gemiler yüklenir.
- **Liste öğeleri** — Ad, model ve (atmosferdeki maks.) hız bilgisi gösterilir.
- **Detay sayfası** — Ad, model, yolcu sayısı, atmosferdeki maksimum hız, üretici, mürettebat, kargo kapasitesi.
- **Ana sayfaya dönüş** — Detay sayfasındaki buton ile ana listeye geri dönülür.

## API

- **Adres:** https://swapi.dev/
- **Gemiler:** `GET /api/starships/` (sayfalama: `?page=2`)
- **Arama:** `GET /api/starships/?search=...`
- **Tek gemi:** `GET /api/starships/:id/`

## Teknolojiler

- React 18
- React Router 6
- Vite 5

## Çalıştırma

```bash
cd star-wars-app
npm install
npm run dev
```

Tarayıcıda `http://localhost:5173` açın.

## Dosya yapısı

```
star-wars-app/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── ODEV2-ACIKLAMA.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── api/
    │   └── swapi.js
    └── pages/
        ├── StarshipList.jsx
        └── StarshipDetail.jsx
```

## Teslim

Bu klasörü (`star-wars-app`) zip’leyerek teslim edebilirsiniz. Önce `npm install` ve `npm run dev` ile çalıştığından emin olun.
