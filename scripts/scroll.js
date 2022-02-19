const scrollFunc = () => {
  const links = document.querySelectorAll('.header-menu__item a');
  const linkCharacteristics = document.querySelector('.card-details__link-characteristics');

  const newArray = [...links, linkCharacteristics];
  // console.log('####: newArray', newArray);

  // Используум пакет seamless-scroll-polyfill для кроссбраузерности (теперь во всех браузерах будет работать плавный скрол)
  seamless.polyfill();

  newArray.forEach((element, _index, _array) => {
    
    element.addEventListener('click', (event) => {
      event.preventDefault();

      // Плавный скрол до нужной секции
      const id = element.getAttribute('href').substring(1);
      
      const section = document.getElementById(id);

      if (section) {
        // section.scrollIntoView({
        //   behavior: 'smooth',
        //   block: 'start'
        // })
        seamless.scrollIntoView(section, {
          behavior: 'smooth',
          block: 'start'
        })
        
      } else {
        seamless.scrollIntoView(document.querySelector("#characteristics"), {
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      };
    });
  });
};

scrollFunc();