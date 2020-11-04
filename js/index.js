console.log('hola mundo')
      console.log(document.querySelector('.header-menu-list'));

      const menu = document.querySelector('.header-menu-list');
      console.log(menu);
      const burgerButton = document.querySelector('#burger-menu');

      burgerButton.addEventListener('click', showHide)

      function showHide() {
        if(menu.classList.contains('is-active')) {
          menu.classList.remove('is-active');
        }else {
          menu.classList.add('is-active');
        }
      }