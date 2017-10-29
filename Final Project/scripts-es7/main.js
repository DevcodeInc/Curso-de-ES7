// UI elements
const userAvatar = document.querySelector('.user-avatar');
const userFullName = document.querySelector('.name');
const username = document.querySelector('.username');
const company = document.querySelector('.company');
const externalUrl = document.querySelector('.external-url');
const location = document.querySelector('.location');
const repositoriesContainer = document.querySelector('.repositories');

const searchInput = document.querySelector('.search');
const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', search.searchUser);
