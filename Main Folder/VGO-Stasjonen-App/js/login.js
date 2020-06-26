function loginView(){
    headerDiv.style.display='none'
    innholdDiv.innerHTML=
    `   <h2>Velkommen til VGO-Stasjonen</h2>
        <div class="loginbox" id="formContainer">Username:
        <input type="email" placeholder="Username" id="email">
        Password: <input type="password" placeholder="Password" id="password">

        <button id="signIn" onclick="signIn();model.page='main';show();"> Sign In </button>
        </div>`
    }

    function signIn(){
        headerDiv.style.display='block';
        showMainPageHeader();
        showMainPageContentView();
        

    }
    //<button onclick="signOut()" id="signOut"> Sign Out </button>
    //<button onclick="signUp()" id="signUp"> Sign Up </button>