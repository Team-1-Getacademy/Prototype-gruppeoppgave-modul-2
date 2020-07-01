function showMainPageHeader() {
    headerDiv.innerHTML =  `   <div class="grid-container">
        <div class="grid-item grid-item-1">

            <div class="headerdiv1">${model.user.name}</div>
            <img class="logo" src="vgo_logo.jpg" alt="VGO-stasjonen" onclick="model.page='main';show()" >
            <div class="headerdiv2">
        
            <button class="info" onclick="model.page='omOss';show();">Om oss</button>
            <button class="tests" onclick="model.page='test';show();">test deg selv</button>
            <button class="profile" onclick="model.page='profil';show();">profil</button>
            <button class="chat" onclick="model.page='chat';show();">chat</button>
            <button class="pris" onclick="model.page='Priser';show();">Pris</button>
        </div>
        
        
        </div> `;
}