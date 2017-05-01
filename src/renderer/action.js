export const ADD_LIST = 'ADD_LIST';
export const RESERVE_PAGE_HISTORY = 'RESERVE_PAGE_HISTORY';
export const TOGGLE_CHANGE_FLAG = 'TOGGLE_CHANGE_FLAG';
export const RESERVE_APPLI = 'RESERVE_APPLI';
export const ADD_JSON = 'ADD_JSON';

export const addList = (data) => {
    return {
        type: 'ADD_LIST',
        data
    }
};

export const addJson = (json) => {
    return {
        type: 'ADD_JSON',
        json
    }
};

export const reservePageHistory = (name, url) => {
    return {
        type: 'RESERVE_PAGE_HISTORY',
        name,
        url
    }
};

export const toggleChangeFlag = (num) => {
    return {
        type: 'TOGGLE_CHANGE_FLAG',
        num
    }
};

export const reserveAppli = (name, appId, data) => {
    return {
        type: 'RESERVE_APPLI',
        name,
        appId,
        data
    }
};
