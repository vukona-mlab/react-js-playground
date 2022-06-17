const saveListAction = (list) => {
    return {
        type: 'SAVE_LIST',
        payload: list
    }
}

const getListAction = () => {
    return {
        type: 'GET_LIST'
    }
}

export { saveListAction, getListAction }