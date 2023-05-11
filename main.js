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
const errorAlert = document.getElementById('error');
const logo = document.getElementById('logo')


let userToFind;

searchButton.addEventListener('click', ()=>{
userToFind = searchBar.value
   
axios
.get(`https://api.github.com/users/${userToFind}`)
.then((response)=>{
    const data = response.data;
    console.log(data);
    userInfo.style.display = 'flex'
    loginName.textContent = data.login;
    profilePic.src = data.avatar_url;
    profilePic2.src = data.avatar_url;
    userName.textContent = data.name;

    const inputDateStr = data.created_at;
    const inputDate = new Date(inputDateStr);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const outputDateStr = `Joined ${inputDate.getDate()}
     ${monthNames[inputDate.getMonth()]} ${inputDate.getFullYear()}`;
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
    if(data.bio == null){
        userBio.textContent = "This user doesn't have a Bio"
    }
}).catch((error) => {
    userInfo.style.display = 'none'
    errorAlert.style.display = 'block'
    console.log(error);
    userBio.textContent = null;
    repos.textContent = null;
    followers.textContent = null;
    following.textContent = null;
    city.textContent = null;
    git.textContent = null;
    twitter.textContent = null;
    blog.textContent = null
})
        

})

isLight = true;
modeButton.addEventListener('click', ()=>{
    if(isLight == true){
        body.style.backgroundColor = '#141D2F';
        logo.style.color = 'white';
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
        isLight = false
    }
    else{
        body.style.backgroundColor = '#F6F8FF';
        logo.style.color = '#222731';
        modeIcon.src = './img/moon.png';
        modeButton.style.color = '#697C9A';
        darkLigth.textContent = 'Dark';
        searchSection.style.backgroundColor = '#FEFEFE';
        searchBar.style.color = '#2B3442';
        userInfo.style.backgroundColor = '#FEFEFE';
        userInfo.style.color = '#2B3442';
        followersInfo.style.backgroundColor = '#F6F8FF';
        repos.style.color = '#2B3442';
        followers.style.color = '#2B3442';
        following.style.color = '#2B3442';
        city.style.color = '#4B6A9B';
        git.style.color = '#4B6A9B';
        twitter.style.color = '#4B6A9B';
        blog.style.color = '#4B6A9B';
        userName.style.color = '#2B3442';
        joinedDate.style.color = '#697C9A';
        userBio.style.color = '#2B3442';
        cityLogo.src = './img/location.png';
        gitLogo.src = './img/git.svg';
        blogLogo.src = './img/blog.svg';
        twtLogo
        reposHeader.style.color = '#697C9A';
        followersHeader.style.color = '#697C9A';
        followingHeader.style.color = '#697C9A';
        isLight = true
    }
    })
