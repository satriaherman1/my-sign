window.onload = function () {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("dashboardHeader").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/src/components/dashboard-header/index.html", true);
  xhttp.send();
};
