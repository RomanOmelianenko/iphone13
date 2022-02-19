const accordeonFunc = () => {
  const characteristicsItems = document.querySelectorAll('.characteristics__item');
  
  characteristicsItems.forEach(item => {
    // Достаём кнопку и блок
    const characteristicsBtn = item.querySelector('.characteristics__title');
    const characteristicsContent = item.querySelector('.characteristics__description');  

    characteristicsBtn.addEventListener('click', () => {
      if (characteristicsContent.classList.contains('open')) {
        // characteristicsContent.classList.remove('open');
        characteristicsContent.style.height = '';
      } else {
        // characteristicsContent.classList.add('open');
        // console.log(characteristicsContent.scrollHeight);
        characteristicsContent.style.height = characteristicsContent.scrollHeight + 'px';
      };  

      characteristicsBtn.classList.toggle('active');
      // Заместь методов classList.add и classList.remove сделаем classList.toggle
      characteristicsContent.classList.toggle('open');
    })
  });
};

accordeonFunc();