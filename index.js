let showDog= function(){
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json()) 
  .then(data => {
    let img = document.createElement('img');
    img.src = data.message;
    img.className = "dog";
    document.body.append(img);
  }).catch(err => {console.log(response.status)});
}