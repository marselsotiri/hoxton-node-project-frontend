import { getTokenFromStorage } from './helpers';

const url = 'http://localhost:4000';
const loginEndpoint = 'login';
const signUpEndpoint = 'sign-up';
const validationEndpoint = 'validate';
const usersEndpoint = ''
const statusEndpoint = ''

export function logIn(password: string, emailOrPhone: string, value: string) {
    return fetch(`${url}/${loginEndpoint}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            password,
            [emailOrPhone]: value,
        }),
    }).then((res) => res.json());
}

export function signUp(
    password: string,
    email: string,
    name: string,
    phone: string,
    photo: string
) {
    return fetch(`${url}/${signUpEndpoint}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            password,
            email,
            fullName: name,
            phoneNr:phone,
            profilePhoto:photo,
            userStatus: '',
        }),
    }).then((res) => res.json());
}

export function validate() {
    return fetch(`${url}/${validationEndpoint}`, {
        method: 'GET',
        headers: {
            authorization: getTokenFromStorage(),
        },
    }).then(res=>res.json())
}


export function getAllUsers(){
    return fetch(`${url}/${usersEndpoint}`).then(res=>res.json())
}

export function updateStatus(newStatus:string){
    return fetch(`${url}/${statusEndpoint}`,{
        method:"PATCH",
        headers:{
            "Content-type":'application/json'
        },
        body:JSON.stringify({userStatus:newStatus})
    }).then(res=>res.json())
}