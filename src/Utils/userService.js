import tokenService from'./tokenService';

const BASE_URL = '/api/users/';



function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })
  .then(({token}) => tokenService.setToken(token));
}

function getUser() {
  return tokenService.getUserFromToken();
}

function getUserById(userId) {
    return fetch(BASE_URL + 'comment?UserId='+ userId ).then( response => response.json()).then(comments => console.log(comments))
  
}

function logOut() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Wrong Credentials!');
  })
  .then(({token}) => tokenService.setToken(token))

}

export default {
  signup,
  getUser,
  logOut,
  login,
  getUserById
};