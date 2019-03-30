function get() {
    let  xhttp = new XMLHttpRequest ();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById ('text').innerHTML = xhttp.responseText;
        }
    }
    xhttp.open ("GET", 'https://3d1pftib26.execute-api.eu-west-1.amazonaws.com/dev/hello', true);
    xhttp.send ();
}

function post () {
    let xhttp = new XMLHttpRequest ();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status ==200) {
            let obj = JSON.parse (xhttp.responseText);
            document.getElementById('result').innerHTML = obj.message;
        }
    };
    xhttp.open("POST",'https://3d1pftib26.execute-api.eu-west-1.amazonaws.com/dev/hello', true);
    xhttp.setRequestHeader ("Content-Type", "application/json;charset=UTF-8");

    let name = {name: document.getElementById('name').value};
    xhttp.send(JSON.stringify(name));

}