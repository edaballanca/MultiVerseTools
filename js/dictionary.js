

const urlD = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const resultD = document.getElementById("resultD");
const sound = document.getElementById("sound");
const btnD = document.getElementById("searchbtn-dictionary");
btnD.addEventListener("click", ()=>{
    let inpWord = document.getElementById("inpWord").value;
    fetch(`${urlD} ${inpWord}`)
    .then ((response) => response.json())
    .then ((data) => {
        console.log(data);
        resultD.innerHTML= `<div class="word">
        <h3> ${inpWord} </h3>
        <button onclick="playSound()">
        <i class="fa-solid fa-volume-high"></i>
        </button>
        </div>
        <div class ="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
        </div>
        <p class ="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
        <p class ="word-example">${data[0].meanings[0].definitions[0].example||""}</p>
         `
         sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
     })
         .catch(() => {
            resultD.innerHTML = `<h3 class="error">Couldnt find the word!</h3>`
         
    });
});
function playSound(){
    sound.play();
}