// function showPageChatView() {
//     innhold.innerHTML = `   
//     <div class="main-view-css">
//     <div id="omOssDiv" class="grid-item-omOss-tests-profile-chat"> Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat Chat
//     </div>
//     </div>`;
// }

// TEST UNDER HERE 

function showPageChatView() {
    innhold.innerHTML = `   
    <div class="main-view-css">
    <div id="omOssDiv" class="grid-item-omOss-tests-profile-chat"><div id="chatContainerStyle">
	<aside>
		<header>
			<input type="text" placeholder="search">
		</header>
		<ul>
			<li>
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_04.jpg" alt="">
				<div>
					<h2>VGO-Stasjonen</h2>
					<h3>
						<span class="status green"></span>
						online
					</h3>
				</div>
			</li>
			<li>
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_08.jpg" alt="">
				<div>
					<h2>Tone</h2>
					<h3>
						<span class="status orange"></span>
						offline
					</h3>
				</div>
			</li>
			<li>
				<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_09.jpg" alt="">
				<div>
					<h2>Tine</h2>
					<h3>
						<span class="status green"></span>
						online
					</h3>
				</div>
			</li>
		</ul>
	</aside>
	<main>
		<header>
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt="">
			<div>
				<h2>Chat with VGO-Stasjonen</h2>
				<h3>already 1902 messages</h3>
			</div>
		</header>
		<ul id="chat">
			<li class="you">
				<div class="entete">
					<span class="status green"></span>
					<h2>VGO-Stasjonen</h2>
					<h3>10:05AM, Today</h3>
				</div>
				<div class="triangle"></div>
				<div class="message">
                        Hei, ser at du har prøvd å kontakte oss, er det noe vi kan hjelpe deg med?
				</div>
			</li>
			<li class="me">
				<div class="entete">
					<h3>10:10AM, Today</h3>
					<h2>Geir Eskil Terjesen</h2>
					<span class="status blue"></span>
				</div>
				<div class="triangle"></div>
				<div class="message">
					Så fint, jeg lurte på om dere kunne hjelpe søke meg inn på en fagskole? tenkte å starte med noe faglig påbygging! :)
				</div>
            </li>
            <li class="you">
				<div class="entete">
					<span class="status green"></span>
					<h2>VGO-Stasjonen</h2>
					<h3>10:12AM, Today</h3>
				</div>
				<div class="triangle"></div>
				<div class="message">
                    Ja det kan vi hjelpe deg med, er det greit om vi tar en prat på telefon på et eller annet tidspunkt ?
				</div>
			</li>
			<li class="me">
				<div class="entete">
					<h3>10:15AM, Today</h3>
					<h2>Geir Eskil Terjesen</h2>
					<span class="status blue"></span>
				</div>
				<div class="triangle"></div>
				<div class="message">
					Ja det passer idag ! :) tusen takk! 
				</div>
			</li>
		</ul>
		<footer>
			<textarea placeholder="Type your message"></textarea>
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png" alt="">
			<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png" alt="">
			<a href="#">Send</a>
		</footer>
	</main>
</div>

`;
}

