
var app = document.getElementById('app');
show();

function show() {

const mainpageHeader =
    `   <div class="grid-container">
                <div class="grid-item grid-item-1">
        
                    <div class="headerdiv1">Du er logget inn som 'CSSKANDØ'</div>
                    <img class="logo" src="vgo_logo.jpg" alt="VGO-stasjonen" onclick="retur()" >
                    <div class="headerdiv2">
                
                    <button class="info" onclick="omOssMainPage()">Om oss</button>
                    <button class="tests" onclick="testMainPage()">test deg selv</button>
                    <button class="profile" onclick="profileMainPage()">profil</button>
                    <button class="chat" onclick="chatMainPage()">chat</button>
                </div>
        </div> `;

let mainpageContent = 
    
        `<div class="grid-item grid-item-2">infobox/feed, her kan det    legges til artikler eller annet nyttig</div>
         <div id="scoreboard" class="grid-item grid-item-3">Scoreboard
             </div>
         <div id="planbox" class="grid-item grid-item-4">ukentlig plan
         </div>`;



    app.innerHTML = mainpageHeader + mainpageContent;

}

function omOssMainPage()    {

    let omOssHtml = `   
            <div>Here is some amazing stuff about usHere is some amazing stuff about usHere is some amazing stuff about usHere is some amazing stuff about usHere is some amazing stuff about usHere is some amazing stuff about usHere is some amazing stuff about usHere is some amazing stuff about usHere is some amazing stuff about usHere is some amazing stuff about us</div>   `

                app.innerHTML = mainpageHeader + omOssHtml;
            }

            function testMainPage() {

            }

            function profileMainPage()  {

            }

            function chatMainPage() {

            }







        //modell



        //view
        //Vi bruker objekter fra modell til å lage noe visuelt
        var app = document.getElementById('app');
        show();

        function show(){
            // Hvis dette er trykket på, vis dette vinduet { kan man putte js inn her?}
            // Men hvis dette er trykket på, kjør dette {}
        }

        //controller

