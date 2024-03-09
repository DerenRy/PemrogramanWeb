function hitungFibonacci() {
  var inputNumber = document.getElementById('inputNumber').value;

  if (inputNumber === "" || isNaN(inputNumber) || inputNumber < 0) {
      alert("Masukkan nilai n yang valid (bilangan bulat tidak negatif).");
      return;
  }

  var hasil = fibonacciIteratif(parseInt(inputNumber));
  var outputElement = document.getElementById('output');
  outputElement.innerHTML = '<p>Hasil deret Fibonacci ke-' + inputNumber + ': ' + hasil + '</p>';
}

function fibonacciIteratif(n) {
  var a = 0, b = 1, temp;

  for (var i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
  }

  return b;
}