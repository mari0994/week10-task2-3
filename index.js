let message = () => console.log('Я учу JavaScript!');
message();

const image = document.getElementById('image')

function nextImage(){
    image.src = './assets/images/dog2.jpeg'
}

function previousImage(){
    image.src = './assets/images/dog1.jpeg'
}