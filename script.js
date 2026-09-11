

document.addEventListener("DOMContentLoaded", function () {


   
    // 1. NAVIGATION
   

    let navLinks = document.querySelectorAll(".navlist a");

    for (let i = 0; i < navLinks.length; i++) {

        navLinks[i].addEventListener("click", function (event) {

            event.preventDefault();

            let targetId = navLinks[i].getAttribute("href");

            let targetSection = document.querySelector(targetId);

            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }


  
    // 2. MOBILE NAVIGATION
   

    let mobileLinks = document.querySelectorAll("#navlist a");

    let mobileSections = [
        "home",
        "services",
        "about",
        "testimonials",
        "contactus"
    ];

    for (let i = 0; i < mobileLinks.length; i++) {

        mobileLinks[i].addEventListener("click", function (event) {

            event.preventDefault();

            let section = document.getElementById(
                mobileSections[i]
            );

            if (section) {

                section.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }


   
    // 3. LEARNING PLAN FORM
   
    let learningForm =
        document.querySelector(".coding-form form");

    let nameInput =
        document.getElementById("name");

    let emailInput =
        document.getElementById("Email");

    let areaInput =
        document.getElementById("area");

    let goalSelect =
        document.querySelector(".coding-form select");

    let learningButton =
        document.querySelector(".coding-form button");


    learningButton.addEventListener("click", function () {

        let name = nameInput.value.trim();

        let email = emailInput.value.trim();

        let area = areaInput.value.trim();

        let goal = goalSelect.value;


        // Check name

        if (name === "") {

            alert("Please enter your name.");

            return;
        }


        // Check email

        if (email === "") {

            alert("Please enter your email.");

            return;
        }


        if (!email.includes("@") || !email.includes(".")) {

            alert("Please enter a valid email address.");

            return;
        }


        // Check learning area

        if (area === "") {

            alert("Please enter your learning area.");

            return;
        }


        // Check learning goal

        if (goal === "Choose an option") {

            alert("Please choose your learning goal.");

            return;
        }


        // Successful submission

        alert(
            "Thank you " +
            name +
            "! Your learning plan has been submitted."
        );


        learningForm.reset();

    });


   
    // 4. INQUIRY FORM
    

    let inquiryForm =
        document.querySelector(".Inquire form");

    let inquiryInputs =
        inquiryForm.querySelectorAll("input");

    let message =
        inquiryForm.querySelector("textarea");

    let sendButton =
        inquiryForm.querySelector("button");


    sendButton.addEventListener("click", function () {

        let name =
            inquiryInputs[0].value.trim();

        let phone =
            inquiryInputs[1].value.trim();

        let email =
            inquiryInputs[2].value.trim();

        let subject =
            inquiryInputs[3].value.trim();

        let messageText =
            message.value.trim();


        // Check name

        if (name === "") {

            alert("Please enter your name.");

            return;
        }


        // Check phone

        if (phone === "") {

            alert("Please enter your phone number.");

            return;
        }


        // Check email

        if (email === "") {

            alert("Please enter your email.");

            return;
        }


        if (!email.includes("@") || !email.includes(".")) {

            alert("Please enter a valid email address.");

            return;
        }


        // Check subject

        if (subject === "") {

            alert("Please enter a subject.");

            return;
        }


        // Check message

        if (
            messageText === "" ||
            messageText === "Your Message"
        ) {

            alert("Please enter your message.");

            return;
        }


        // Successful submission

        alert(
            "Thank you " +
            name +
            "! Your inquiry has been submitted."
        );


        inquiryForm.reset();

    });


    
    // 5. SERVICE CARDS
  

    let serviceItems =
        document.querySelectorAll(".service-item");


    for (let i = 0; i < serviceItems.length; i++) {

        serviceItems[i].addEventListener("click", function () {

            let serviceName =
                serviceItems[i].querySelector("h4").innerText;

            alert(
                "You selected: " + serviceName
            );

        });

    }


  
    // 6. DISCOVER MORE BUTTON
   

    let discoverButton =
        document.querySelector(".btn1 a");


    discoverButton.addEventListener("click", function (event) {

        event.preventDefault();

        let aboutSection =
            document.getElementById("about");

        aboutSection.scrollIntoView({
            behavior: "smooth"
        });

    });


    
    // 7. CONTACT US BUTTON
   

    let contactButton =
        document.querySelector(".btn2 a");


    contactButton.addEventListener("click", function (event) {

        event.preventDefault();

        let contactSection =
            document.getElementById("contactus");

        contactSection.scrollIntoView({
            behavior: "smooth"
        });

    });


});