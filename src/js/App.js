import meme from '../images/meme.jpg';

const myIcon = document.createElement('img');
myIcon.src = meme;
myIcon.className = 'article__image';
myIcon.style.width = `${75}px`;
myIcon.style.height = `${75}px`;
document.querySelector('.article__description').insertAdjacentElement('beforebegin', myIcon);
