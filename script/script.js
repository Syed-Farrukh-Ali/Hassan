$(document).ready(function() {

    $("#basic-form").validate({
      rules: {
        fname : {
          required: true,
          minlength: 3
        },
        lname: {
          required: true,
          minlength: 3
        },
        username: {
          required: true,
          minlength: 3
        },
        pass: {
            required: true,
            minlength: 5
        },
        conpass: {
            required: true,
            minlength: 5,
            equalTo: "#pass"
        },
        gender: {
           required: true
        },
        country: {
          required: true,
          minlength: 3
        },
        state : {
          required: true,
          minlength: 3
        },
        city : {
          required: true,
          minlength: 3
        },
        age : {
          required: true,
        },
        date : {
          required: true,
        },
        agree : {
          required: true,
        },
        code : {
          required: true,
          minlength: 4
        },
        phone: {
          required: true,
          minlength: 11,
          maxlength: 11
        },
        email: {
          required: true,
          email: true
        },
      },
      messages : {
        name: {
          minlength: "Name should be at least 3 characters"
        },
        country: {
          minlength: "Country should be at least 3 characters"
        },
        state: {
          minlength: "State should be at least 3 characters"
        },
        city: {
          minlength: "City should be at least 3 characters"
        },
        code: {
          minlength: "Code should be at least 4 characters"
        },
        phone: {
          minlength: "Phone should be at least 11 characters",
          maxlength: "Phone should be equal to 11 characters"
        },
        email: {
          email: "The email should be in the format: test@gmail.com"
        },
        pass: {
          minlength: "Password should be at least 5 characters"
        },

      }
    });

  });
