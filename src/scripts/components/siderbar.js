window.addEventListener("load", function () {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("sidebar").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/src/components/sidebar/index.html", false);
  xhttp.send();
});

function toggleNavbar() {
  console.log("test");
  const navbarList = document.querySelector(".navbar-list");
  navbarList.classList.toggle("open");
}
