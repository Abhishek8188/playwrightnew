import { test, expect } from '@playwright/test'

test.describe.parallel('API Testing', () => {
    const baseUrl = 'https://reqres.in/api'

    test('Simple API Test - Assert Response Status', async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/3`)
        expect(response.status()).toBe(200)

        const requestbody = JSON.parse(await response.text())
        console.group(requestbody)
    })

    test('Simple API Test - Assert Invalid Endpoint', async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/non-existing-endpoint`)
        expect(response.status()).toBe(404)
    })

    test('GET Request - Get User Details', async ({ request }) => {
        const response = await request.get(`${baseUrl}/users/1`)
        const requestbody = JSON.parse(await response.text())
        expect(response.status()).toBe(200)
        expect(requestbody.data.id).toBe(1)
        expect(requestbody.data.first_name).toBe('George')
        expect(requestbody.data.last_name).toBe('Bluth')
        expect(requestbody.data.email).toBeTruthy()
    })

    test('POST Request - Create new user', async ({ request }) => {
        const response = await request.post(`${baseUrl}/user`, {
            data: {
                id: 1000,
            },
        })
        const requestbody = JSON.parse(await response.text())
        expect(requestbody.id).toBe(1000)
        expect(requestbody.createdAt).toBeTruthy()
        console.log(requestbody)
    })

    test('POST Request - Login', async ({ request }) => {
        const response = await request.post(`${baseUrl}/login`, {
            data: {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka',
            }
        })
        const requestbody = JSON.parse(await response.text())
        expect(response.status()).toBe(200)
        expect(requestbody.token).toBeTruthy()
        console.log(requestbody)
    })

    test('POST Request - Login Failed and error coming "Missing password" in Response', async ({ request }) => {
        const response = await request.post(`${baseUrl}/login`, {
            data: {
                email: 'eve.holt@reqres.in',
            }
        })
        const requestbody = JSON.parse(await response.text())
        expect(response.status()).toBe(400)
        expect(requestbody.error).toBe('Missing password')
        console.log(requestbody)
    })

    test('PUT Request - Update', async ({ request }) => {
        const response = await request.put(`${baseUrl}/users/2`, {
            data: {
                name: 'abhishek',
                job: 'qa analyst',
            }
        })
        const requestbody = JSON.parse(await response.text())
        expect(response.status()).toBe(200)
        expect(requestbody.name).toBe('abhishek')
        expect(requestbody.job).toBe('qa analyst')
        expect(requestbody.updatedAt).toBeTruthy()
        console.log(requestbody)
    })

    test('DELETE Request - Delete the content', async ({ request }) => {
        const response = await request.delete(`${baseUrl}/users/2`)
        expect(response.status()).toBe(204)
        console.log()
    })
})