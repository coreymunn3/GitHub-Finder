class UI {
  constructor() {
    this.profile = document.getElementById('profile') // placeholder div for profile area
  }

  // display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  showRepos(reposArr){
    let output = '';
    reposArr.forEach(function(repo){
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>  
          <div class="col-md-6">
            <span class="badge badge-primary">Public Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Public Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
          </div>  
        </div>
      </div>
      `
    })
    // output to html
    document.getElementById('repos').innerHTML = output;
  }

  // show the alert for missing username
  showAlert(message, className) {
    // clear any remaining alerts to avoid alert duplication
    this.clearAlert()
    // create a div with classes and message inside
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));

    // grab elements for insert
    const container = document.querySelector('.searchContainer');
    const search = document.querySelector('.search');
    // insert the alert element
    container.insertBefore(div,search);
    // timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert()
    },1000);
  }

  // clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert')
    if (currentAlert){
      currentAlert.remove();
    }
  }

  // clear the profile
  clearProfile() {
    this.profile.innerHTML = '';
  }

}