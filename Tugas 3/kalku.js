const calculate = () => {
  const operand1 = parseFloat(document.getElementById('operand1').value);
  const operand2 = parseFloat(document.getElementById('operand2').value);
  const operator = document.getElementById('operator').value;

  let result;

  switch (operator) {
      case '+':
          result = tambah(operand1, operand2);
          break;
      case '-':
          result = kurang(operand1, operand2);
          break;
      case '*':
          result = kali(operand1, operand2);
          break;
      case '/':
          result = bagi(operand1, operand2);
          break;
      case '%':
          result = modulus(operand1, operand2);
          break;
      default:
          result = 'Operasi tidak valid';
  }

  const outputElement = document.getElementById('output');
  outputElement.innerHTML = `<p>Hasil: ${result}</p>`;
};

const tambah = (a, b) => a + b;
const kurang = (a, b) => a - b;
const kali = (a, b) => a * b;
const bagi = (a, b) => (b !== 0) ? a / b : 'Tidak bisa dibagi dengan 0';
const modulus = (a, b) => (b !== 0) ? a % b : 'Tidak bisa modulus dengan 0';