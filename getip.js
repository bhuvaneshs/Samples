function load() {
    var url = "https://api.ipify.org/?format=json";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var result = this.responseText;
        var json = JSON.parse(result);
        document.getElementById("value").innerHTML = json.ip;
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
