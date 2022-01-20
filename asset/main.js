var btnElement = document.querySelectorAll('.colss');
var calculation = document.querySelector('.calculation')
var del = document.querySelector('#quynh-1')
var results = document.querySelector('.result')
var f;
var total = 0;
for (var i = 0; i < btnElement.length; ++i) {
    btnElement[i].onclick = function(e) {
        a = e.target.textContent
        calculation.textContent = calculation.textContent + a
        f = calculation.innerText
        f.split(" ").join("") * 1

    }
}

function dels() {
    console.log(f = f.substr(0, f.length - 1));
    calculation.textContent = f;

}

function delall() {
    console.log(f = f.substr(0, f.length - f.length));
    calculation.textContent = f;
    results.innerText = f
    total = 0;
}


function addbits(s) {

    s = s.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];

    while (s.length) {
        total += parseFloat(s.shift());
    }
    return total;
}

function result() {
    var string = f;
    a = addbits(string)
    console.log(a);
    results.innerText = a
}