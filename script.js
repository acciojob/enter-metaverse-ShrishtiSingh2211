//your JS code here. If required.
const status = document.getElementById("status");
const enterBtn = document.getElementById("enterBtn");
enterBtn.addEventListener("click", () => {
    status.outerHTML = "<h1 id='status'>Entered Metaverse</h1>";
});