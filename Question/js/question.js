// Array to store questions, options and answers
let questions = [
    {
        num: 1,
        question: "What does HTML stands for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Text Multi Language",
        ]
    },
    {
        num: 2,
        question: "What does CSS stands for?",
        answer: "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ]
    },
    {
        num: 3,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
            "Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprogramming",
            "Hometext Preprocessing"
        ]
    },
    {
        num: 4,
        question: "What does SQL stand for?.",
        answer: "Structured Query Language",
        options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language"
        ]
    },
    {
        num: 5,
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
            "eXtensible Markup Language",
            "eXecutable Multiple Language",
            "eXtra Multi-program Language",
            "eXamine Multiple Language"
        ]
    },
    {
        num: 6,
        question: "What is the correct Javascript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
        answer: "document.getElementByid('demo').innerHTML='Hello World';",
        options: [
            "document.getElementByid('demo').innerHTML='Hello World';",
            "document.getElement('p').innerHTML = 'Hello World!';",
            "#demo.innerHTML = 'Hello World!';",
            "document.getElementByName('p').innerHTML = 'Hello World!';",
        ]
    },
    {
        num: 7,
        question: "Inside which HTML element do we put the Javascript?",
        answer: "'<'script'>'",
        options: [
            "'<'js'>'",
            "'<'script'>'",
            "'<'scripting'>'",
            "'<'javascript'>'"
        ]
    },
    {
        num: 8,
        question: "Where is the correct place to insert a Javascript",
        answer: "Both the '<'head'>' section and the '<'body'>' section are correct",
        options: [
            "The '<'head'>' section",
            "The '<'body'>' section",
            "Both the '<'head'>' section and the '<'body'>' section are correct"
        ]
    },
    {
        num: 9,
        question: "what is the correct syntax for referring to an external script called 'xxx.js'",
        answer: "'<'script src='xxx.js''>'",
        options: [
            "'<'script href='xxx.js''>'",
            "'<'script src='xxx.js''>'",
            "'<'script nam='xxx.js''>'"
        ]
    },
    {
        num: 10,
        question: "The external Javascript file must contain the <script> tag.",
        answer: "False",
        options: [
            "True",
            "False"
        ]
    },
    {
        num: 11,
        question: "How do you write 'Hello World' in an alert box?",
        answer: "alert('Hello World');",
        options: [
            "alertBox('Hello World');",
            "msgBox('Hello World');",
            "msg('Hello World');",
            "alert('Hello World');"
        ]
    },
    {
        num: 12,
        question: "How do you create function in Javascript",
        answer: "function myFunction()",
        options: [
            "function = myFunction()",
            "function:myFunction()",
            "function myFunction()"
        ]
    },
    {
        num: 13,
        question: "How do you call a function named 'myFunction'?",
        answer: "myFunction()",
        options: [
            "myFunction()",
            "call myFunction()",
            "call function myFunction()"
        ]
    },
    {
        num: 14,
        question: "How to write an IF statement in Javascript",
        answer: "if (i==5)",
        options: [
            "if i == 5 then",
            "if i = 5 then",
            "if (i==5)",
            "if i = 5"
        ]
    },
    {
        num: 15,
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5",
        answer: "if('i' !=5);",
        options: [
            "if ('i' != 5);",
            "if 'i' <> 5;",
            "if ('i' <> 5);",
            "if 'i' =! 5 then;" 
        ]
    },
    {
        num: 16,
        question: "How does a WHILE loop start",
        answer: "while (i <= 10)",
        options: [
            "while (i <= 10; i++)",
            "while i = 1 to 10",
            "while (i <= 10)"
        ]
    },
    {
        num: 17,
        question: "How does a FOR loop start",
        answer: "for (i=0; i<=5; i++)",
        options: [
            "for (i=0; i<=5; i++)",
            "for (i=0, i<=5)",
            "for (i<=5; i++)",
            "for i = 1 to 5"
        ]
    },
    {
        num: 18,
        question: "How can you add a comment in Jvascript",
        answer: "// This is a comment",
        options: [
            "// This is a comment",
            "'<'!- This is a comment --'>'",
            "'This is a comment"
        ]
    },
    {
        num: 19,
        question: "How to insert a comment that has more than one line",
        answer: "'/*' This comment has more than one line'*/'",
        options: [
            "'/*' This comment has more than one line'*/'",
            "'<'!-- This comment has more than one line --'>'",
            "'//' This comment has more than one line"
        ]
    },
    {
        num: 20,
        question: "What is the correct way to write a Javascript array",
        answer: "var colors = ['red', 'green', 'blue']",
        options: [
            "var colors = ['red', 'green', 'blue']",
            "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
            "var colors = (1:'red', 2:'green', 3:'blue')",
            "var colros = 'red', 'green', 'blue'"
        ]
    },
    {
        num: 21,
        question: "How do you round the number 7.25 to the nearest integer?",
        answer: "Math.round(7.25)",
        options: [
            "Math.round(7.25)",
            "round(7.25)",
            "rnd(7.25)",
            "Math.rnd(7.25)"
        ]
    },
    {
        num: 22,
        question: "How do you find the number with the highest value of x and y",
        answer: "Math.max(x,y)",
        options: [
            "Math.ceil(x,y)",
            "Math.max(x,y)",
            "ceil(x,y)",
            "top(x,y)"
        ]
    },
    {
        num: 23,
        question: "What is the correct Javascript syntax for opening a new window called 'w2'?",
        answer: "w2 = window.open('https://www.w3schools.com');",
        options: [
            "w2 = window.new('https://www.w3schools.com');",
            "w2 = window.open('https://www.w3schools.com');"
        ]
    },
    {
        num: 24,
        question: "Javascript is the same a Java?",
        answer: "False",
        options: [
            "False",
            "True"
        ]
    },
    {
        num: 25,
        question: "How can you detect the client's browser name?",
        answer: "navigator.appName",
        options: [
            "browser.name",
            "navigator.appName",
            "client.navName"
        ]
    },
    {
        num: 26,
        question: "Which event occurs when the user clicks on an HTML element?",
        answer: "onclick",
        options: [
            "onclick",
            "onmouseclick",
            "onmouseover",
            "onchange"
        ]
    },
    {
        num: 27,
        question: "How do you declare a javascript variable?",
        answer: "var carName;",
        options: [
            "var carName;",
            "v carName;",
            "variable carName;"
        ]
    },
    {
        num: 28,
        question: "Which operator is used to assign a value to a variable?",
        answer: "=",
        options: [
            "=",
            "*",
            "-",
            "x"
        ]
    },
    {
        num: 29,
        question: "What will the following code return: Boolean(10 > 9)",
        answer: "true",
        options: [
            "true",
            "NaN",
            "false"
        ]
    },
    {
        num: 30,
        question: "Is Javascript case sensitive",
        answer: "Yes",
        options: [
            "Yes",
            "No",
        ]
    }

];