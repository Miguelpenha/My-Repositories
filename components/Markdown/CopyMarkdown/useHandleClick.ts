import { Dispatch, SetStateAction } from 'react'

function useHandleClick(node: any, setCopied: Dispatch<SetStateAction<boolean>>) {
    const text = node.children[0].children[0].value

    function handleClick() {
        navigator.clipboard.writeText(text)

        setCopied(true)

        setTimeout(() => setCopied(false), 3000)
    }

    return handleClick
}

export default useHandleClick