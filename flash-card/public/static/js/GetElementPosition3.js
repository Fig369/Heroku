/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    $("#text1").draggable();
});

$(function () {
    $("#text2").draggable();
});

$(function () {
    $("#text3").draggable();
});

$(function () {
    $("#text4").draggable();
});

$(function () {
    $("#text5").draggable();
});

$(function () {
    $("#commandPrompt").draggable();
});

$(function () {
    $("#fileIO").draggable();
});

$(function () {
    $("#explanation").draggable();
});

$(function () {
    $("#highlight").draggable();
});

function pad(number, size) {
    if (number < 10) {
        return number + space(size - 1);
    } else if (number < 100) {
        return number + space(size - 2);
    } else if (number < 1000) {
        return number + space(size - 3);
    } else if (number < 10000) {
        return number + space(size - 4);
    } else {
        return number;
    }
}

function space(n) {
    result = "";
    for (var i = 0; i < n; i++) {
        result += " ";
    }
    return result;
}

function getElementPos(element) {
    var res = new Object();
    res.x = 0;
    res.y = 0;
    res.w = 0;
    res.h = 0;

    var box = element.getBoundingClientRect();

    res.x = box.left;
    res.y = box.top;
    res.w = box.right - box.left - 5;
    res.h = box.bottom - box.top - 5;

    return res;
}

function HighLight() {
    this.width = 318;
    this.height = 10;
    this.top = 77;
    this.left = 62;
}

function Explanation() {
    this.innerHTML = "";
    this.left = 448;
    this.width = 158;
    this.height = 40;
    this.top = 75;
}

function CommandPrompt() {
    this.innerHTML = "";
    this.left = 448;
    this.width = 158;
    this.height = 40;
    this.top = 65;
    this.isVisible = true;
}

function display(currentLine) {
//    commandPrompt[currentLine].innerHTML = currentPromptContent;
    $("#highlight").animate({top: pos.y, left: pos.x, width: pos.w, height: pos.h}, animationSpeed);
    document.getElementById('explanation').innerHTML = explanation[currentLine].innerHTML;

    if (commandPrompt[currentLine].isVisible) {
        document.getElementById('commandPrompt').style.visibility = 'visible';
//        $("#commandPrompt").animate({top: commandPrompt[currentLine].top, left: commandPrompt[currentLine].left}, animationSpeed);
        document.getElementById('commandPromptContent').innerHTML = commandPrompt[currentLine].innerHTML;
    } else {
        document.getElementById('commandPrompt').style.visibility = 'hidden';
    }
    speak(document.getElementById('explanation').innerHTML);

}

function getBrowserName() {
        osName = getOsVersion();
    if (osName.startsWith("Android") || osName.startsWith("iOS")) {
        return "unknown";
    }
    
    //Check if browser is IE
    if (navigator.userAgent.search("MSIE") >= 0) {
        return "msie";
    }
    //Check if browser is Chrome
    else if (navigator.userAgent.search("Chrome") >= 0) {
        return "chrome";
    }
    //Check if browser is Firefox 
    else if (navigator.userAgent.search("Firefox") >= 0) {
        return "firefox";
    }
    //Check if browser is Safari
    else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        return "safari";
    }
    //Check if browser is Opera
    else if (navigator.userAgent.search("Opera") >= 0) {
        return "opera";
    }
    else 
        return "unknown";
    }
                
    if (getBrowserName() != "safari") {
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    }

function speak(text) {
    if (!audioOn)
        return;
    
    var r86 = / case-sensitive/gi;
    var r85 = /cin /gi;
    var r84 = /cout /gi;
    var r83 = /Divide-and-Conquer/gi;
    var r82 = /Math\.cos/gi;
    var r81 = /Math\.sin/gi;
    var r80 = /\&\#960;/gi;
    var r79 = /object-oriented/gi;
    var r78 = /\<br \/\>/gi;
    var r77 = /\\/gi;
    var r76 = /list2/gi;
    var r75 = /list1/gi;
    var r74 = /Pass-By-Value/gi;
    var r73 = /\*\*/gi;
    var r72 = /\(\=\)/gi;
    var r71 = /Pass-By-Reference/gi;
    var r70 = /isalpha/gi;
    var r69 = /isupper/gi;
    var r68 = /islower/gi;
    var r67 = /Whitespace/gi;
    var r66 = /\(\#\)/gi;
    var r65 = /\(\;\)/gi;
    var r64 = /Dial-up/gi;
    var r63 = /::/gi;
    var r62 = /<typename/gi;
    var r61 = /y-coordinates/gi;
    var r60 = /Value-Returning/gi;
    var r59 = /Sentinel-Controlled/gi;
    var r58 = /Off-by-one/gi;
    var r57 = /Short-Circuit/gi;
    var r56 = /Fall-Through/gi;
    var r55 = /floating-point/gi;
    var r54 = /Round-Off/gi;
    var r53 = /Right-Heavy/gi;
    var r52 = /Left-Heavy/gi;
    var r51 = /Average-Case/gi;
    var r50 = /Worst-Case/gi;
    var r49 = /Best-Case/gi;
    var r48 = /Big-O/gi;
    var r47 = /index2/gi;
    var r46 = /index1/gi;
    var r45 = /English-like/gi;
    var r44 = /setOn/gi;
    var r43 = /two-dimensional/gi;
    var r42 = /column-by-column/gi;
    var r41 = /row-by-row/gi;
    var r40 = /Auto-unboxing/gi;
    var r39 = /Auto-boxing/gi;
    var r38 = /Breadth-First/gi;
    var r37 = /Depth-First/gi;
    var r36 = /assembly-language/gi;
    var r35 = /high-level/gi;
    var r34 = /machine-code/gi;
    var r33 = /machine-language/gi;
    var r32 = /High-Level/gi;
    var r31 = /try-catch/gi;
    var r30 = / islower/gi;
    var r29 = / score3/gi;
    var r28 = / score2/gi;
    var r27 = / score1/gi;
    var r26 = /printArray/gi;
    var r25 = /nullptr/gi;
    var r24 = /->/gi;
    var r23 = /tail-recursive/gi;
    var r22 = / srand/gi;
    var r21 = /\n/gi;
    var r20 = / vs. /gi;
    var r19 = / 0th /gi;
    var r18 = / 3th /gi;
    var r17 = / 2th /gi;
    var r16 = / 1th /gi;
    var r15 = /\&#8595;/gi;
    var r14 = / \^ /gi;
    var r13 = /do-while/gi;
    var r12 = /num3/gi;
    var r11 = /num2/gi;
    var r10 = /num1/gi;
    var r9 = / value-returning /gi;
    var r8 = / action-after-each-iteration /gi;
    var r7 = / loop-continuation /gi;
    var r6 = / no-arg /gi;
    var r5 = /\|\|/gi;
    var r4 = /\&\&/gi;
    var r3 = /isLeapYear/gi;
    var r2 = /console/gi;
    var r1 = /mouse\/finger/gi;
    var regex0 = /non-empty/gi;
    var regex = /!=/gi;
    var regex1 = /\>=/gi;
    var regex2 = /==/gi;
    var regex3 = /\</gi;
    var regex4 = /\&gt;/gi;
    var regex5 = /-/gi;
    var regex6 = /\&lt;/gi;
    var regex7 = / % /gi;
    var regex8 = / \* /gi;
    var regex9 = / \/ /gi;

    text = text.replace(r86, " case sensitive");
    text = text.replace(r85, "see in ");
    text = text.replace(r84, "see out ");
    text = text.replace(r83, " Divide and Conquer ");
    text = text.replace(r82, " Math dot cosine ");
    text = text.replace(r81, " Math dot sine ");
    text = text.replace(r80, " pie ");
    text = text.replace(r79, "object oriented");
    text = text.replace(r78, "");
    text = text.replace(r77, "");
    text = text.replace(r76, "list 2");
    text = text.replace(r75, "list 1");
    text = text.replace(r74, "Pass By Value");
    text = text.replace(r73, "asterisk asterisk");
    text = text.replace(r72, " ");
    text = text.replace(r71, "Pass By Reference");
    text = text.replace(r70, "is alpha");
    text = text.replace(r69, "is upper");
    text = text.replace(r68, "is lower");
    text = text.replace(r67, "White space");
    text = text.replace(r66, " ");
    text = text.replace(r65, " ");
    text = text.replace(r64, "Dial up");
    text = text.replace(r63, " colon colon ");
    text = text.replace(r62, " typename");
    text = text.replace(r61, "y coordinates");
    text = text.replace(r60, "Value Returning");
    text = text.replace(r59, "sentinel controlled");
    text = text.replace(r58, "Off by one");
    text = text.replace(r57, "Short Circuit");
    text = text.replace(r56, "Fall Through");
    text = text.replace(r55, "floating point");
    text = text.replace(r54, "Round Off");
    text = text.replace(r53, "Right Heavy");
    text = text.replace(r52, "Left Heavy");
    text = text.replace(r51, "average case");
    text = text.replace(r50, "worst case");
    text = text.replace(r49, "best case");
    text = text.replace(r48, "Big O");
    text = text.replace(r47, "index 2");
    text = text.replace(r46, "index 1");
    text = text.replace(r45, "English like ");
    text = text.replace(r44, "set on ");
    text = text.replace(r43, "two dimensional");
    text = text.replace(r42, "column by column");
    text = text.replace(r41, "row by row");
    text = text.replace(r40, "auto unboxing");
    text = text.replace(r39, "auto boxing");
    text = text.replace(r38, "breadth first");
    text = text.replace(r37, "depth first");
    text = text.replace(r36, "assembly language");
    text = text.replace(r35, "high level");
    text = text.replace(r34, "machine code");
    text = text.replace(r33, "machine language");
    text = text.replace(r32, "high level");
    text = text.replace(r31, "try catch");
    text = text.replace(r30, " is lower");
    text = text.replace(r29, " score 3");
    text = text.replace(r28, " score 2");
    text = text.replace(r27, " score 1");
    text = text.replace(r26, "print array");
    text = text.replace(r25, "null pointer");
    text = text.replace(r24, "'s");
    text = text.replace(r23, "tail recursive");
    text = text.replace(r22, " s rand");
    text = text.replace(r21, " ");
    text = text.replace(r20, " versus ");
    text = text.replace(r19, " zeroth ");
    text = text.replace(r18, " third ");
    text = text.replace(r17, " second ");
    text = text.replace(r16, " first ");
    text = text.replace(r15, " down arrow symbol ");
    text = text.replace(r14, " exclusive or ");
    text = text.replace(r13, " do while ");
    text = text.replace(r12, " numb 3 ");
    text = text.replace(r11, " numb 2 ");
    text = text.replace(r10, " numb 1 ");
    text = text.replace(r9, " value returning ");
    text = text.replace(r8, " action after each iteration ");
    text = text.replace(r7, " loop continuation ");
    text = text.replace(r6, " no argument ");
    text = text.replace(r5, " or ");
    text = text.replace(r4, " and ");
    text = text.replace(r3, "is LeapYear");
    text = text.replace(r2, "council");
    text = text.replace(r1, "mouse or finger");
    text = text.replace(regex0, "nonempty");
    text = text.replace(regex, " is not equal to ");
    text = text.replace(regex1, " is greater than or equal to ");
    text = text.replace(regex2, " is equal to ");
    text = text.replace(regex3, " is less than ");
    text = text.replace(regex4, " is greater than ");
    text = text.replace(regex5, " minus ");
    text = text.replace(regex6, " is less than ");
    text = text.replace(regex7, " remainder ");
    text = text.replace(regex8, " times ");
    text = text.replace(regex9, " divide ");

    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
//    alert(getOsVersion() + " " + voices[0].name);
    console.log("voices")
    console.log("******")
    console.log(voices)
    console.log("******")

    osName = getOsVersion();
    msg.voice = voices[0]; // For Windows 7, and all other default
    if (osName.includes("Windows")) {
        for (var i = 0; i < voices.length; i++) {
            if (voices[i].name.includes("Zira")) {
                msg.voice = voices[i];
                break;
            }
        }
        if (i >= 0)
            msg.voice = voices[i];
        else
            msg.voice = voices[1];
    } else if (osName.includes("Mac")) {
        for (var i = 0; i < voices.length; i++) {
            if (voices[i].name.includes("Alex")) {
                msg.voice = voices[i];
                break;
            }
        }

        if (i == voices.length) {
            for (var i = 0; i < voices.length; i++) {
                if (voices[i].name.indexOf("Samantha") != -1) {
                    msg.voice = voices[i];
                    break;
                }
            }
        }
    } else if (osName.startsWith("iOS")) {
        msg.voice = voices[15];
        for (var i = 0; i < voices.length; i++) {
            if (voices[i].name.indexOf("Samantha") != -1) {
                msg.voice = voices[i];
                break;
            }
        }
    } else if (osName.startsWith("Android")) {
        found = false;
        for (var i = 0; i < voices.length; i++) {
            if (voices[i].name.indexOf("English United States") != -1) {
                msg.voice = voices[i];
                found = true;
                break;
            }
        }
        if (!found) {
            for (var i = 0; i < voices.length; i++) {
                if (voices[i].name.indexOf("English") != -1) {
                    msg.voice = voices[i];
                    break;
                }
            }
        }
    }

    msg.rate = 1;
    msg.pitch = 1;
    msg.text = text;
    speechSynthesis.speak(msg);
}

function cancelVoice() {
    speechSynthesis.cancel();
}


function getOsVersion() {
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;

    // system
    var os = 'unknown';
    var clientStrings = [
        {s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/},
        {s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/},
        {s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/},
        {s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/},
        {s: 'Windows Vista', r: /Windows NT 6.0/},
        {s: 'Windows Server 2003', r: /Windows NT 5.2/},
        {s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/},
        {s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/},
        {s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/},
        {s: 'Windows 98', r: /(Windows 98|Win98)/},
        {s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/},
        {s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
        {s: 'Windows CE', r: /Windows CE/},
        {s: 'Windows 3.11', r: /Win16/},
        {s: 'Android', r: /Android/},
        {s: 'Open BSD', r: /OpenBSD/},
        {s: 'Sun OS', r: /SunOS/},
        {s: 'Linux', r: /(Linux|X11)/},
        {s: 'iOS', r: /(iPhone|iPad|iPod)/},
        {s: 'Mac OS X', r: /Mac OS X/},
        {s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
        {s: 'QNX', r: /QNX/},
        {s: 'UNIX', r: /UNIX/},
        {s: 'BeOS', r: /BeOS/},
        {s: 'OS/2', r: /OS\/2/},
        {s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
    ];
    for (var id in clientStrings) {
        var cs = clientStrings[id];
        if (cs.r.test(nAgt)) {
            os = cs.s;
            break;
        }
    }

    var osVersion = 'unknown';

    if (/Windows/.test(os)) {
        osVersion = /Windows (.*)/.exec(os)[1];
        os = 'Windows';
    }

    switch (os) {
        case 'Mac OS X':
            osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
            break;

        case 'Android':
            osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
            break;

        case 'iOS':
            osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
            osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
            break;
    }

    return os + ' ' + osVersion;
}