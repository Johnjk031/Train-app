// DECLARING SOME GLOBAL VARIABLES FOR CLEAN CODE

const form = document.getElementById('form');
const searchQuery = document.querySelector('#query');
const amount = document.querySelector('#amount');
const imgList = document.querySelector('#images');
const url = 'https://api.flickr.com/services/rest?method=flickr.photos.search';
const key = config.MY_API_KEY
const bigImg = document.getElementById('img-big');
let text = document.getElementById('descr-par')
const privious = document.querySelector('#privious');
const next = document.querySelector('#next');
let both = document.getElementById('back-forward');
let arrayList = [];
let page = 0;


// AD EVENTLISTNER TO TEXTINPUT

form.addEventListener('submit', (event) => {
  event.preventDefault();
  getImages(searchQuery.value, amount.value);
  overlay.innerHTML = "";
  // CHANGE INSTRUCTION TEXT INCASE AMOUNT IS LESS THAN 0

  if (searchQuery.value === "") {
    text.innerHTML = "please type a theme"
    imgList.innerHTML = "";
    both.style.opacity = 0;
  }
  else {
    text.innerHTML = "Please type in the amount & theme of the pictures you wish to see"
  }
})

// MAKE OVERLAY DISAPPEAR ON CLICK

overlay.addEventListener('click', () => {
  overlay.innerHTML = "";

})




// CREATING A LIST FOR SMALL IMAGES 

let addImgs = (images) => {
  imgList.innerHTML = "";
  let arrayList = [];
  let page = 0
  images.forEach(stuff => {
    const imgListItem = document.createElement('li');
    imgListItem.classList.add('img-class');
    imgListItem.innerHTML = `<img class="im-class" src="https://farm${stuff.farm}.staticflickr.com/${stuff.server}/${stuff.id}_${stuff.secret}.jpg">`  
    arrayList.push(imgListItem);
    if (amount.value > 10){
      both.style.opacity = 1;
      both.style.display = 'flex'
      }
      else {
        both.style.display = 'none';
      }
    // CALLING ON BIG IMAGE TO APEAR

    imgListItem.addEventListener('click', () => {
      showImage(imgListItem.innerHTML);
      scrollTopFunction();
    })

    
    })

    // PAGINATION FUNCTION  
  
    for (let i = 0; i < page + 10; i++) {
      imgList.appendChild(arrayList[i]); 
    }

    // NEXT BUTTON
  
    next.addEventListener('click', function() {
      scrollTopFunction();
      page == arrayList.length - 10 ? (page = 0) : (page += 10);
      imgList.innerHTML = "";
      for (let i = page; i < page + 10; i++) {
          imgList.appendChild(arrayList[i]);
      }
  });    

   // PRIVIOUS BUTTON

  privious.addEventListener('click', function() {
    scrollTopFunction();
    page == 0 ? (page = arrayList.length - 10) : (page -= 10);
    imgList.innerHTML = "";
    for (let i = page; i < page + 10; i++) {
        imgList.appendChild(arrayList[i]);
    }
});

}




// SCROLLING BACK TO TOP ON CLICK

function scrollTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// DECLARING INNER-HTML OF BIG IMAGE 

let showImage = (imageUrl) => {
  console.log(imageUrl);
  let overlay = document.querySelector('#overlay');
  overlay.innerHTML = `${imageUrl}`
  overlay.style.opacity = 1;
}



// FETCH THE API-URL 

async function getImages(x, y) {
  const response = await fetch(url + `&text=${x}&sort=relevance&api_key=${key}&per_page=${y}&page=1&format=json&nojsoncallback=1`);
  const data = await response.json();
  stuff = data.photos.photo;
  addImgs(stuff) // ta bort stuff om du ska byta metod
  console.log(stuff)
}