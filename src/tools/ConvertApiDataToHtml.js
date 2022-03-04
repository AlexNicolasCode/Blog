export const convertToHTMLData = (content) => {
    return content.map((item) => {
        const paramsFromApi = {
            "paragraph": getParagraphContent,
            "code": getCodeContent,
            "list": getListContent,
            "heading": getHeadingContent
        }
        const getContent = paramsFromApi[item.type]
        return getContent(item)
    })
}

const getHeadingContent = (item) => {
    return {
        type: `h${item.level}`,
        content: item.children[0].value
    }
}

const getListContent = (item) => {
    const content = item.children.map((item) => {
        const base = item.children[0].children[0];
        const hashUrl = base.url ? true : false;

        if (hashUrl) {
            return { name: base.children[0].value, url: base.url  }
        }
        
        return { name: base.value }
    })
    if (!content) return
    return { 
        type: 'ul', 
        content: content
    }
}

const getCodeContent = (item) => {
    return {
        type: 'code',
        content: item.code
    }
}

const getParagraphContent = (item) => {
    return {
        type: 'p',
        content: item.children[0].value
    }
}