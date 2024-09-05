import PrimeVideo from './components/PrimeVideo'

import './App.css'

const moviesList = [
  {
    id: '1',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/the-tomorrow-war-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=QPistcpGB8o',
    categoryId: 'ACTION',
  },
  {
    id: '2',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/the-boss-baby-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=k397HRbTtWI&t=1s',
    categoryId: 'COMEDY',
  },
  {
    id: '3',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/avengers-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=eOrNdBpGMv8',
    categoryId: 'ACTION',
  },
  {
    id: '4',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/the-intern-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=ZU3Xban0Y6A',
    categoryId: 'COMEDY',
  },
  {
    id: '5',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/karwaan-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=IUCeN7kelXs',
    categoryId: 'COMEDY',
  },
  {
    id: '6',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/war-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=tQ0mzXRk-oM',
    categoryId: 'ACTION',
  },
  {
    id: '7',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/yes-man-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=dDh1l3qVNoY',
    categoryId: 'COMEDY',
  },
  {
    id: '8',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/isnt-it-romantic-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=YVYzxm_RqMg&t=9s',
    categoryId: 'COMEDY',
  },
  {
    id: '9',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/total-dhamaal-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=fo9EhcwQXcM',
    categoryId: 'COMEDY',
  },
  {
    id: '10',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/godzilla-vs-kong-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=odM92ap8_c0',
    categoryId: 'ACTION',
  },
  {
    id: '11',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/welcome-to-newyork-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=lMAj8tyThw0',
    categoryId: 'COMEDY',
  },
  {
    id: '12',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/pagalpanti-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=3-7jehmURuM',
    categoryId: 'COMEDY',
  },
  {
    id: '13',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/gamer-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=P2g94xQmtHw',
    categoryId: 'ACTION',
  },
  {
    id: '14',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/rule-of-the-law-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=xaPLUII_M6g',
    categoryId: 'ACTION',
  },
  {
    id: '15',
    thumbnailUrl: 'https://assets.ccbp.in/frontend/react-js/priest-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=IYfdQOGqL1o',
    categoryId: 'ACTION',
  },
  {
    id: '16',
    thumbnailUrl:
      'https://assets.ccbp.in/frontend/react-js/ghost-protocal-img.png',
    videoUrl: 'https://www.youtube.com/watch?v=EDGYVFZxsXQ',
    categoryId: 'ACTION',
  },
  {
    id: '17',
    thumbnailUrl:
      'https://res.cloudinary.com/dfrta1yab/image/upload/v1724763385/Kalki_2898_AD_jjdpt5.avif',
    videoUrl: 'https://www.youtube.com/watch?v=y1-w1kUGuz8',
    categoryId: 'ACTION',
  },
  {
    id: '18',
    thumbnailUrl:
      'https://res.cloudinary.com/dfrta1yab/image/upload/v1725542386/stree_2_zrup44.webp',
    videoUrl: 'https://www.youtube.com/watch?v=KVnheXywIbY',
    categoryId: 'HORROR',
  },
  {
    id: '19',
    thumbnailUrl:
      'https://res.cloudinary.com/dfrta1yab/image/upload/v1725542387/Munjya_jqoyli.webp',
    videoUrl: 'https://www.youtube.com/watch?v=OAhD_mgWQ_U',
    categoryId: 'HORROR',
  },
  {
    id: '20',
    thumbnailUrl:
      'https://res.cloudinary.com/dfrta1yab/image/upload/v1725542386/thumbaaf_p6muao.webp',
    videoUrl: 'https://www.youtube.com/watch?v=YGIcZrUBY0k',
    categoryId: 'HORROR',
  },
  {
    id: '21',
    thumbnailUrl:
      'https://res.cloudinary.com/dfrta1yab/image/upload/v1725543965/maxresdefault_t5v8gx.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=As-vKW4ZboU',
    categoryId: 'HORROR',
  },
  {
    id: '22',
    thumbnailUrl:
      'https://res.cloudinary.com/dfrta1yab/image/upload/v1725542387/Trap_kjnd8m.webp',
    videoUrl: 'https://www.youtube.com/watch?v=mps1HbpECIA',
    categoryId: 'HORROR',
  },
  {
    id: '23',
    thumbnailUrl:
      'https://res.cloudinary.com/dfrta1yab/image/upload/v1725542387/Longlegs_wrnklt.webp',
    videoUrl: 'https://www.youtube.com/watch?v=OG7wOTE8NhE',
    categoryId: 'HORROR',
  },
  {
    id: '24',
    thumbnailUrl:
      'https://res.cloudinary.com/dfrta1yab/image/upload/v1725542387/strange_darling_qh5k2m.webp',
    videoUrl: 'https://www.youtube.com/watch?v=MukhQbscyjU',
    categoryId: 'HORROR',
  },
  {
    id: '25',
    thumbnailUrl:
      'https://res.cloudinary.com/dfrta1yab/image/upload/v1725542386/Kanchana_jgusig.webp',
    videoUrl: 'https://www.youtube.com/watch?v=FHhta07TjXs',
    categoryId: 'HORROR',
  },
  {
    id: '26',
    thumbnailUrl:
      'https://res.cloudinary.com/dfrta1yab/image/upload/v1725542386/Arundhati_v9k1k0.webp',
    videoUrl: 'https://www.youtube.com/watch?v=0bEZ1NhcCOc',
    categoryId: 'HORROR',
  },
  {
    id: '27',
    thumbnailUrl:
      'https://res.cloudinary.com/dfrta1yab/image/upload/v1724766626/hq720_x4bw1h.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=rGsXo6cjKyE',
    categoryId: 'HORROR',
  },
  {
    id: '28',
    thumbnailUrl:
      'https://res.cloudinary.com/dfrta1yab/image/upload/v1725544749/MV5BMzk0ODk3MTgtMTQ0Zi00ZGNiLTgwMWMtM2I0YmFjZGE4ZjQyXkEyXkFqcGdeQXVyMjY1MjkzMjE_._V1__zjutmh.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=ai304KD-bk8',
    categoryId: 'HORROR',
  },
  {
    id: '29',
    thumbnailUrl:
      'https://res.cloudinary.com/dfrta1yab/image/upload/v1725544855/7baf1938e1d038da068ff5f43b7c5d927cf3151f35d42b196bd99f82a5400832_apqisk.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=Hgc07_BX4_8',
    categoryId: 'COMEDY',
  },
  {
    id: '30',
    thumbnailUrl:
      'https://res.cloudinary.com/dfrta1yab/image/upload/v1725544871/MV5BZjkxOTA5NTYtOGUzMy00MjQxLTk0MzEtYjhhZjhiYjI0MmE2XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1__gpamqc.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=RBhD5B1svhc',
    categoryId: 'COMEDY',
  },
  {
    id: '31',
    thumbnailUrl:
      'https://res.cloudinary.com/dfrta1yab/image/upload/v1725544889/Mad__28film_29_bbczh9.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=uPeRKmVJtsU',
    categoryId: 'COMEDY',
  },


]

const App = () => <PrimeVideo moviesList={moviesList} />

export default App
