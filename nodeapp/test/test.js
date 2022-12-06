const request = require('supertest')
const app = require('../server')

let random = (Math.random() + 1).toString(36).substring(7);

// Signup and Login
it('node_test_case1', async () => {

  // Signup
  const res1 = await request("https://8080-aceefbccfdfadfaadaceabcddfdacbfedfac.examlyiopb.examly.io")
    .post('/signup')
    .send({
      email: "test"+random+"@gmail.com",
      username: "test",
      role: "ADMIN",
      password: `${random}`,
      mobileNumber: "8596748596"
    })

    // Login
  const res2 = await request("https://8080-aceefbccfdfadfaadaceabcddfdacbfedfac.examlyiopb.examly.io")
    .post('/login')
    .send({
      email: "test"+random+"@gmail.com",
      password: random
    })
  expect(res2.statusCode).toEqual(200)
})

// Add Product
it('node_test_case2', async () => {
    const res = await request("https://8080-aceefbccfdfadfaadaceabcddfdacbfedfac.examlyiopb.examly.io")
      .post('/admin/addProduct')
      .send({
        productName: "book",
        description: "test book",
        price: "120",
        imageUrl: "abcd",
        quantity: "10"
      })
    expect(res.statusCode).toEqual(200)
})

// Home
it('node_test_case3', async () => {
  const res = await request("https://8080-aceefbccfdfadfaadaceabcddfdacbfedfac.examlyiopb.examly.io")
    .get('/products')
  expect(res.statusCode).toEqual(200)
})

it('node_test_case4', async () => {
  const res = await request("https://8080-aceefbccfdfadfaadaceabcddfdacbfedfac.examlyiopb.examly.io")
    .get('/products')
  expect(res.statusCode).toEqual(200)
})

it('node_test_case5', async () => {
  const res = await request("https://8080-aceefbccfdfadfaadaceabcddfdacbfedfac.examlyiopb.examly.io")
    .get("/user/Test"+random+"@gmail.com/orders")
  expect(res.statusCode).toEqual(200)
})