"use strict";

function watchUserInput() {
    $("#dog-breed-form").submit(e => {
      event.preventDefault();
      let breedInput = $("#breed-dog").val();
      //Pass the breed dog to getDogImage
      getDogImage(breedInput);
    });
  }

//Pass breedInput, which represents a breed as an argument
function getDogImage(breedInput) {
      fetch (`https://dog.ceo/api/breed/${breedInput}/images/random`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //404 Error
  if (responseJson.code === 404){
      alert('Sorry, that breed could not be found, please try another!')
  }
  //replace the existing image with the new one
  else {
    $('.results-img').replaceWith(
        `<img src="${responseJson.message}" class="results-img">`
      )
        //display the results section
      $('.results').removeClass('hidden');
    } 
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchUserInput();
});

