function loginView(){
    headerDiv.style.display='none'
    innholdDiv.innerHTML=
 `<div class="loginbox" id="formContainer">
        <input type="email" placeholder="Email" id="email">
        <input type="password" placeholder="Password" id="password">

        <button onclick="signIn()" id="signIn"> Sign In </button>
        
        
        
        </div>`
    }

    function signIn(){
        headerDiv.style.display='block';
        showMainPageHeader();
        showMainPageContentView();
        

    }
    //<button onclick="signOut()" id="signOut"> Sign Out </button>
    //<button onclick="signUp()" id="signUp"> Sign Up </button>