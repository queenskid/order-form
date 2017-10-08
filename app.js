'use strict';

var photoArray = [
  ['bag', 'img/bag.jpg'],
  ['Banana Slicer', 'img/banana.jpg'],
  ['Bathroom Stand', 'img/bathroom.jpg'],
  ['Boots', 'img/boots.jpg'],
  ['Breakfast Maker', 'img/breakfast.jpg'],
  ['Gum', 'img/bubblegum.jpg'],
  ['Chair', 'img/chair.jpg'],
  ['Cthulhu', 'img/cthulhu.jpg'],
  ['Dog-Duck', 'img/dog-duck.jpg'],
  ['Dragon', 'img/dragon.jpg'],
  ['Pen', 'img/pen.jpg'],
  ['Pet-Sweep', 'img/pet-sweep.jpg'],
  ['Scissors', 'img/scissors.jpg'],
  ['Shark', 'img/shark.jpg'],
  ['Sweep', 'img/sweep.png'],
  ['Tauntaun', 'img/tauntaun.jpg'],
  ['Unicorn', 'img/unicorn.jpg'],
  ['USB', 'img/usb.gif'],
  ['Water Can', 'img/water-can.jpg'],
  ['Wine Glass', 'img/wine-glass.jpg']
];

var addCartBtnEl = document.getElementById('store-form');
var userBtnEl = document.getElementById('user-form');
Photos.allPhotos = [];
Photos.activeCart = [];
UserData.allUsers = [];

function Photos(name, filePath) {
  this.name = name;
  this.filePath = filePath;
  this.inCart = 0;
  Photos.allPhotos.push(this);
}

function UserData(name, street, city, state, zip, phone, credit) {
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
  this.credit = credit;
  UserData.allUsers.push(this);
}

function cartHandler(event) {
  event.preventDefault();
  console.log('eventHandler called');
  //save cart item
  var item = event.target.items.value;
  console.log(item);
  var amount = parseInt(event.target.quantity.value);
  console.log(event.target);
  for (var i in Photos.allPhotos){
    if (item === Photos.allPhotos[i].name){
      Photos.allPhotos[i].inCart += amount;
      console.log(Photos.allPhotos[i].inCart);
      break;
    }
  }
}

function buyHandler(event) {
  event.preventDefault();
  var name = event.target.name.value;
  var street = event.target.street.value;
  var city = event.target.city.value;
  var state = event.target.state.value;
  var zip = event.target.zip.value;
  var phone = event.target.phone.value;
  var credit = event.target.credit.value;
  new UserData(name, street, city, state, zip, phone, credit);
  for (var i in Product.allProducts){
    if (Product.allProducts[i].inCart > 0){
      Product.activeCart.push(Product.allProducts[i]);
      console.log(Product.activeCart);
    }
  }
  localStorage.setItem('allUsers', JSON.stringify(UserData.allUsers));
  localStorage.setItem('activeCart', JSON.stringify(Product.activeCart));
  window.location.href = 'cart.html';
}

function initialize() {
  for (var i in photoArray){
    new Product(photoArray[i][0], photoArray[i][1]);
  }
}
console.log('event lister enabled');
initialize();

addCartBtnEl.addEventListener('submit', cartHandler);
userBtnEl.addEventListener('submit', buyHandler);
