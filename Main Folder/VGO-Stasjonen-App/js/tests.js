// For å legge til en ny test putter man inn:      <button class="test-btn" onclick="updateAnswers(0);model.page='userTest';show();">Test 1</button> <br>
// For så å endre updateAnswer til den riktige kategorien i modelTest 

function showPageTestView() {
    innhold.innerHTML = `   
    <div class="main-view-css">
    <div id="omOssDiv" class="tests-style"> 
    <button class="test-btn" onclick="updateAnswers(0);model.page='userTest';show();">Test 1</button> <br>
    <button class="test-btn" onclick="updateAnswers(1);model.page='UserTest';show();">Test 2</button> <br>
    </div>
    </div>`;
}