const app = require('../../src/index')
const request = require('supertest')
const mongoose = require('mongoose')
describe('starSign', () => {
    afterAll(async () => {
        await mongoose.connection.close()
    })
    it('should return the users star sign', async (done) => {
        const response = await request(app).get('/signo').query({
            name: 'pedro',
            birthdate: '22-03-1993'
        })
        expect(response.body.starSign).toBe('Aries')
        done()
    })

})