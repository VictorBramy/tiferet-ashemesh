import { CHANGE_ROUTE_FIELD, CHANGE_SCROLL_ID, CHANGE_MAKECALL_FIELD, CHANGE_TYPE, CHANGE_FULLNAME,
         CHANGE_CITY, CHANGE_ADDRESS, CHANGE_PHONENUMBER, CHANGE_EMAIL, CHANGE_MSG} from './constants';

const routeState = {
    route: 'landingpage'
}

export const changeRoute = (state=routeState, action={}) => {
    switch (action.type) { 
        case CHANGE_ROUTE_FIELD:
            return Object.assign({}, state, {route: action.payload});
        default:
            return state;
    }
} 

const scrollState = {
    scrollId: ''
}

export const changeScrollId = (state=scrollState, action={}) => {
    switch (action.type) { 
        case CHANGE_SCROLL_ID:
            return Object.assign({}, state, {scrollId: action.payload});
        default:
            return state;
    }
} 

const makeCallState = {
    makeCall: ''
}

export const changeMakeCall = (state=makeCallState, action={}) => {
    switch (action.type) { 
        case CHANGE_MAKECALL_FIELD:
            return Object.assign({}, state, {makeCall: action.payload});
        default:
            return state;
    }
} 

const contactFormState = {
    type: '',
    fullName: '',
    city: '',
    address: '',
    phoneNumber: '',
    email: '',
    msg: ''
}

export const makeContactForm = (state=contactFormState, action={}) => {
    switch (action.type) { 
        case CHANGE_TYPE:
            return Object.assign({}, state, {type: action.payload});
        case CHANGE_FULLNAME:
            return Object.assign({}, state, {fullName: action.payload});
        case CHANGE_CITY:
            return Object.assign({}, state, {city: action.payload});
        case CHANGE_ADDRESS:
            return Object.assign({}, state, {address: action.payload});
        case CHANGE_PHONENUMBER:
            return Object.assign({}, state, {phoneNumber: action.payload});
        case CHANGE_EMAIL:
            return Object.assign({}, state, {email: action.payload});
        case CHANGE_MSG:
            return Object.assign({}, state, {msg: action.payload});    
        default:
            return state;
    }
}