'use strict';

///////////form Contant
let formShop=document.getElementById('shopForm');

formShop.addEventListener('submit',interData);
///////////table contant
let tableHead=document.getElementById('headTab');
let tableboad=document.getElementById('boadTab');
let tableFoot=document.getElementById('footTab');

let arrBooks=[];

function ShopBook(nameBo,priceBo){
  this.bookName=nameBo;
  this.bookPrice=priceBo;
  this.bookPage=renderPage(1,500);

  arrBooks.push(this);

}

function renderPage(min,max){
  return Math.floor(Math.random() * (max - min) + min);
}


function interData(event){
  event.preventDefault();

  let nameBoo=event.target.namBook.value;
  let priceBoo=event.target.priceSelect.value;

  new ShopBook(nameBoo,priceBoo);
  renderBoady();
  saveBook();
}
////////////////render table contant

function renderHeader(){
  tableHead.innerHTML='';
  let trHead=document.createElement('tr');
  tableHead.appendChild(trHead);

  let thEl1=document.createElement('th');
  trHead.appendChild( thEl1);
  thEl1.textContent='book Name';

  let thEl2=document.createElement('th');
  trHead.appendChild(thEl2);
  thEl2.textContent='book Price';

  let thEl3=document.createElement('th');
  trHead .appendChild(thEl3);
  thEl3.textContent='book Page';

}
renderHeader();


function renderBoady(){
  tableboad.innerHTML='';
  let totalSum=0;
  for (let i = 0; i < arrBooks.length; i++) {
    let trBod=document.createElement('tr');
    tableboad.appendChild(trBod);

    let tdNam=document.createElement('td');
    trBod.appendChild(tdNam);
    tdNam.textContent=arrBooks[i].bookName;

    let tdPri=document.createElement('td');
    trBod.appendChild(tdPri);
    tdPri.textContent=arrBooks[i].bookPrice;

    let tdPag=document.createElement('td');
    trBod.appendChild(tdPag);
    tdPag.textContent=arrBooks[i].bookPage;

    totalSum=totalSum+parseInt(arrBooks[i].bookPrice);

  }
  console.log(totalSum);
  renderFooter(totalSum);
}


function renderFooter(sum){
  tableFoot.innerHTML='';
  let trFoot=document .createElement('tr');
  tableFoot.appendChild(trFoot);

  let tdFoot=document.createElement('td');
  trFoot.appendChild(tdFoot);
  tdFoot.textContent=`Total Price ${sum}`;
}



function saveBook(){
  let bookCon=JSON.stringify(arrBooks);
  localStorage.setItem('bookData',bookCon);
}

function readSaveBook(){
  let readBoo=localStorage.getItem('bookData');
  let shopObj=JSON.parse(readBoo);
  if(shopObj !== null){
    for (let i = 0; i < shopObj.length; i++) {
      new ShopBook(shopObj[i].bookName,shopObj[i].bookPrice);

    }
  }renderBoady();
}

readSaveBook();
