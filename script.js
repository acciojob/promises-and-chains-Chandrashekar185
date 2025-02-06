
document.getElementById('votingForm').addEventListener('submit', function (event) {
  event.preventDefault(); 

  // Get input values
  const name = document.getElementById('name').value.trim();
  const age = parseInt(document.getElementById('age').value.trim());
  if (!name || isNaN(age)) {
    alert('Please enter valid details.');
    return; 
  }
  const ageCheckPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); 
  });
  ageCheckPromise
    .then((message) => {
      alert(message); 
    })
    .catch((message) => {
      alert(message);
    });
});