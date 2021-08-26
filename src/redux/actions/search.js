export const SET_SEARCH = 'SET_SEARCH'

// create todo
export function actionSetSearch(text) {
    return {
        type: SET_SEARCH,
        text
    }
}