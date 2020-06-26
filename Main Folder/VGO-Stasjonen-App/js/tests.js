function showPageTestView() {
    innhold.innerHTML = `   
    <div class="main-view-css">
    <div id="omOssDiv" class="tests-style"> 
    <button class="test-btn" onclick="updateAnswers(1);model.page='test1';show();">Test 1</button> <br>
    <button class="test-btn" onclick="updateAnswers2();model.page='test2';show();">Test 2</button> <br>
    </div>
    </div>`;
}