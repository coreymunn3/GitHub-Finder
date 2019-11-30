// Initialize GitHub
const github = new GitHub();

// Initialize UI
const ui = new UI();

// UI Elements
const searchUser = document.getElementById('searchUser');

// Search Input Event
searchUser.addEventListener('keyup', (e) => {
  // get input text
  const userText = e.target.value;

  if (userText !== '') {
    // console.log(userText);
    // get user profiles
    github.getUser(userText)
      .then(data => {
        // console.log(data.profileData);
        // console.log(data.repoData);
        if(data.profileData.message === 'Not Found'){
          // show alert (UI)
          ui.showAlert('User Not Found','alert alert-danger');
        } else {
          // show profile (UI)
          ui.showProfile(data.profileData);
          ui.showRepos(data.repoData);
        }
      })
  } else {
    // clear profile (UI)
    ui.clearProfile();
  }
})