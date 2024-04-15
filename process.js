document.addEventListener('keydown', save);
function save (e){
  if (e.keyCode == 13){
    localStorage.setItem("time", parseInt(document.getElementById("time").value)*1000);
  }
}