var d=document.getElementById('centro');
d.addEventListener('click', function(e){
e.target.innerHTML='<h1>centro<h1>';
d.style.color='red';
d.style.fontSize='20px';
});




var arrayTd=[];
arrayTd=document.getElementsByTagName('td');
for(var i=0; i<arrayTd.length;i++){
arrayTd.addEventListener('click',function(){
arrayTd.style.backgroundColor='green';
})
}


const centro=document.querySelector(#centro);
const testoHTML='<h1>centro!<h1>';
centro.addEventListener('click', function(e){
e.insertAdjacentHTML('afterbegin',testoHTML);
});

alert('buongiorno');
