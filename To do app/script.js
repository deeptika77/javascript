function addTask(){
    const textInput=document.getElementById("textInput").value 
    if(textInput==""){
        alert("Please Enter a task")
    }
    else{
        const taskDiv=document.createElement("div")
        const taskText=document.createElement("h3")
        taskText.textContent=textInput
        // textInput ie input box ma enter gareko data h3 block create gareko ie tasktest ma gayera bascha  
        const doneBtn=document.createElement("button")
        doneBtn.textContent="Done"
        doneBtn.onclick=function(){
            taskText.style.textDecoration= taskText.style.textDecoration=="line-through"?"none":"line-through"
            // task text ko style line through chaina bhane line through banaucha. Working: tesko style line through ho ki nai check garcha ho bhane kei gardraina bhayena bhane line through banaucha 

        }
        const delBtn=document.createElement("button")
        delBtn.textContent="Delete"
        delBtn.onclick=function(){
            taskDiv.remove()
        }
        taskDiv.appendChild(taskText)
        // tasktext bhanni element ja ni huna sakyo teslai taskDiv bhitra hancha appendChild le 
        taskDiv.appendChild(doneBtn)
        taskDiv.appendChild(delBtn)
        document.getElementById("tasks").appendChild(taskDiv)
        document.getElementById("textInput").value=""


    }
}