
var kittens = [
{
  name: "Poppy",
  favFood: "chicken",
  image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"
},
{
  name: "Boba",
  favFood: "Sock fluff",
  image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"
},
{
  name: "Barnaby",
  favFood: "Tuna",
  image: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"
},
{
  name: "Max",
  favFood: "Whiskas Temptation",
  image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"
},


]

var cat = function(name,food,image) {
  var ulCat = createCatUL();
  var liCatName = createCatName(name);
  var liCatFavFood = createCatFavFood(food);
  var liCatImage = createCatImage(image);

  var catList = document.querySelector('#cats');
  appendElements(catList,ulCat, liCatName,liCatFavFood, liCatImage);

}

var createCatUL = function() {

  var ulCat = document.createElement('ul');
  ulCat.classList.add('cat');
  return ulCat;
}

var createCatName = function(name) {
  var liCatName = document.createElement('li');
  liCatName.innerText = "Name: Patch";
  return liCatName;
}


var createCatFavFood = function(food) {  
  var liCatFavFood = document.createElement('li');
  liCatFavFood.innerText = "Favourite Food: Chicken";
  return liCatFavFood;
}

var createCatImage = function(image) {
  var liCatImage = document.createElement('li');

  var liCatImageDetails = document.createElement('img');
  liCatImageDetails.width = 500;
  liCatImageDetails.src = image
  liCatImage.appendChild(liCatImageDetails);
  return liCatImage;
}

var appendElements = function(catList,ulCat, liCatName,liCatFavFood, liCatImage) {

  ulCat.appendChild(liCatName);
  ulCat.appendChild(liCatFavFood);
  ulCat.appendChild(liCatImage);
  catList.appendChild(ulCat);
}

var app = function() {

  for (var kitten of kittens) {
    console.log("name,food,",kitten.name, kitten.favFood)
    cat(kitten.name, kitten.favFood, kitten.image);
  }
}

window.onload = app;

