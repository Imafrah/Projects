//const Base_url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
const Base_url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"
const drps=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button")
const fromCur=document.querySelector(".from select")
const toCur=document.querySelector(".to select")
const msgs=document.querySelector(".msg");


// for(country in countryList){
//     console.log(country,countryList[country])
// }

for(let select of drps ){//Getting All country code one by one
    for(let curCode  in countryList ){
        let newOP=document.createElement("option")
        newOP.innerText=curCode
        newOP.value=curCode;
        if(select.name=== "from" && curCode ==="USD"){//Strating Getting US doller
            newOP.selected="selected"
        }
        else if(select.name=== "to" && curCode ==="INR"){
            newOP.selected="selected"
        }
        select.append(newOP)
    }
    select.addEventListener("change",(evt) =>{
        upflag(evt.target);
    })
}


const updateRate=async()=>{
    let amount=document.querySelector(".amount input")
    let amVal=amount.value;
    if (amVal===""|| amVal<0){
        amVal=1;
        amount.value="1"
    }
    //console.log(amVal)
    //console.log(fromCur.value.toLowerCase(),toCur.value.toLowerCase())
    //Getting Exchage Rate 
    //const Url=`${Base_url}/${fromCur.value.toLowerCase()}/${toCur.value.toLowerCase()}.json`;
    const Url=`${Base_url}/${fromCur.value.toLowerCase()}.json`;
    let response=await fetch(Url)
    //console.log(response)
    let data=await response.json();

    // let d=await response.json();
    // console.log(d)
    let a=fromCur.value.toLowerCase()
    console.log(a)
    let b=toCur.value.toLowerCase();
    console.log(b)

    // let e=d[a][b]
    // console.log(e)
    // let c=d[`${a}${b}`]
    // console.log(c)


    //let a=d[b[]`${toCur.value.toLowerCase()}`]



    // let r=d[fromCur.value.toLowerCase()[toCur.value.toLowerCase()]]
    // let p=d[toCur.value.toLowerCase()]
    // console.log(p)
    // console.log(r)
    //console.log(r[toCur.value.toLowerCase()])

    //let rate=data[toCur.value.toLowerCase()]

    //console.log(data)//data in respose
    //console.log(rate)//Getting only Conversion Price
    let rate=data[a][b]
    let finalAmu=rate*amVal;
    console.log(finalAmu)
    console.log(amVal)
    msgs.innerText=`${amVal} ${fromCur.value} = ${finalAmu} ${toCur.value}`;
    //msgs.innerText=`${fromCur}=${finalAmu}`
}




const upflag=(ele) =>{//Updata The Flag image  Based on the Selected Country
    let curCode=ele.value;
    console.log(curCode)
    let counCode=countryList[curCode]//IN US
    let newSrc=`https://flagsapi.com/${counCode}/flat/64.png`//Change the Flag
    let img=ele.parentElement.querySelector("img")
    img.src=newSrc;

}


btn.addEventListener("click", (evt)=>{
    evt.preventDefault();//To remove Refresh 
    updateRate()

});



window.addEventListener("load",()=>{
    updateRate();
})