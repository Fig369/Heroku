var id;
function init() {
    id = document.getElementById('ID').value;
    console.log("id: "+id);
}

function save(){
    init();
    saveTopic();
    saveCategory();
    saveCard();
}

// save topic
function saveTopic(){
    console.log("save topic");
    //fetch 
    //1. id
    console.log("id: "+id);
    //2. topic
    var topic = document.getElementById('topic').value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/topic", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function()
    {   
        if(xhr.readyState == 4 && xhr.status == 201) {
            console.log(xhr.status)
            console.log("content saved");
        }
        else{
            console.log(xhr.status)
            console.log("content was not save successfully");
        }
    }
    //TODO: send topic
    var json = JSON.stringify({id: id, topic: topic})
    console.log("sending topic"); 
    console.log(json);
    xhr.send(json);
}

// save category
function saveCategory(){
    console.log("save category");
    //1. id
    console.log("id: "+id);
    //2. category
    var category = document.getElementById('category').value;
    console.log("category: "+category);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/category", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function()
    {   
        if(xhr.readyState == 4 && xhr.status == 201) {
            console.log(xhr.status)
            console.log("content saved");
        }
        else{
            console.log(xhr.status)
            console.log("content was not save successfully");
        }
    }
    //TODO: send category
    var json = JSON.stringify({id: id, category: category});
    console.log("sending category");
    console.log(json);
    xhr.send(json);
}

// save card
function saveCard(){
    console.log("save card");
    //fetch
    //1. id
    console.log("id: "+id);
    var json = {};
    json.id = id
    // loop for each and append to array
        //2. prompt 
        //3. question
        //4. answerid: id
    //
    var xhr = new XMLHttpRequest();
    //TODO: each of these need to be added to the json string.
    var elements = document.getElementsByTagName("input")
    for (const element of elements) {
        if(element.id.includes("pl")) {
            console.log("prompt: "+ element.value);
            json.prompt = element.value;
        }
        if(element.id.includes("al")) {
            console.log("answer: "+ element.value);
            json.answer = element.value;
        }
        if(element.id.includes("ql")) {
            console.log("question: "+ element.value);
            json.question = element.value;
        }
    }
    xhr.open("POST", "/card", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function()
    {   
        if(xhr.readyState == 4 && xhr.status == 201) {
            console.log(xhr.status)
            console.log("content saved");
        }
        else{
            console.log(xhr.status)
            console.log("content was not saved successfully");
        }
    }
    console.log("sending card");
    json = JSON.stringify(json)
    //verify that the proper json is sent to the server
    // i.e. {"id":"5","prompt":"p1","question":"q1","answer":"a1"}
    // cont'd {"id":"5","prompt":"p2","question":"q2","answer":"a2"}
    console.log(json);
    xhr.send(json);
}