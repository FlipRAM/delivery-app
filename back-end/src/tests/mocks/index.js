const validUser = {
  id: 2,
  name: 'Fulana Pereira',
  email: 'fulana@deliveryapp.com',
  password: 'fulana@123',
  role: 'seller'
}

const validLogin = {
  email: 'fulana@deliveryapp.com',
  password: 'fulana@123',
};

const listOfUsers = [
  {
    id: 1,
    name: "Delivery App Admin",
    email: "adm@deliveryapp.com",
    password: "a4c86edecc5aee06eff8fdeda69e0d04",
    role: "administrator"
  },
  {
    id: 2,
    name: "Fulana Pereira",
    email: "fulana@deliveryapp.com",
    password: "3c28d2b0881bf46457a853e0b07531c6",
    role: "seller"
  },
  {
    id: 3,
    name: "Cliente Zé Birita",
    email: "zebirita@email.com",
    password: "1c37466c159755ce1fa181bd247cb925",
    role: "customer"
  },
  {
    email: "test@test.com",
    id: 4,
    name: "Test",
    password: "2bd7163b221001bdc7bceeec45cbb0fc",
    role: "customer",
  }
]

const fulanaToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkZ1bGFuYSBQZXJlaXJhIiwiZW1haWwiOiJmdWxhbmFAZGVsaXZlcnlhcHAuY29tIiwicm9sZSI6InNlbGxlciIsImlhdCI6MTY2NDgyODQ0OCwiZXhwIjoxNjY0OTE0ODQ4fQ.ykQIqhMX5Xsmvlv6ImRoaYCiAceO4JAem_o8bjWjBuI'

const validUserWithHash = {
  id: 2,
  name: 'Fulana Pereira',
  email: 'fulana@deliveryapp.com',
  token: fulanaToken,
  role: 'seller'
}

const adminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRlbGl2ZXJ5IEFwcCBBZG1pbiIsImVtYWlsIjoiYWRtQGRlbGl2ZXJ5YXBwLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNjY0ODI5NTE0LCJleHAiOjE2NjQ5MTU5MTR9.-8GkQ4QvrdSIW8orGleASlKZkwKuJfMF5p2M36T5OHw'

const listAfterDeleteId5 = [
  {
    id: 1,
    name: "Delivery App Admin",
    email: "adm@deliveryapp.com",
    password: "a4c86edecc5aee06eff8fdeda69e0d04",
    role: "administrator"
  },
  {
    id: 2,
    name: "Fulana Pereira",
    email: "fulana@deliveryapp.com",
    password: "3c28d2b0881bf46457a853e0b07531c6",
    role: "seller"
  },
  {
    id: 3,
    name: "Cliente Zé Birita",
    email: "zebirita@email.com",
    password: "1c37466c159755ce1fa181bd247cb925",
    role: "customer"
  },
  {
    email: "test@test.com",
    id: 4,
    name: "Test",
    password: "2bd7163b221001bdc7bceeec45cbb0fc",
    role: "customer",
  }
]

const listOfProducts = [
  {
    "id": 1,
    "name": "Skol Lata 250ml",
    "price": "2.20",
    "urlImage": "http://localhost:3001/images/skol_lata_350ml.jpg"
  },
  {
    "id": 2,
    "name": "Heineken 600ml",
    "price": "7.50",
    "urlImage": "http://localhost:3001/images/heineken_600ml.jpg"
  },
  {
    "id": 3,
    "name": "Antarctica Pilsen 300ml",
    "price": "2.49",
    "urlImage": "http://localhost:3001/images/antarctica_pilsen_300ml.jpg"
  },
  {
    "id": 4,
    "name": "Brahma 600ml",
    "price": "7.50",
    "urlImage": "http://localhost:3001/images/brahma_600ml.jpg"
  },
  {
    "id": 5,
    "name": "Skol 269ml",
    "price": "2.19",
    "urlImage": "http://localhost:3001/images/skol_269ml.jpg"
  },
  {
    "id": 6,
    "name": "Skol Beats Senses 313ml",
    "price": "4.49",
    "urlImage": "http://localhost:3001/images/skol_beats_senses_313ml.jpg"
  },
  {
    "id": 7,
    "name": "Becks 330ml",
    "price": "4.99",
    "urlImage": "http://localhost:3001/images/becks_330ml.jpg"
  },
  {
    "id": 8,
    "name": "Brahma Duplo Malte 350ml",
    "price": "2.79",
    "urlImage": "http://localhost:3001/images/brahma_duplo_malte_350ml.jpg"
  },
  {
    "id": 9,
    "name": "Becks 600ml",
    "price": "8.89",
    "urlImage": "http://localhost:3001/images/becks_600ml.jpg"
  },
  {
    "id": 10,
    "name": "Skol Beats Senses 269ml",
    "price": "3.57",
    "urlImage": "http://localhost:3001/images/skol_beats_senses_269ml.jpg"
  },
  {
    "id": 11,
    "name": "Stella Artois 275ml",
    "price": "3.49",
    "urlImage": "http://localhost:3001/images/stella_artois_275ml.jpg"
  }
]

module.exports = {
  validUser,
  validLogin,
  listOfUsers,
  fulanaToken,
  listAfterDeleteId5,
  adminToken,
  listOfProducts,
  validUserWithHash
}