// let changeColor = document.getElementById('changeColor');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function(element) {
//   let color = element.target.value;
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.executeScript(
//         //? executes javascript code?
//         tabs[0].id,
//         {code: 'document.body.style.backgroundColor = "' + color + '";'});
//   });
// };



// let inputText = document.getElementById
let formElem = document.getElementById("formElem")
formElem.onsubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData(formElem)

    let i = 1
    let inputArray = []
    while( formData.get("textBox" + i.toString())){
        // console.log(formData.get("textBox" + i.toString()))
        inputArray.push(formData.get("textBox" + i.toString()))
        i += 1
    }

    console.log(inputArray)
    // print(inputArray)

    // let response = await fetch('/article/formdata/post/user', {
    //   method: 'POST',
    //   body: new FormData(formElem)
    // });

    // let result = await response.json();

    // alert(result.message);
  };


const updateText = (id) =>{
    let inputText = document.getElementById("textBox" + toString(id))
    console.log(inputText)

}   