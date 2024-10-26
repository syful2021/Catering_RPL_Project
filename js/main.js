function updateDateTime() {
    var now = new Date();
    var datetimeElement = document.getElementById('datetime');
    datetimeElement.innerHTML = now.toLocaleString();
  }
  
  // Call the function initially
  updateDateTime();
  
  // Update the date and time every second
  setInterval(updateDateTime, 1000);


  function myFunction() {
    alert("Data Submit Successfully");
  }



  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  //submit button

function handleSubmit(event) {
    event.preventDefault(); 
    alert("Form submitted successfully!");
    document.getElementById('myForm').reset();
}


