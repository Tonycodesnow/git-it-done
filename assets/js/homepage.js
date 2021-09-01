// variables to store a reference to the <form> element 
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var repoContainerEl = document.querySelector("#repos-contianer");
var repoSearchTerm = document.querySelector("repo-search-term");

var getUserRepos = function(user) {
  // format the github api url
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  // make a request to the url 
  fetch(apiUrl).then(function(response) {
        
    response.json().then(function(data) {
        displayRepos(data, user);
    });
  });
}
console.log("outside");

// removed getUserRepos(); 6.2.4

// to be exectuted upon a form submission browser event
var formSubmitHandler = function(event) {
  event.preventDefault();
  // get value from input element
  var username = nameInputEl.value.trim();

  if (username) {
    getUserRepos(username);
    nameInputEl.value = "";
  } else {
    alert("Please enter a gitHub username");
  }
};

var displayRepos = function(repos, searchTerm) {
  repoContainerEl.textContent = "";
  repoSearchTerm.textContent = searchTerm;
  for (var i = 0; i <repos.length; i++) {
    // format repo name 
    var repoName = repos[i].owner.login + "/" + repos[i].name;

    // create a contianer foe each repo
    var repoEl = document. createElement("div");
    repoEl.classList = "list-item flex-row justify-space-between align-center";

    // create a span element to hold repository name
    var title = document.createElement("span");
    title.textContent = repoName;

    // append to contianer
    repoEl.appendChild(titleEl);

    // append container to the dom
    repoContainerEl.appendChild(repoEl);

  }
};

userFormEl.addEventListener("submit", formSubmitHandler);
