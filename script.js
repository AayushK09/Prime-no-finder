if (typeof Worker === "undefined") {
    alert("Your browser does not support Web Workers.");
  }
  
  let numberSaved = false;
  
  const saveNumber = () => {
    let number = parseInt(document.getElementById("numberInput").value, 10);
    if (isNaN(number)) {
      alert("Please enter a valid number.");
      return false;
    }
    if (number >= 100) {
      alert("Please enter a number less than 100.");
      return false;
    }
    localStorage.setItem("number", number);
    numberSaved = true;
    alert(` ${number} saved to Web Storage.`);
    return true;
  };
  
  document.getElementById("saveNumber").addEventListener("click", () => {
    saveNumber();
  });
  
  let worker;
  document.getElementById("startProcess").addEventListener("click", () => {
    if (!numberSaved) {
      alert("Please save a number first to start.");
      return;
    }
    worker = new Worker("worker.js");
    worker.postMessage(localStorage.getItem("number"));
    worker.onmessage = function (event) {
    document.getElementById("status").innerText = event.data
    };
  });
  
  document.getElementById("endProcess").addEventListener("click", () => {
    if (worker) {
      worker.terminate();
      document.getElementById("status").innerText = "Process terminated by user.";
      document.getElementById("numberInput").value = "";
      numberSaved = false;
    }
  });
  
  document.getElementById("numberInput").addEventListener("input", () => {
    numberSaved = false;
  });
  