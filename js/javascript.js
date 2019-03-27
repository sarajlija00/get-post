function get() {
    let  xhttp = new XMLHttpRequest ();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById ('text').innerHTML = xhttp.responseText;
        }
    }
    xhttp.open ("get", "https://3d1pftib26.execute-api.eu-west-1.amazonaws.com/dev/hello", true);
    xhttp.send ();
}

function post () {

}