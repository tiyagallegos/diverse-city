import { response } from 'express';
import tokenService from'./tokenService';

const BASE_URL = '/api/businesses/';





function getBussinesses() {
    return fetch(BASE_URL).then(response => response.json());
}

function createBusiness(data, id) {
    return fetch(BASE_URL + `/${id}` + "/businessSignUpForm", {
        method: 'POST',
        headers: {
            'Content-type': 'Application/json'
        }, 
        body: JSON.stringify(data)
    }).then(response => response.json());
}

function updateDoneBusiness(id) {
    return fetch(BASE_URL + "/" + id, {
        method: 'PUT'
    }).then(response => response.json());
}

function removeBusiness(id) {
    return fetch(BASE_URL + "/" + id + "/business", {
        method: 'DELETE'
    }).then(response => response.json());
}
function updateEscort(id, data) {
    console.log(data)
    return fetch(BASE_URL + "/" + id + "/business/edit", {
        method: 'PUT',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(data)
    }).then(response => response.json()); 
}

export default { getBussinesses, createBusiness, removeBusiness, updateDoneBusiness, updateEscort }