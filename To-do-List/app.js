const input=document.getElementById("input-box");
const listConent=document.getElementById("listContent")

function addTask(){
    if(input.value ===''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listConent.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    input.value="";
    saveData()
}

listConent.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)



function saveData(){
    localStorage.setItem("data", listContent.innerHTML);
}

function showTask(){
    listContent.innerHTML = localStorage.getItem("data");

}

showTask();