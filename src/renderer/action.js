export const RESERVE_APPLI = 'RESERVE_APPLI';
export const RESERVE_PAGE_HISTORY = 'RESERVE_PAGE_HISTORY';
export const TOGGLE_CHANGE_FLAG = 'TOGGLE_CHANGE_FLAG';
export const BACK_HISTORY = 'BACK_HISTORY';

export const reserveAppli = (name, appId, data) => {
    return {
        type: 'RESERVE_APPLI',
        name,
        appId,
        data
    }
};

export const reservePageHistory = (url, data, pageTitle) => {
    return {
        type: 'RESERVE_PAGE_HISTORY',
        url,
        data,
        pageTitle
    }
};

export const toggleChangeFlag = (num) => {
    return {
        type: 'TOGGLE_CHANGE_FLAG',
        num
    }
};

export const backHistory = (url, data) => {
    return {
        type: 'BACK_HISTORY',
        url,
        data
    }
};

