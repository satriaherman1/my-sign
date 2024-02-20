window.onload = function () {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("registerHeader").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/src/components/register-header/index.html", true);
  xhttp.send();
};
