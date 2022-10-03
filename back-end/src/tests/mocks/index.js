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
  }
]

const fulanaToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6IkZ1bGFuYSBQZXJlaXJhIiwiZW1haWwiOiJmdWxhbmFAZGVsaXZlcnlhcHAuY29tIiwicm9sZSI6InNlbGxlciIsImlhdCI6MTY2NDgyODQ0OCwiZXhwIjoxNjY0OTE0ODQ4fQ.ykQIqhMX5Xsmvlv6ImRoaYCiAceO4JAem_o8bjWjBuI'

const adminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkRlbGl2ZXJ5IEFwcCBBZG1pbiIsImVtYWlsIjoiYWRtQGRlbGl2ZXJ5YXBwLmNvbSIsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNjY0ODI5NTE0LCJleHAiOjE2NjQ5MTU5MTR9.-8GkQ4QvrdSIW8orGleASlKZkwKuJfMF5p2M36T5OHw'

const listAfterDeleteId3 = [
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
]

module.exports = {
  validUser,
  validLogin,
  listOfUsers,
  fulanaToken,
  listAfterDeleteId3,
  adminToken
}