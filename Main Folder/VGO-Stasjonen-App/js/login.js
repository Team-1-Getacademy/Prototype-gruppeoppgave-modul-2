// function loginView(){
//     headerDiv.style.display='none'
//     innholdDiv.innerHTML=
//     `   <h2>Velkommen til VGO-Stasjonen</h2>
//         <div class="loginbox" id="formContainer">Username:
//         <input type="email" placeholder="Username" id="email">
//         Password: <input type="password" placeholder="Password" id="password">

//         <button id="signIn" onclick="signIn();model.page='main';show();"> Sign In </button>
//         </div>`
//     }

//     function signIn(){
//         headerDiv.style.display='block';
//         showMainPageHeader();
//         showMainPageContentView();
        

//     }
    //<button onclick="signOut()" id="signOut"> Sign Out </button>
    //<button onclick="signUp()" id="signUp"> Sign Up </button>

    function loginView(){
        headerDiv.style.display='none'
        innholdDiv.innerHTML=
        `<section class="login-container">
        <form id="my-form">
            <h1>VGO-Stasjonen</h1>
            <h3>Login to continue</h3>
                <div class="msg"></div>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name">
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="text" id="email">
                </div>
            <input type="submit" class="btn" value="Submit" onclick="signIn();model.page='main';show();">
        </form>
    
        <ul id="users"></ul>

    </section>
` 
        }
    
        function signIn(){
            headerDiv.style.display='block';
            showMainPageHeader();
            showMainPageContentView();
            
        }
