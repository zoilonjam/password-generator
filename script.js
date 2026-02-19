var slider = document.getElementById("length");
var output = document.getElementById("lengthInput");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", function() {

  var length = parseInt(document.getElementById("length").value);

  var includeUppercase = document.getElementById("uppercase").checked;
  var includeLowercase = document.getElementById("lowercase").checked;
  var includeNumbers = document.getElementById("numbers").checked;
  var includeSymbols = document.getElementById("symbols").checked;

  var charset = "";

  if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (includeNumbers) charset += "0123456789";
  if (includeSymbols) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  if (charset === "") {
    alert("Please select at least one character type.");
    return;
  }

  var password = "";

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  document.getElementById("passwordOutput").value = password;

  // ✅ Strength Indicator
  var strengthText = document.getElementById("strengthText");
  var strength = checkStrength(password);

  strengthText.textContent = "Strength: " + strength;

  // optional color indicator
  if (strength === "Weak") strengthText.style.color = "red";
  else if (strength === "Medium") strengthText.style.color = "orange";
  else if (strength === "Strong") strengthText.style.color = "green";
  else strengthText.style.color = "darkblue";

  var password = "";

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  document.getElementById("passwordOutput").value = password;


});

  

function checkStrength(password) {
  let score = 0;

 
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (password.length >= 16) score++;


  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return "Weak";
  else if (score <= 4) return "Medium";
  else if (score <= 6) return "Strong";
  else return "Very Strong";
}

const copyBtn = document.getElementById("copyBtn");
const passwordOutput = document.getElementById("passwordOutput");

copyBtn.addEventListener("click", () => {
  if (passwordOutput.value.trim() === "") {
    alert("Generate a password first!");
    return;
  }

  navigator.clipboard.writeText(passwordOutput.value).then(() => {
    copyBtn.textContent = "Copied";
    setTimeout(() => {
      copyBtn.textContent = "📋";
    }, 1500);
  });
});
