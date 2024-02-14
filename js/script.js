$(function(){
	$(".typed").typed({
		strings: ["Hello guys,", "let's play a game. ", "You have ONLY 30 seconds"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 50,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 1,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});



let playerone = document.querySelector(".playerone")
let playeronemen = document.querySelector(".playeronemen")
let playeroneinput = document.querySelector(".playeroneinput")
let playeronebtn = document.querySelector(".playeronebtn")
let playeroneerro = document.querySelector(".playeroneerro")

let playertwo = document.querySelector(".playertwo")
let playertwomen = document.querySelector(".playertwomen")
let playertwoinput = document.querySelector(".playertwoinput")
let playertwobtn = document.querySelector(".playertwobtn")
let playertwoerro = document.querySelector(".playertwoerro")
let success = document.querySelector(".success")
let chance = document.querySelector(".chance")
let successone = document.querySelector(".successone")

let playerthree = document.querySelector(".playerthree")
let playerthreeman = document.querySelector(".playerthreeman")
let playerthreeinput = document.querySelector(".playerthreeinput")
let playerthreebtn = document.querySelector(".playerthreebtn")
let playerthreeerro = document.querySelector(".playerthreeerro")
let successs = document.querySelector(".successs")
let chancee = document.querySelector(".chancee")
let successtwo = document.querySelector(".successtwo")








let playeronevalue;
let chancevalue = 3
let chanceevalue = 3


playeronebtn.addEventListener("click",()=>{
    if(playeroneinput.value){
       if(playeroneinput.value - 10 ){
            if(playeroneinput.value > 0 && playeroneinput.value < 10){
                playeronevalue = playeroneinput.value
                playertwo.style.display = "block"
                // playerthree.style.display = "block"
                playerone.style.display = "none"
            }else{
                playeroneerro.innerHTML = "Please Enter a number between 1 to 9"
                
            }
       }else{
        playeroneerro.innerHTML = "Please Enter Number"
       }
    }else{
        playeroneerro.innerHTML = "Please Enter Some Value"
    }
})

playertwobtn.addEventListener("click",()=>{
    if(playertwoinput.value){
       if(playertwoinput.value - 10 ){
            if(playertwoinput.value > 0 && playertwoinput.value < 10){
               if(playertwoinput.value == playeronevalue){
                    success.innerHTML = "Two Win"
               }else{
                if(chancevalue != 1 ){
                    chancevalue-- 
                    chance.innerHTML = chancevalue
                }else{
                    success.innerHTML = "Lost"
                    chance.innerHTML = ""
                    playerthree.style.display = "block"
                }
                
               }
            }else{
                playertwoerro.innerHTML = "Please Enter a number between 1 to 9"
            }
       }else{
        playertwoerro.innerHTML = "Please Enter Number"
       }
    }else{
        playertwoerro.innerHTML = "Please Enter Some Value"
    }
})


playerthreebtn.addEventListener("click",()=>{
    if(playerthreeinput.value){
       if(playerthreeinput.value - 10 ){
            if(playerthreeinput.value > 0 && playerthreeinput.value < 10){
               if(playerthreeinput.value == playeronevalue){
                    successs.innerHTML = "Three Win"
               }else{
                if(chanceevalue != 1 ){
                    chanceevalue-- 
                    chancee.innerHTML = chanceevalue
                }else{
                    successs.innerHTML = "Lost"
                    chancee.innerHTML = ""
                }
                
               }
            }else{
                playerthreeerro.innerHTML = "Please Enter a number between 1 to 9"
            }
       }else{
        playerthreeerro.innerHTML = "Please Enter Number"
       }
    }else{
        playerthreeerro.innerHTML = "Please Enter Some Value"
    }
})



let counter = document.querySelectorAll(".counter")
let countArr = Array.from(counter)

countArr.map((item)=>{
    let count = 0;

function abc(){
   
    count++
    if(count <= item.dataset.number){
        item.innerHTML = count
    }

}

let stop = setInterval(()=>{
    abc()
},item.dataset.speed / item.dataset.number)

})
