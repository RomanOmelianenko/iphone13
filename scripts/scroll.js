const links = document.querySelectorAll('.header-menu__item a');

// Используум пакет seamless-scroll-polyfill для кроссбраузерности (теперь во всех браузерах будет работать плавный скрол)
seamless.polyfill();

links.forEach((element, _index, _array) => {
  
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