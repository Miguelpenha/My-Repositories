import type { NextApiRequest, NextApiResponse } from 'next'
import apiBase from '../../services/apiGithub/base'
import { IRepository } from '../../types'
import axios from 'axios'
import cheerio from 'cheerio'

async function thumbnails(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { data: repositories } = await apiBase.get<IRepository[]>(`/users/${process.env.NEXT_PUBLIC_NAME_USER}/repos?per_page=100`)

        const urlsRaw = await Promise.all(
            repositories.map(repository => {
                const homePage = repository.homepage ? repository.homepage.includes('https://') ? repository.homepage : `https://${repository.homepage}` : undefined
    
                if (homePage) {
                    return { url: homePage, name: repository.name }
                }
            })
        )
        let urls = [...new Set(urlsRaw)].filter(a => a) as { name: string, url: string }[]

        const thumbnailsRaw = await Promise.all(
            urls.map(async url => {
                try {
                    const { data } = await axios.get(url.url)

                    const html = cheerio.load(data)
                    const urlImage = html('meta[property="og:image"]').attr('content')

                    if (urlImage) {
                        if (urlImage.includes('https://')) {
                            return { url: urlImage, name: url.name }
                        } else {

                            return { url: `${url.url}/${urlImage}`, name: url.name }
                        }
                    }
                } catch {
                    return null
                }
            })
        )
        const thumbnails = thumbnailsRaw.filter(a => a)

        res.json(thumbnails)
    } else {
        res.status(404)
    }
}

export default thumbnails