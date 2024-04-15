var images = ["aventador", "corvette", "ferrari", "svj", "the-devel-sixteen", "mustang"];
var count = Math.floor((Math.random() * images.length));
var frequency = 5000;
if (localStorage.getItem("time") !== undefined) frequency = localStorage.getItem("time");
var storage = [[],[],[],[],[],[],[],[],[],[],[]];
var newcount = 0;
setInterval(changeImage, frequency);

function changeImage(){
  let background = document.getElementById("background");
  console.log(count);
  background.style.backgroundImage = "url('images/"+images[count]+".jpg')";
  count++;
  if (count >= images.length) {count = 0;}
  //Uncomment for shuffle play
  //count = Math.floor((Math.random() * images.length));
}

function settings(){
  window.open("settings.html", "_blank", "left=0px,top=0px,width=700,height=500");
}

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("settings").onclick = settings;
  chrome.history.search({text: '', maxResults: 11}, function(data) {
    data.forEach(function(page) {
        storage[newcount][0] = page.title;
        storage[newcount][1] = page.url;
        newcount++;
    });
    updateHistory();
});
changeImage();
});

function updateHistory(){
  for (var i=1;i<5;i++){
    let foo = document.getElementById("recently");
    let element = document.createElement("a");
    element.classList.add("linkB");
    element.href = storage[i][1];
    element.textContent = storage[i][0];
    foo.appendChild(element);
    foo.appendChild(document.createElement("br"));
  }
}

