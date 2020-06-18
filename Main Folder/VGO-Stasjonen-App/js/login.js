function loginView(){
    innholdDiv.innerHTML=
 `<div id="formContainer">
        <input type="email" placeholder="Email" id="email">
        <input type="password" placeholder="Password" id="password">

        <button onclick="signIn()" id="signIn"> Sign In </button>
        
        
        
        </div>`
    }
    //<button onclick="signOut()" id="signOut"> Sign Out </button>
    //<button onclick="signUp()" id="signUp"> Sign Up </button>