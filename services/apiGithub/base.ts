import axios from 'axios'

const base = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
    }
})

export default base