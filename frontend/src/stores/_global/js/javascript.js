  function openLink(pageURL) {
  if (anjam.ready) {
    //Banner is in app
    anjam.ExternalBrowser(pageURL);
  }
  else{
    //Banner is in web
    window.open(pageURL, "_blank");
  }
}
    
  function openTC() {
    document.getElementById("tc-popup").style.display = "block";
  }
  function closeTC() {
    document.getElementById("tc-popup").style.display = "none";
  }
