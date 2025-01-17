// Input validation and factorial calculation logic
function calculateFactorial(method) {
    const numberInput = document.getElementById("numberInput");
    const resultDiv = document.getElementById("result");
    const number = numberInput.value.trim(); // Get the input value
  
    // Check if the number is a valid positive integer
    if (!isValidInteger(number)) {
      resultDiv.textContent = "Please enter a valid positive integer.";
      return;
    }
  
    // Convert the number to an integer
    const num = parseInt(number, 10);
  
    let result;
    if (method === "iterative") {
      result = factorialIterative(num);
    } else if (method === "recursive") {
      result = factorialRecursive(num);
    }
  
    resultDiv.textContent = `The factorial of ${num} (${method} method) is: ${result}`;
  }
  
  // Check if the input is a valid positive integer
  function isValidInteger(input) {
    // Check if input is a non-negative integer and contains no decimal
    return /^[0-9]+$/.test(input) && parseInt(input) >= 0;
  }
  
  // Iterative method
  function factorialIterative(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  
  // Recursive method
  function factorialRecursive(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialRecursive(num - 1);
  }
  
  // Dark/Light mode toggle
  const themeToggle = document.getElementById("theme-toggle");
  
  themeToggle.addEventListener("click", () => {
    const body = document.body;
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      body.classList.add("dark");
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  });