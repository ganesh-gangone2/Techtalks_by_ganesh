let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContainer = document.getElementById("chatContainer")
let userInput = document.getElementById("userInput")
let sendMsgBtn = document.getElementById("sendMsgBtn")
let p = chatbotMsgList.length

let n = 0

function po() {
    let inpuContainer = document.createElement("div")
    inpuContainer.classList.add("msg-from-chatbot-container")
    chatContainer.appendChild(inpuContainer)

    let userInpur = document.createElement("span")
    userInpur.textContent = chatbotMsgList[n]
    userInpur.classList.add("msg-from-chatbot")
    inpuContainer.appendChild(userInpur)
    n = n + 1
}

sendMsgBtn.onclick = function() {
    let inputContainer = document.createElement("div")
    inputContainer.classList.add("msg-to-chatbot-container")
    chatContainer.appendChild(inputContainer)

    let userInputr = document.createElement("span")
    userInputr.textContent = userInput.value
    userInputr.classList.add("msg-to-chatbot")
    inputContainer.appendChild(userInputr)
    po();
    userInput.value = ""
}