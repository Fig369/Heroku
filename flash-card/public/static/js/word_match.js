// window.load = main()

// function main(){
    // initially html is not generated.
    var htmlGenerated = false;
    // number of inputs start out as 2.
    var numberOfInputs = 2;
    // initially no addtional inputs have been added.
    var addMore = false;
    // initialize the answer.
    var answer = '';

    // saved variables
    var saved = false
    var saved_id = 0
    
    // function reset() {
    // // reset the htmGenerated to false.
    // htmlGenerated = false;
    // numberOfInputs = 2;
    // var someVarName = true;
    // sessionStorage.setItem("someVarKey1", someVarName);
    // window.location.reload();
    // }

    function populate_numbers_array(footer, dlArray){
        console.log("populating numbers")
        dlArray.forEach(i => {
            footer += i.replace ( /[^\d.]/g, '' );
            footer += ',';
            console.log("adding "+i+" to the numbers array")
        })
        return footer
    }

    function show_answer() {
        jAlert(answer, 'Correct Match');
    }

    function generate_html() {

    // retrieve the keys and descriptions. Then load them into their respective arrays.
    const e_inputs = document.querySelectorAll("[id^='el']");
    const d_inputs = document.querySelectorAll("[id^='dl']");
    let elArray = [];
    let dlArray = [];

    dlArrayNumbers = []; // Liang: added to track numbers

    const title = document.getElementById('title_input').value;
    e_inputs.forEach( i => { if(i.value) elArray.push(i.value) });
    d_inputs.forEach( i => { if(i.value) dlArray.push(i.value) });

    for (var i = 0; i < dlArray.length; i++)
      dlArrayNumbers.push("d" + (i + 1));


    //has the html already been generated? 
    if(!htmlGenerated){
        //fetch the results box
        results = document.getElementById("results");
        
        //create textarea
        textarea = document.createElement("textarea");
        textarea.setAttribute("id","generated_html_textarea");
        
        // initialize blank html
        header = '<!DOCTYPE HTML>\n<html lang=\"en\">\n\t<head>\n\t\t<title>Word Matching Exercise</title>\n\t\t<style>\n*:focus {outline: 2px solid blue; outline-offset: 2px;}\n\t\tdetails {padding:3px;}\n\t\t</style>\n\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"${pageContext.request.contextPath}/static/css/boxes.css\" />\n\t\t<script type=\"text/javascript\" src=\"${pageContext.request.contextPath}/static/js/event1.js\">';
        header += "<link rel=\"stylesheet\" type=\"text/css\" href=\"${pageContext.request.contextPath}/static/css/style.css\" />"
        header += '</'
        header += 'script>\n'
        header += '<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-89940905-27\">'
        // header += '</'
        // header += 'script>\n<script>\n\t window.dataLayer = window.dataLayer || [];\n\t function gtag(){dataLayer.push(arguments)};\tgtag(\"js\", new Date());\tgtag(\"config\", \"UA-89940905-27\");\n'
        header += '</'
        header += 'script>\n'
        header += '<script src="${pageContext.request.contextPath}/static/js/jquery-1.7.2.min.js">'
        header += '</'
        header += 'script>\n'
        header += '<script src="${pageContext.request.contextPath}/static/js/jquery-ui.min.js">'
        header += '</'
        header += 'script>\n'
        header += '<script src="${pageContext.request.contextPath}/static/js/jquery.ui.touch-punch.min.js">'
        header += '</'
        header += 'script>\n'
        header += '<script src="${pageContext.request.contextPath}/static/js/event1.js">'
        header += '</'
        header += 'script>\n'
        header += '<script src="${pageContext.request.contextPath}/static/js/jquery.alerts.js">'
        header += '</'
        header += 'script>\n'
        header += '<link href="${pageContext.request.contextPath}/static/js/jquery.alerts.css" rel="stylesheet" type="text/css" media="screen">'
        header += '<script type=\"text/javascript\" src=\"${pageContext.request.contextPath}/static/js/logging.js\">'
        header += '</'
        header += 'script>\n</head>\n\t\t<body>';
        let html = '';
        html += header;
        html += '<div id=\'maincontentstyle\'>\n'
        html += '\t<center>\n'
        html += '\t\t<div id=\'boxstyle\'>\n'
        html += '\t\t\t<h3 id=\'title\'>'+title+"</h3>\n";
        //create key inputs
        html += '\t\t\t\t<center>\n'
        html += '\t\t\t\t\t<div class=\'source\'>\n' 
        console.log("The value of the dlArray is")
        console.log(dlArray)
        console.log("The value of the elArray is")
        console.log(elArray)
        dlArray = shuffleDescriptions(dlArray);



        for (let i = numberOfInputs; i < elArray.length+numberOfInputs; i++){
            html += '\t\t\t\t\t\t<div id=\'s';
	        id   = i-numberOfInputs+1;//elArray[i-numberOfInputs].replace ( /[^\d.]/g, '' );
            console.log("id "+id)
	        html += id;
	        html +='\' class=\'draggyBox-small ui-draggable\'>\n';
	        html += '\t\t\t\t\t\t\t'
	        html += elArray[i-numberOfInputs]
	        html += '\n';
	        html +='\t\t\t\t\t\t</div>\n';
        }
        elArray = shuffleKeys(elArray);
        console.log("The value of the dlArray is")
        console.log(dlArray)
        console.log("The value of the elArray is")
        console.log(elArray)
        html += '\t\t\t\t\t</div>\n'
        html += '\t\t\t\t\t</center>\n'

        //create description inputs
        html += '\t\t\t\t\t<table id=\'tablestyle\'>\n'
        for (let i = numberOfInputs; i < dlArray.length+numberOfInputs; i++){
            html +='\t\t\t\t\t\t<tr>\n'
            html += '\t\t\t\t\t\t<td id=\'row';
            id   =  i-numberOfInputs+1;//dlArray[i-numberOfInputs].replace ( /[^\d.]/g, '' );
            console.log("id "+id);
            html += id;
            html +='\'>\n';
            html += '\t\t\t\t\t\t\t<div id=\'t';
            html += id;
            html +='\' class=\'ltarget ui-droppable\'>'
            html +='</div>\n' 
            html +='\t\t\t\t\t\t</td >\n'
            html +='\t\t\t\t\t\t<td id=\'d'
            html += id
            html += '\'>\n'
            html += '\t\t\t\t\t\t\t';
            html += '\t\t\t\t\t\t\t\t<pre>';
            html += dlArray[i-numberOfInputs];
            html += '\n';
            html +='\t\t\t\t\t\t\t\t</pre>\n' 
            html +='\t\t\t\t\t\t\t</td >\n' 
            html +='\t\t\t\t\t\t</tr>\n';
        }
        html += '\t\t\t\t\t</table>\n';
        html += '\t\t\t\t</center>\n'
        html += '\t\t</div>\n'
        html += '\t</center>\n'
        html += '</div>'
        html += '<span style=\"padding: 3px\"> <button id =\"one\" class=\"button\" type=\"button\" onClick=\"show_answer'
        html += '()'
        html += '"'
        html += ">"
        html += 'Show Answer'
        html += '</'
        html += 'button> <button id = \"resetButton\" class=\"button\" type=\"button\" onClick=\"reset'
        html += '()'
        html += '"'
        html += '>'
        html += 'Reset'
        html += '</'
        html += 'button>'
        html += '</span>'
        html += '<span id="audio" style="">'
        html += '<a href="" title="Turns Text-to-Speech Output On or Off" class="menulink" style="text-decoration: none;">'
        html += '<img id="bg" src="${pageContext.request.contextPath}/static/images/audioOff.png" height="30" width="30" style="margin-bottom:-10px; padding-bottom:-20px;">'
        html += '</a>'
        html += '</span>'
        footer = '\n\t\t</body>\n</html>\n';
        footer += ''
        footer += '<script type="text/javascript">'
        footer += '$(init);'
        footer += '$( window ).unload(function() {'
        footer += 'removeStorage.removeItem("someVarKey1");'
        footer += '});'
        footer += 'function reset() {'
        footer += '  var someVarName = true;'
        footer += 'sessionStorage.setItem("someVarKey1", someVarName);'
        footer += 'window.location.reload();'
        footer += '}'
        footer += 'function init() {'
        footer += '	document.getElementById(\'resetButton\').style.display = \'none\';'
        footer += 'document.getElementById("resetButton").style.visibility = "hidden";'
        footer += 'if (false && sessionStorage.getItem("someVarKey1"))'
        footer += '$("#one").focus();'
        console.log('var numbers = [');
        footer += 'var numbers = ['
        for (let i = numberOfInputs; i < dlArray.length+numberOfInputs; i++){
            footer += dlArrayNumbers[i-numberOfInputs].replace ( /[^\d.]/g, '' );
            console.log(dlArrayNumbers[i-numberOfInputs].replace ( /[^\d.]/g, '' ))
            footer += ',';
            console.log(',')
        }
        console.log('];') 
        footer += '];'
        footer += 'initialize(numbers);'
        footer += '}'
        footer += '</script>'
        footer += '  <script>'
        footer += '  answer = '
        footer += '\"'
        answer = '';
        for (let i = numberOfInputs; i < dlArray.length+numberOfInputs; i++) {
            answer += elArray[i-numberOfInputs];
            answer += ':';
            answer += dlArray[i-numberOfInputs];
            answer  += ' '
        }
        footer += answer
        console.log(answer)
        footer += '\"'
        footer += ';'
        // footer += '\n'
        // footer += ' Iteration: is one time execution of the loop body.'
        // footer += '\n'
        // footer += 'Loop Continuation Condition: is a Boolean expression that controls the execution of the loop.'
        // footer += '\n'
        // footer += 'Infinite Loop: is a loop that runs forever due to an error in the code.'
        // footor += '\n'
        // footer += 'Off-by-one: is an error in the program that causes the loop body to be executed one more or less time."'
        footer += '  function show_answer() {'
        footer += '	  jAlert(answer, \'Correct Match\');'
        footer += '  }'
        footer += '</script>'
        footer += ' '
        footer += '<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/GetElementPosition3.js"></script>'
        footer += ' <script>'
        footer += '    $(function(){'
        footer += '  if (\'speechSynthesis\' in window) {'
        footer += '    speechSynthesis.onvoiceschanged = function() {'
        footer += '      var $voicelist = $(\'#voices\');'
        footer += ''
        footer += '      if($voicelist.find(\'option\').length == 0) {'
        footer += '        speechSynthesis.getVoices().forEach(function(voice, index) {'
        footer += '          var $option = $(\'<option>\')'
        footer += '          .val(index)'
        footer += '          .html(voice.name + (voice.default ? \' (default)\' :\'\'));'
        footer += '          $voicelist.append($option);'
        footer += '        });'
        footer += ''
        footer += '        $voicelist.form_select();'
        footer += '      }'
        footer += '    }'
        footer += '  } '
        footer += '});     '
        footer += 'audioOn = false;'
        footer += '$(function() {'
        footer += '$(\'.menulink\').click(function(){'
        footer += '  if (audioOn) {'
        footer += '	$("#bg").attr(\'src\',"${pageContext.request.contextPath}/static/images/audioOff.png");  '
        footer += '	audioOn = false;'
        footer += '  }'
        footer += '  else {'
        footer += '	$("#bg").attr(\'src\',"${pageContext.request.contextPath}/static/images/audioOn.png");'
        footer += '	audioOn = true; speak(" ");'
        footer += '  }'
        footer += '  return false;'
        footer += '});'
        footer += '});'
        footer += ' </script>   '
        html += footer;

        // html generation is done.
        htmlGenerated = true;
        textarea.value = html;
        results.replaceChildren(textarea);

        // Generate reset, show answer, , and render html buttons
        controls = document.createElement("div");
        controls.setAttribute("id","program1");
        controls.setAttribute("style","border: 1px solid #EB0D1B; width: 450px; font-family: courier; font-size: 100.5%; margin: 0px auto; border: 1px; text-align: center; margin-top: 5px;");
        // controls.innerHTML +=  '<button id = "renderHTMLButton" class="button" type="button" onClick="render_html()">Render html</button>\n';
        controls.innerHTML +=  '<button id = "submit" class="button" type="button" onClick="saveContent()"> Save </button>\n';
        controls.innerHTML +=  `<button id=\"view_button\" class=\"button\" style=\" display: none;\"><a href=\"${window.location.href}/${saved_id}\"> view</a> </button>\n`;
        if(document.getElementById("renderHTMLButton"))
            results.parentNode.replaceChild(controls);
        results.parentNode.appendChild(controls);
    }
    }


    function saveContent(){
        console.log("calling save content");
        var html_content = document.getElementById("generated_html_textarea");
        console.log(html_content.value)
        var b64_string   = btoa(unescape(html_content.value)) 
        console.log(b64_string)
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/wordmatchgenerator", true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function()
        {   
            if(xhr.readyState == 4 && xhr.status == 201) {
                console.log(xhr.status)
                console.log("content saved");
                saved = true;
                view_button = document.getElementById("view_button");
                view_button.style.display = "inline";
                console.log('JSON.parse(xhr.response).id ' + JSON.parse(xhr.response).id)
                saved_id = JSON.parse(xhr.response).id
                console.log('saved_id ' +saved_id)
                view_button.children[0].href = `${window.location.href}/${saved_id}`
            }
            else{
                console.log(xhr.status)
                console.log(xhr.response)
                console.log("content was not save successfully");
            }
        }
        console.log('{"content":\"'
                +b64_string+'\"}');
        xhr.send(JSON.stringify({content: b64_string}));
    }

    function add_more() {
    // we've added more inputs.
    addMore = true;

    // set html generated to false, because new inputs have been added.
    htmlGenerated = false;
    
    // increment the number of inputs.
    numberOfInputs++;

    //fetch the input boxes.
    inputs = document.getElementById("inputBoxes");

    // create newline
    br = document.createElement("br");
    
    //create a new row for a key term.
    row = document.createElement("div");

    // set the key term text.
    row.innerHTML = "Key Term ";
    row.innerHTML +=numberOfInputs;
    row.innerHTML +=" :";

    // create the input for the key.
    key = document.createElement("input");
    key.setAttribute("id","el"+numberOfInputs);

    //add the key to the row.
    row.appendChild(key);
    row.after(br);

    //create a row for the new description.
    row2 = document.createElement("div");

    // set the description text.
    row2.innerHTML = "Description  "
    row2.innerHTML+=numberOfInputs;
    row2.innerHTML+=" :";
    row2.after(br);

    // create the description input
    description = document.createElement("input");
    description.setAttribute("id","dl"+numberOfInputs);

    // add the description to the row.
    row2.appendChild(description);

    // add the rows for the key and the description to the inputBoxes.
    inputs.appendChild(row);
    inputs.appendChild(row2);
    }

    function render_html(){
    
    textarea  = document.getElementById("generated_html_textarea");
    // Set the generate html to the value from the textarea.
    generated_html = textarea.value;
    console.log(generated_html);
    // Create a new tab.
    var new_window = window.open('');
    maincontentstyle = document.getElementById("maincontentstyle");
    if(document.getElementById("rendered_html"))
        document.getElementById("rendered_html").remove();

    rendered_html = document.createElement("div");
    rendered_html.setAttribute("id","rendered_html");
    rendered_html.setAttribute("style","border: 1px solid #EB0D1B; width: 450px; font-family: courier; font-size: 100.5%; margin: 0px auto; border: 1px; text-align: center; margin-top: 5px;");
    rendered_html.innerHTML +=  generated_html;
    results = document.getElementById("results");

    if(document.getElementById("rendered_html"))
        results.parentNode.appendChild(rendered_html);

    // Append the rendered html to the results tab
    results.parentNode.appendChild(rendered_html);
    header = '<!DOCTYPE HTML>\n<html lang=\"en\">\n\t<head>\n\t\t<title>Word Matching Exercise</title>\n\t\t<style>\n*:focus {outline: 2px solid blue; outline-offset: 2px;}\n\t\tdetails {padding:3px;}\n\t\t</style>\n\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"static/css/boxes.css\" />\n\t\t<script type=\"text/javascript\" src=\"static/js/event1.js\">';
    header += '</'
    header += 'script>\n'
    header += '<script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-89940905-27\">'
    header += '</'
    header += 'script>\n'
    // header += '<script>\n\t window.dataLayer = window.dataLayer || [];\n\t function gtag(){dataLayer.push(arguments)};\tgtag(\"js\", new Date());\tgtag(\"config\", \"UA-89940905-27\");\n'
    // header += '</'
    // header += 'script>\n'
    header += '</head>\n\t\t<body>';
    new_tab_html = header;
    new_tab_html += rendered_html.innerHTML;
    footer = '\n\t\t</body>\n</html>\n';
    footer += '<script type="text/javascript" src="static/js/GetElementPosition3.js">'
    footer += '</'
    footer += 'script>'
    footer += '<script type=\"text/javascript\" src=\"static/js/word_match.js\">'
    footer += '<script src="static/js/jquery-1.7.2.min.js">'
    footer += '</'
    footer += 'script>\n'
    footer += '<script src="static/js/jquery-ui.min.js">'
    footer += '</'
    footer += 'script>\n'
    footer += '<script src="static/js/jquery.ui.touch-punch.min.js">'
    footer += '</'
    footer += 'script>\n'
    footer += '<script src="static/js/event1.js">'
    footer += '</'
    footer += 'script>\n'
    footer += '<script src="static/js/jquery.alerts.js">'
    footer += '</'
    footer += 'script>\n'
    footer += '<link href="static/js/jquery.alerts.css" rel="stylesheet" type="text/css" media="screen">'
    footer += '<script type=\"text/javascript\" src=\"static/js/logging.js\">'
    footer += '</'
    footer += 'script>\n'
    new_tab_html += footer;
    console.log(new_tab_html);
    new_window.document.write(new_tab_html);
    }

    rand = Math.random();
    function shuffleDescriptions(a){
        for(let j,i=a.length;i>1;){
         j=Math.floor(rand*i--);
         if (i!=j) { [a[i],a[j]]=[a[j],a[i]]; [dlArrayNumbers[i],dlArrayNumbers[j]]=[dlArrayNumbers[j],dlArrayNumbers[i]]; }
        }
        console.log("shuffled dlarray")
        console.log(a)
        return a
    }
    function shuffleKeys(a){
        for(let j,i=a.length;i>1;){
         j=Math.floor(rand*i--);
         if (i!=j) [a[i],a[j]]=[a[j],a[i]]
        }
        console.log("shuffled elarray")
        console.log(a)
        return a
    }
// }