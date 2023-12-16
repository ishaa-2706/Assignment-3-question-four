function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
  
    return cleanStr === cleanStr.split('').reverse().join('');
  }
  
  function checkPalindrome() {
    const inputString = document.getElementById('inputString').value;
    const resultElement = document.getElementById('result');
  
    const isPal = isPalindrome(inputString);
  
    if (isPal) {
      resultElement.textContent = 'It is a palindrome!';
    } else {
      resultElement.textContent = 'It is not a palindrome.';
    }
  }
  
  document.getElementById('checkPalindrome').addEventListener('click', checkPalindrome);
  