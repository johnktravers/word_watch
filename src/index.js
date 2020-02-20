document.addEventListener("DOMContentLoaded", async function(event) {

  try {
    let response = await fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word');
    let topWordData = await response.json();
    let topWord = await Object.keys(topWordData.word)[0];

    document.querySelector('#word').innerHTML = topWord;
    document.querySelector('#count').innerHTML = topWordData.word[topWord];

  } catch(err) {
    console.log(err);
  }

});
async function postWord(word) {
  let url = 'https://wordwatch-api.herokuapp.com/api/v1/words';
  let data = { "word": { "value": word } };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  return await response.json();
}

