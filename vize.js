function validateForm(event) {
    event.preventDefault(); 
  
   
    var title = document.getElementById("title").value.trim();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var selCourse = document.getElementById("selCourse").value.trim();
    var selCity = document.getElementById("selCity").value.trim();
    var byPhone = document.getElementById("byPhone").value.trim();
    var hours = document.getElementById("hours").value.trim();
    var termsCheckbox = document.getElementById("termsCheckbox").checked;
  
 
    if (title === '' || name === '') {
      alert("Title and name are required");
      return;
      
    }
  

    var emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
  
  
    var phoneFormat = /^(\+?90|0)?\s?5\d{9}$/;
    if (!phone.match(phoneFormat)) {
      alert("Please enter a valid Turkish phone number");
      return;
    }
  
    if (selCourse === '' || selCity === '') {
      alert("Please select a course type and city");
      return;
    }

if (byPhone === '' || hours === '') {
    alert("Please select required options");
    return;
  }
  
 
  if (!termsCheckbox) {
    alert("Please agree to the terms and conditions");
    return;
  }
  

    var newWindow = window.open('about:blank', '_blank');
    if (newWindow) {
      newWindow.document.write('<h1>Form is submitted</h1>');
   
    
    }

    }
  

    fetch('https://run.mocky.io/v3/b42e7e29-1aa4-418b-bd8b-848ec4c16b4c')
    .then(response => response.json())
    .then(data => {
      
      const selectCity = document.getElementById('selCity');

      
      data.forEach(city => {
        const option = document.createElement('option');
        option.value = city.city; 
        option.textContent = city.city;
        selectCity.appendChild(option);
      });
    })


        fetch('https://run.mocky.io/v3/c40fe663-7f86-4363-9878-78fdec4a76b6')

        .then(response => response.json())
        .then(data => {
          
          const selectCourse = document.getElementById('selCourse');
  
    
          data.course_types.forEach(type_name => {
            const option = document.createElement('option');
            option.value = type_name.type_name;
            option.textContent = type_name.type_name;
            selectCourse.appendChild(option);
          });
        })
        
        


      




















