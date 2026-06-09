// ==========================
// MATRIX EFFECT
// ==========================

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters =
"アァカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const fontSize = 14;
const columns = canvas.width / fontSize;

const drops = [];

for(let i=0;i<columns;i++){
drops[i]=1;
}

function drawMatrix(){

ctx.fillStyle="rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="#00ff88";
ctx.font=fontSize+"px monospace";

for(let i=0;i<drops.length;i++){

const text =
letters[Math.floor(Math.random()*letters.length)];

ctx.fillText(
text,
i*fontSize,
drops[i]*fontSize
);

if(
drops[i]*fontSize > canvas.height &&
Math.random()>0.975
){
drops[i]=0;
}

drops[i]++;
}
}

setInterval(drawMatrix,35);

// ==========================
// BOOT SCREEN
// ==========================

const enterBtn =
document.getElementById("enterBtn");

const bootScreen =
document.getElementById("bootScreen");

const terminalContainer =
document.getElementById("terminalContainer");

enterBtn.addEventListener("click",()=>{

bootScreen.style.display="none";

terminalContainer.classList.remove("hidden");

typeText(
"Welcome Agent...\nType 'help' to begin.\n"
);

});

// ==========================
// TERMINAL
// ==========================

const terminal =
document.getElementById("terminal");

const commandInput =
document.getElementById("commandInput");

function print(text,className="response"){

const div=document.createElement("div");
div.className=className;
div.textContent=text;

terminal.appendChild(div);

terminal.scrollTop=
terminal.scrollHeight;
}

function typeText(text){

let i=0;

const interval=setInterval(()=>{

if(i<text.length){

terminal.innerHTML+=text.charAt(i);

terminal.scrollTop=
terminal.scrollHeight;

i++;

}else{
clearInterval(interval);
}

},20);
}

// ==========================
// COMMANDS
// ==========================

const commands={

help:`
Available Commands

help
about
projects
skills
contact
clear
hack
`,

about:`
Ghost Protocol v1.0

Cyberpunk Portfolio Terminal

Built by:Arju
HTML
CSS
JavaScript
`,

skills:`
Frontend Development
UI Design
HTML
CSS
JavaScript
Creative Coding
`,

contact:`
LinkedIn:
linkedin.com/in/arju-chahal-968111409

GitHub:
github.com/Aarura007
`,

hack:`
Accessing Secure Servers...

██████████ 100%

Access Granted
`
};

commandInput.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

const cmd=
commandInput.value.trim().toLowerCase();

print(
"ghost@protocol:~$ "+cmd,
"command"
);

if(cmd==="clear"){

terminal.innerHTML="";

}

else if(cmd==="projects"){

print("PROJECT EXPLORER");

print("▶ Portfolio Game");
print("▶ Ghost Protocol");

}

else if(commands[cmd]){

print(commands[cmd]);

}

else{

print(
"Unknown Command. Type 'help'"
);

}

commandInput.value="";
}

});