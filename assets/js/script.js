
var questionArray = [
    {
        question: "What is the purpose of a for loop?",
        choices: [
            "Just for fun",
            "To iterate lines of code", 
            "Display error mesasge",
            "Help you fix bugs"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of a console log?",
        choices: [
            "Creates a log of errors",
            "Debug", 
            "So your supervisor knows you are working",
            "To make your code repeat"
        ], 
        answer: 1
    }

]

var index = 0

var secondsRemaining = questionArray.length*15


var intervalId

document.getElementById("start-btn").addEventListener("click", function(){
    document.getElementById("start-div").classList.add("hide")
    document.getElementById("question-div").classList.remove("hide")
    intervalId = setInterval(countdown, 1000)
})

function loadQuestion(){
    document.getElementById("question").textContent=questionArray[index].question
    for (let i = 0; i < questionArray[index].choices.length; i++) {
        var li = document.createElement("li")
        li.textContent=questionArray[index].choices[i]
        document.getElementById("choices").appendChild(li)
        
    } 
}
loadQuestion()

function countdown(){
        --secondsRemaining
        document.getElementById("time").innerHTML=secondsRemaining
        if (secondsRemaining === 0) {
            clearInterval(intervalId)
        }
}