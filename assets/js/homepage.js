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
  console.log(repos);
  console.log(searchTerm);
};

userFormEl.addEventListener("submit", formSubmitHandler);
