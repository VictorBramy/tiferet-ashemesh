import { CHANGE_ROUTE_FIELD,
         CHANGE_SCROLL_ID,
         CHANGE_MAKECALL_FIELD, CHANGE_TYPE, CHANGE_FULLNAME,
         CHANGE_CITY, CHANGE_ADDRESS, CHANGE_PHONENUMBER, CHANGE_EMAIL, CHANGE_MSG } from './constants';    

export const setRouteField = (text) => ({
    type: CHANGE_ROUTE_FIELD,
    payload: text
})

export const setScrollId = (text) => ({
    type: CHANGE_SCROLL_ID,
    payload: text
})

export const setMakeCallField = (text) => ({
    type: CHANGE_MAKECALL_FIELD,
    payload: text
})

export const setTypeField = (text) => ({
    type: CHANGE_TYPE,
    payload: text
})
export const setFullNameField = (text) => ({
    type: CHANGE_FULLNAME,
    payload: text
})
export const setCityField = (text) => ({
    type: CHANGE_CITY,
    payload: text
})
export const setAddressField = (text) => ({
    type: CHANGE_ADDRESS,
    payload: text
})
export const setPhoneNumberField = (text) => ({
    type: CHANGE_PHONENUMBER,
    payload: text
})
export const setEmailField = (text) => ({
    type: CHANGE_EMAIL,
    payload: text
})
export const setMsgField = (text) => ({
    type: CHANGE_MSG,
    payload: text
})
