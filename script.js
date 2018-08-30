let boxTop = 300;
let boxLeft = 300;

'use strict';

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  console.log('keydown event\n\n' + 'key: ' + keyName);

if (keyName === "ArrowUp") 
{boxTop -= 10}
else if (keyName === "ArrowDown") 
{boxTop += 10}
else if (keyName === "ArrowLeft")
{boxLeft -= 10}
else if (keyName === "ArrowRight")
{boxLeft += 10}

document.getElementById("link").style.top = boxTop + "px";
document.getElementById("link").style.left = boxLeft + "px";

});