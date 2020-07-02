
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
        <br>
            <button class="adminLoginBtn" onclick="location.href = 'adminIndex.html'">Admin Login</button>
        <ul id="users"></ul>

    </section>
` 
        }
    
        function signIn(){
            headerDiv.style.display='block';
            showMainPageHeader();
            showMainPageContentView();
            showMainPageFooter();
        }
