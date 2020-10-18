
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
    },
    {
        question: "What does i++ do?",
        choices: [
            "Add's 1 to your next iteration",
            "Gives you addtional information about the work you are doing", 
            "Nothing",
            "Decreases your iteration by 1"
        ], 
        answer: 1
    }

]

var index = 0

var secondsRemaining = questionArray.length*15

var highScore = localStorage.getItem("highScore") ? JSON.parse(localStorage.getItem("highScore")): []

var intervalId

document.getElementById("start-btn").addEventListener("click", function(){
    document.getElementById("start-div").classList.add("hide")
    document.getElementById("question-div").classList.remove("hide")
    intervalId = setInterval(countdown, 1000)
})

function createButtons(){
    document.getElementById("choices").textContent=""
    document.getElementById("question").textContent=""
    document.getElementById("question").textContent=questionArray[index].question
    for (let i = 0; i < questionArray[index].choices.length; i++) {
        var button = document.createElement("button")

        var li = document.createElement("li")
        button.textContent=questionArray[index].choices[i]
        button.classList.add("items")
       
        li.appendChild(button)
        // li.classList.add("items")
       // li.textContent=questionArray[index].choices[i]
       
        document.getElementById("choices").appendChild(li)

    }    
    var items = document.querySelectorAll(".items")
    console.log(items)
    for (var i=0; i<items.length; i++){
        items[i].addEventListener("click", function() {
            index++
        if (index < questionArray.length){
            createButtons()

          }
          else {
            clearInterval(intervalId) 
            document.getElementById("input-score-div").classList.remove("hide")
            document.getElementById("question-div").classList.add("hide")
          }
        
        })
    }
    
}

function loadQuestion(){
    createButtons() 
 
}
loadQuestion()

function countdown(){
        --secondsRemaining
        document.getElementById("time").innerHTML=secondsRemaining
        if (secondsRemaining === 0) {
            clearInterval(intervalId)
        }
}

document.getElementById("initial-btn").addEventListener("click", function (){
    var newScore = {
        score: secondsRemaining, 
        initial:document.getElementById("initial").value
    }
    highScore.push(newScore)

   localStorage.setItem("highScore", JSON.stringify(highScore))  
    document.getElementById("input-score-div").classList.add("hide")
    document.getElementById("view-score").classList.remove("hide")
    var sortHighScore = highScore.sort(function (a,b){
        return parseInt(b.score)-parseInt(a.score)
    })
    for (var i=0; i<sortHighScore.length; i++){
        var li = document.createElement("li")
        li.textContent=sortHighScore[i].score+"-"+sortHighScore[i].initial
       document.getElementById("view-high-score").appendChild(li)
    }
    
})