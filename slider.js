    const images =[
        'images/1.png',
        'images/2.jpg',
        'images/3.jpg',
        'images/4.png',
        'images/5.jpg',
        'images/6.jpg',
        'images/7.png',
        'images/8.jpg',
        'images/9.jpg',

    ]
    let imageIndex = 0;
    const imageElement = document.getElementById('slider-img');
    setInterval(()=>{
        if(imageIndex === images.length){
            imageIndex = 0;
        }
        const imgUrl = images[imageIndex];
        imageElement.setAttribute('src', imgUrl);
    imageIndex++;
    },2000)