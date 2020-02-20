document.addEventListener("DOMContentLoaded", async function(event) {

  try {
    let response = await fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word');
    let topWordData = await response.json();
    let topWord = await Object.keys(topWordData.word)[0];

  } catch(err) {
    console.log(err);
  }

});
