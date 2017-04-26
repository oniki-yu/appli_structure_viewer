export const ADD_LIST = 'ADD_LIST';
export const RESERVE_PAGE = 'RESERVE_PAGE';


export const addList = (data) => {
    return {
        type: 'ADD_LIST',
        data
    }
};

export const reservePage = (name, url) => {
    return {
        type: 'RESERVE_PAGE',
        name,
        url
    }
};