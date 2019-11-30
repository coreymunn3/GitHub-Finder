class GitHub {
  constructor(){
    this.client_id = 'd389c9a6a6e218c6abe2';
    this.client_secret = '921f9f17d97ba9622aebed18757d670f7814c2cf';
    this.repos_count = 5;
    this.repos_sort = 'created:asc'
  }

  async getUser (user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();
    const repoData = await repoResponse.json();

    return {
      profileData: profileData,
      repoData: repoData
    }
  }
}