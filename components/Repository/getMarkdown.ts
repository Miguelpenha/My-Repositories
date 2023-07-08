import axios from 'axios'

async function getMarkdown(repositoryName: string) {
    const url = `https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_NAME_USER}/${repositoryName}/main/README.md`

    const { data: markdown } = await axios.get<string>(url)

    return markdown
}

export default getMarkdown