document.addEventListener("DOMContentLoaded", async function(event) {
  let topWord = await getTopWord();

  var button = document.querySelector('button');

  button.onclick = async function(event) {
    let input = document.querySelector('#input').value;
    let words = input.split(' ');

    words.forEach(async (word) => {
      if (onlyAlpha(word)) {
        await postWord(word);
      }
    })
  };

});


async function getTopWord() {
  try {
    let response = await fetch('https://wordwatch-api.herokuapp.com/api/v1/top_word');
    let topWordData = await response.json();
    let topWord = await Object.keys(topWordData.word)[0];

    document.querySelector('#word').innerHTML = topWord;
    document.querySelector('#count').innerHTML = topWordData.word[topWord];
    return topWord;

  } catch(err) {
    console.log(err);
  }
};

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

function onlyAlpha(word) {
  return /^[a-zA-Z]+$/.test(word);
}
