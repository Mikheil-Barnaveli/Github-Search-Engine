
const body = document.querySelector('body');
const modeButton = document.getElementById('dark-light-button');
const searchBar = document.getElementById('search');
const searchButton = document.getElementById('search-btn');
const profilePic = document.getElementById('profile-picture');
const profilePic2 = document.getElementById('profile-picture2');
const userName = document.getElementById('user-name');
const joinedDate = document.getElementById('joined-date');
const loginName = document.getElementById('login-name');
const userBio = document.getElementById('user-bio');
const repos = document.getElementById('repos-number');
const followers = document.getElementById('followers-number');
const following = document.getElementById('following-number');
const city = document.getElementById('location');
const git = document.getElementById('git');
const twitter = document.getElementById('twitter');
const blog = document.getElementById('blog');
const userInfo = document.getElementById('user-info')
const modeIcon = document.getElementById('mode-img')
const darkLigth = document.getElementById('dark-light')
const searchSection = document.getElementById('search-bar')
const followersInfo = document.getElementById('followers-info')
let userToFind;

searchButton.addEventListener('click', ()=>{
   userToFind = searchBar.value
   console.log(userToFind);
   userInfo.style.display = 'flex'

axios
.get(`https://api.github.com/users/${userToFind}`)
.then((response)=>{
    const data = response.data;
    console.log(data);
    loginName.textContent = data.login;
    profilePic.src = data.avatar_url;
    profilePic2.src = data.avatar_url;
    userName.textContent = data.name;

const inputDateStr = data.created_at;
const inputDate = new Date(inputDateStr);
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
const outputDateStr = `Joined ${inputDate.getDate()} ${monthNames[inputDate.getMonth()]} ${inputDate.getFullYear()}`;
console.log(outputDateStr);
joinedDate.textContent = outputDateStr;


    userBio.textContent = data.bio;
    repos.textContent = data.public_repos;
    followers.textContent = data.followers;
    following.textContent = data.following;
    city.textContent = data.location;
    git.textContent = data.company;
    twitter.textContent = data.twitter_username;
    if(data.twitter_username == null){
        twitter.textContent = 'Not Available'
    }
    blog.textContent = data.blog
})
        

})

modeButton.addEventListener('click', ()=>{
    body.style.backgroundColor = '#141D2F';
    body.style.color = 'white';
    modeIcon.src = './img/sun.svg';
    modeButton.style.color = 'white';
    darkLigth.textContent = 'Light';
    searchSection.style.backgroundColor = '#1E2A47';
    searchBar.style.color = 'white';
    userInfo.style.backgroundColor = '#1E2A47';
    userInfo.style.color = 'white';
    followersInfo.style.backgroundColor = '#141D2F';
})