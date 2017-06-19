var app = function() {
  var ulCat = document.createElement('ul');
  ulCat.classList.add('cat');

  console.log('ulcat',ulCat)

  var liCatName = document.createElement('li');
  liCatName.innerText = "Name: Patch";

  console.log('licatname',liCatName);

  var liCatFavFood = document.createElement('li');
  liCatFavFood.innerText = "Favourite Food: Chicken";

  console.log('licatfavfood', liCatFavFood);

  var liCatImage = document.createElement('li');

  var liCatImageDetails = document.createElement('img');
  liCatImageDetails.width = 500;
  liCatImageDetails.src = "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"



  var catList = document.querySelector('#cats');

  liCatImage.appendChild(liCatImageDetails);

  ulCat.appendChild(liCatName);
  ulCat.appendChild(liCatFavFood);
  ulCat.appendChild(liCatImage);
  catList.appendChild(ulCat);

}

window.onload = app;





