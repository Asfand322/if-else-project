let dbEmail = "abc@abc.com"
        let dbPassword = "1234"

        let userInputEmail = prompt("enter email to login");
        let userInputPassword = prompt("enter password to login");

        if (userInputEmail === dbEmail) {
           
            if (userInputPassword === dbPassword) {
                alert("login successful");
            }else{
                alert("password incorrect");
            }
       
        }else{
            alert("your entered wrong email / this account does not exist");
        }