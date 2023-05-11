
const body = document.querySelector('body');
const modeButton = document.getElementById('dark-light-button');
const searchBar = document.getElementById('search');
const searchButton = document.getElementById('search-btn');
const searchSection = document.getElementById('search-bar')
const profilePic = document.getElementById('profile-picture');
const profilePic2 = document.getElementById('profile-picture2');
const userName = document.getElementById('user-name');
const joinedDate = document.getElementById('joined-date');
const loginName = document.getElementById('login-name');
const profileInfo = document.getElementById('profile-information')
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
const followersInfo = document.getElementById('followers-info')
const cityLogo = document.getElementById('location-logo');
const gitLogo = document.getElementById('git-logo');
const blogLogo = document.getElementById('blog-logo');
const twtLogo = document.getElementById('twt-logo');
const reposHeader = document.getElementById('repos');
const followersHeader = document.getElementById('followers');
const followingHeader = document.getElementById('following');
const errorAlert = document.getElementById('error')


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
    blog.textContent = data.blog
    if(data.twitter_username == null){
        twitter.textContent = 'Not Available'
    }
    if(data.location == null){
        city.textContent = 'Not Available'
    }
    if(data.company == null){
        git.textContent = 'Not Available'
    }
    if(data.blog == ""){
        blog.textContent = 'Not Available'
    }
    
    if(userToFind = data.login){
        errorAlert.style.display = 'none'
    }

    if(data.login == null){
        userName.replaceWith(loginName)
    }
}).catch((error) => {
    errorAlert.style.display = 'block'
    userInfo.style.display = 'none'
    console.log(error);
})
        

})

modeButton.addEventListener('click', ()=>{
    if(darkLigth.textContent == "Dark"){
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
    repos.style.color = 'white';
    followers.style.color = 'white';
    following.style.color = 'white';
    city.style.color = 'white';
    git.style.color = 'white';
    twitter.style.color = 'white';
    blog.style.color = 'white';
    userName.style.color = 'white';
    joinedDate.style.color = 'white';
    userBio.style.color = 'white';
    cityLogo.src = './img/location-dark.png';
    gitLogo.src = './img/git-dark.png';
    blogLogo.src = './img/blog-dark.png';
    twtLogo
    reposHeader.style.color = 'white';
    followersHeader.style.color = 'white';
    followingHeader.style.color = 'white';
    }
    
})
// modeButton.addEventListener('click', ()=> {
//     if(darkLigth.textContent == "Light")
//     body.style.backgroundColor = '#F6F8FF';
//     body.style.color = 'white';
//     modeIcon.src = './img/moon.png';
//     modeButton.style.color = 'white';
//     darkLigth.textContent = 'Dark';
//     searchSection.style.backgroundColor = '#1E2A47';
//     searchBar.style.color = '#2B3442;';
//     userInfo.style.backgroundColor = '#1E2A47';
//     userInfo.style.color = '#2B3442;';
//     followersInfo.style.backgroundColor = '#141D2F';
//     repos.style.color = '#2B3442;';
//     followers.style.color = '#2B3442;';
//     following.style.color = '#2B3442;';
//     city.style.color = 'white';
//     git.style.color = 'white';
//     twitter.style.color = 'white';
//     blog.style.color = 'white';
//     userName.style.color = '#2B3442;';
//     joinedDate.style.color = 'white';
//     userBio.style.color = 'white';
//     cityLogo.src = './img/location.png';
//     gitLogo.src = './img/git.svg';
//     blogLogo.src = './img/blog.svg';
//     twtLogo
//     reposHeader.style.color = 'white';
//     followersHeader.style.color = 'white';
//     followingHeader.style.color = 'white';
//     })