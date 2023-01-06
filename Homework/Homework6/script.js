const arrayOfImages = [];
arrayOfImages.push('https://ichef.bbci.co.uk/news/640/cpsprodpb/8D5E/production/_102609163_animals1.jpg');
arrayOfImages.push('https://static.tildacdn.com/tild3036-6263-4137-b737-633066393363/ae51bd7f1060ad0a3a82.jpg');
arrayOfImages.push('https://media.rmk.ee/photos/static-img.aripaev.ee-5_block.jpg');
arrayOfImages.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc1ZLg2hNgGOys5oiXK6jrXUEtsKfKdRP4MoSxXwwl&s');
arrayOfImages.push('https://www.zoo-penza.ru/upload/iblock/fdc/fdcb0ff2db1a958ce7a672ef6275687b.jpg')

const imgCards = document.querySelectorAll('.grid');

for(let i = 0; i < imgCards.length; i++){
    imgCards[i].setAttribute('src', arrayOfImages[i]);
}

const largeImage = document.querySelector('#largeImg');
largeImage.setAttribute('src', arrayOfImages[4]);

function showThumbnail(newUrl) {
    largeImage.setAttribute('src', newUrl);
}

imgCards.forEach(card => card.addEventListener('mousedown', () => {
    const thumbnailUrl = card.getAttribute('src');
    showThumbnail(thumbnailUrl);
}))