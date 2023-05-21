let btn = document.getElementById('read')
let hidnTXT = document.getElementById('hidden')



btn.addEventListener('click', function () {


  hidnTXT.classList.toggle('show')

  if (hidnTXT.classList.contains("show")) {
    btn.innerHTML = "close";
  } else {
    btn.innerHTML = "read more...";
  };



});

