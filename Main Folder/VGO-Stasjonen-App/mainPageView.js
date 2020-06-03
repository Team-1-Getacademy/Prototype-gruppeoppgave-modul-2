function showMainPage() {
    app.innerHTML =  `   <div class="grid-container">
        <div class="grid-item grid-item-1">

            <div class="headerdiv1">Du er logget inn som 'CSSKANDØ'</div>
            <img class="logo" src="vgo_logo.jpg" alt="VGO-stasjonen" onclick="retur()" >
            <div class="headerdiv2">${model.user.name}
        
            <button class="info" onclick="omOssMainPage()">Om oss</button>
            <button class="tests" onclick="testMainPage()">test deg selv</button>
            <button class="profile" onclick="profileMainPage()">profil</button>
            <button class="chat" onclick="chatMainPage()">chat</button>
        </div>
        <button onclick="model.page='terje';show();">Terjepage</button>
    </div> `;
}