function useHandleClick(node: any) {
    const text = node.children[0].children[0].value

    function handleClick() {
        navigator.clipboard.writeText(text)
    }

    return handleClick
}

export default useHandleClick