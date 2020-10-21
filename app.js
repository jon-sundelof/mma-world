    function validateForm() {
        var x = document.forms["myForm"]["fname"].value;
        if (x == "") {
          alert("Name must be filled out");
          return false;
        }
        var x = document.forms["myForm"]["lname"].value;
        if (x == "") {
          alert("Last name must be filled out");
          return false;
        }
        var x = document.forms["myForm"]["email"].value;
        if (x == "") {
          alert("Email must be filled out");
          return false;
        }
        var x = document.forms["myForm"]["number"].value;
        if (x == "") {
          alert("Number must be filled out");
          return false;
        }
        
      }