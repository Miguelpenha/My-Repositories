import { useState, useEffect } from 'react'
import getMarkdown from './getMarkdown'

function useMarkdown(thumbnail: string | undefined, repositoryName: string) {
    const [markdown, setMarkdown] = useState<string>()

    useEffect(() => {
        if (!thumbnail) {
            getMarkdown(repositoryName)
            .then(markdown => setMarkdown(markdown))
        }
    }, [thumbnail])

    return markdown
}

export default useMarkdown