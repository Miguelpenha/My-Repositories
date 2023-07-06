import { useState } from 'react'
import axios from 'axios'

function useMarkdown(repositoryName: string) {
    const [markdown, setMarkdown] = useState<string>()

    function getMarkdown() {
        axios.get(`https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_NAME_USER}/${repositoryName}/main/README.md`)
        .then(({ data }) =>  setMarkdown(data))

        return markdown
    }

    return getMarkdown
}

export default useMarkdown