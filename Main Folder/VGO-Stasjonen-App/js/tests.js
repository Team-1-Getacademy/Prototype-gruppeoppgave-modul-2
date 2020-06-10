function showPageTestView() {
    innhold.innerHTML = `   
    <div class="grid-container">
    <div id="omOssDiv" class="grid-item omOssStyle"> 
    <button class="test1" onclick="updateAnswers(1);model.page='test1';show();">Test 1</button> <br>
    <button class="test2" onclick="model.page='test2';show();">Test 2</button> <br>
    Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
    </div>
    </div>`;
}