console.log(document);
var headerTitle=document.getElementById('header-title');
headerTitle.textContent='Hello';
console.log(DocumentType);
console.log(document.links);
headerTitle.innerHTML='<h4>Hii</h4>';
var header=document.getElementById('main-header');
header.style.borderBottom='solid 4px #000';
//var items=document.getElementsByClassName('title');
//console.log(items);
//items[0].style.fontWeight='bold';
//items[0].style.color="green";
var items=document.getElementsByClassName('list-group-item');
console.log(items);
items[2].style.backgroundColor="green";
items[0].style.fontWeight='bold';
items[1].style.fontWeight='bold';
items[2].style.fontWeight='bold';
items[3].style.fontWeight='bold';

var li=document.getElementsByTagName('li');
console.log(li);
li.add='Hello sir';
for(var i=0;i<li.length;i++)
{
    li[i].style.fontWeight='bold';
}
li[4].style.color='coral';


var items=document.querySelector('.list-group-item');
console.log(items);
var secondItem=document.querySelector('.list-group-item:nth-child(1)');
secondItem.style.backgroundColor='green';
var nextItem=document.querySelector('.list-group-item:nth-child(2)');
nextItem.style.display='none';

var nthItem=document.querySelectorAll('.list-group-item');
console.log(nthItem);
nthItem[2].style.color='green';
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}