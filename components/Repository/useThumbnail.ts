import { useState } from 'react'
import axios from 'axios'
import cheerio from 'cheerio'

function useThumbnail(url?: string) {
    const [thumbnail, setThumbnail] = useState<string>()

    if (url) {
        axios.get(url).then(({ data }) => {
            const html = cheerio.load(data)
            const urlImage = html('meta[property="og:image"]').attr('content')

            if (urlImage) {
                if (urlImage.includes('https://')) {
                    setThumbnail(urlImage)
                } else {
                    setThumbnail(`${url}/${urlImage}`)
                }
            }
        })
    }

    return thumbnail
}

export default useThumbnail