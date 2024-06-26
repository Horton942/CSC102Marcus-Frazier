 // This is a single line comment in Javascript
        /* This is a multiline comment in Javascript */

        // Let's create our first variable
        var firstname = "Marcus";
        console.log("the value of our first name variable is: " + firstname);

        // create the variable, set it to an empty string;
        // we will give it a value later
        var lastname = "";

        // the 3rd way to create a variable - this is a valid way of creationg a variable in Javascript
        // DO NOT USE THIS METHOD
        middlename = "Louis";



         //this is a javascript function definition; we need to use the keyword function
            //functions are awesome - you write code 1 time and can reuse it throughout your program
            //functions help organize code
            //function names should usually be some sort of action
            //always include the () - sometimes there will be variable(s) in between the () or they may be empty
            //always make sure there are a matching set of curly braces { }
            function runCalc(){ //do not mix ; and {}
                // whatever code is in between the curly braces belongs to this function
                // we will create a variable called num1, amd we are going to give it a default value of 0
                // javascript should assume this is a numeric datatype
                var num1 = 0;
                var num2 = 0;

                // we want to prompt the user dor a number, using the built in Javascript prompt function
                // the prompt function takes an argument (varuable) -  the text that will be shown to the user with the prompt
                // the prompt function returns the value that the user entered in
                // set the num1 variable equal to the value the user entered in

                // do while loop will run at least 1 time, and then can run as 
                // many time as needed; while loops may run 0 times
                do{
                    //make the user enter a number; this loop will run untul a number is entered
                    num1 = prompt("please enter number 1: "); // most lines of Javascript need a  ; at the end
                // if isNotaNumber is true (they entered text) or the user entered 0 the loop will keep running
                }while(isNaN(num1) || num1 == 0); // this ; is mandatory
                

                // get another number from the user and assign it to the num2 variable
                num1 = prompt("please enter number 2: "); // most lines of Javascript need a  ; at the end

                // let's add num1 and num2 tigether and store that value in the total variable
                // the built in javascript function parseInt makes sure that javascript treats the num1 and num2 variables as Integers (whole numbers)
                var total = parseInt(num1) + parseInt(num2);

                //call the built un Javascript function called alert - this will show a message to the user 
                // it should show our numbers and the total
                alert("The total of " + num1 + " plus " + num2 + " is " + total)
            }

            // we have created the function, now we need to call it so that the function code will run
            // the () are blank because we din't need to pass any information into this function
            runCalc();

            // the code here does not belong to the function



//creating a variable called age wuth a default value of 5
        // 1 equal sign is assignment, the variable on the left is assigned the value on the right
        var age = 5;

        // 2 egual signs mean check for equality, or does the value on the left side match the value on the right side
        // if statement, test a value, if the test results in true, run the if block of code
        if (age == 5){
            // this code will run if the value of the age variable is 5
            alert("age=" + age); 
        }
        else if(age == 6){
            //this code will run if the value if the age variable is 6
            alert("age=" + age);
        }
        // the else statement is a catch-all, it will run if non of the if/else if statements are true
        else{
            // this code will run if the value of the viable is anything other than 5 or 6
            alert("age was not 5 or 6");
        }



 // loops run code repeatedly
        // they are great for displaying data
        // there are 2 basic types of loops - for loop and while loop

        // We are going to create an ifinite loop bug
        var count = 0;

        // set up while loop, we want it to run until the counter hits 5
        while(count <= 5){

            // do whatever thing this loop needs
            console.log("count=" + count);

            // change the value of our counter
            // count++ is the same thing as count = count + 1
            // count-- is the same thing as count = count - 1
            count++;
        }

        // for loops are generally used when you know how many times you want the code to run
        // 1st part of our for loop is a counter variable, and we are setting it to a default value of 0
        // 2nd part the condition that the for loop will test on each run
        // the loop will run as long as this condition is true
        // 3rd oart us incrementing the counter variable each time the loop runs
        // i++ is the same thing as i = i + 1
        for (var i = 0; i < 5; i++){
            alert("i=" + i);
        }

        // counter varianle, set to a value of 0
        var counter = 0;
        // while loop will run intil the counter is equal to 5
        while(counter < 5){
            //display the value of counter un an alert
            alert("counter=" + counter);

            //increase the value of the counter by 1 everytime the while loop runs
            counter++;
        }

        // while loops are generally used when you do not know how many times you want the code to run


 // This function will validate the input that the user enteres in our form
 function validateForm(){
    // full name the user entered, stored in a variable call fullName
    var fullName = document.getElementById("fullname").value;
    // email the user entered, stored in a variable called email
    var email = document.getElementById("theEmail").value;
    // age the user entered, stored in a variable called age
    var age = document.getElementById("age").value;

    // Check to make sure the user has entered a name
    if (fullName.trim() == ""){
        // tell the user to enter a name
        alert("Please enter your name.");
        return false;
    }

     // Check to make sure the user has entered a name
     if (email.trim() == ""){
        // tell the user to enter a name
        alert("Please enter your email.");
        return false;
    }

     // Check to make sure the user has entered a age
     if (age.trim() == ""){
        // tell the user to enter a age
        alert("Please enter your age.");
        // don't allow the form to submit to the server
        return false;
    }

    // Check if age is a number; if the input is not a number, this if statement will be true
    if (isNaN(age)){
        // tell the user to enter a number
        alert("Please enter a valid age");
        // don't allow the form to submit to the server
        return false;
    }

    // allow the form to submit to the server
    return true;
}



