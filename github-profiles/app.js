const API_URL = 'https://api.github.com/users/';

const searchInput = document.querySelector('[data-search]');
const profiles = document.querySelector('[data-profiles]');


async function getProfile() {
    let searchQuery = searchInput.value.toLowerCase();
    fetch(`${API_URL}${searchQuery}`)
        .then(response => response.json())
        .then(profile => {
            console.log(profile)
            if(profile.message === "Not Found") {
                profiles.innerHTML = ``;
                return;
            }
            profiles.innerHTML = displayProfile(profile);
        })
        .catch(error => {
            console.error(error);
        });
}

function displayProfile(profile) {
    return `<div class="profile">
    <img src="${profile.avatar_url}" alt="">
    <div class="profile-details">
        <h2>${profile.name}</h2>
        <div class="nick_and_location">
            <span class="nick">${profile.login}</span>
            <span class="material-symbols-outlined">
                location_on
            </span><span>${profile.location}</span>
        </div>
        <a class="visit-btn" href="${profile.html_url}" target="_blank">VISIT</a>
    </div>
</div>
<div class="profile-2"></div>
<div class="profile-3"></div>`;
}


searchInput.addEventListener('input', getProfile);