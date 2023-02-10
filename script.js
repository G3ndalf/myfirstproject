let phrases = [
    { text: 'пососать хуйца', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
    { text: 'подрочить', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
    { text: 'пойти посрать', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
    { text: 'купить Астемиру мороженное', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
    { text: 'весь месяц не жаловаться', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
    { text: 'прочитать уже какую нибудь книгу еблан', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
    { text: 'просто пойти нахуй', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
    { text: 'послушать грустные песенки и плакать', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
    { text: 'спрыгнуть с крыши нахуй', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
    { text: 'перевести рандомному человеку в контактах 100 рублев', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' },
    { text: 'перестать париться изза всякой хуйни', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' },
    { text: 'поиздеваться над лучшим другом', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' },
    { text: 'зарандомить хуйню', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' },
    { text: 'весь день лежать смотреть сериалы', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
  for (let i = 0; i <= 2; i = i+1){
    smoothly(phrase, 'textContent', phrases[i].text)
    smoothly(image, 'src', phrases[i].image)
  }