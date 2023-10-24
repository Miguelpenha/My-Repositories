import { useState, useEffect } from 'react'
import axios from 'axios'

function useThumbnail(url?: string) {
    const [thumbnail, setThumbnail] = useState<string>()

    useEffect(() => {
        if (url) {
            axios.get(`${url}/img/thumbnail.png`).then(({ data }) => {
                if (data) {
                    setThumbnail(`${url}/img/thumbnail.png`)
                }
            })
        }
    }, [url])

    return thumbnail
}

export default useThumbnail