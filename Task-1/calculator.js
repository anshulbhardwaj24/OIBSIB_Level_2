let result = "";
window.addEventListener('load', function() {
    document.getElementById('result').focus();
});


function addToResult(value) {
	result += value;
	document.getElementById("result").value = result;
}

function clearResult() {
	result = "";
	document.getElementById("result").value = result;
}

function calculate() {
	result = eval(document.getElementById("result").value);
	document.getElementById("result").value = result;
}

function removeLast() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.slice(0, -1);
  }