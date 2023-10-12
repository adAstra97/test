export const toggleMenu = () => {
   const burger = document.querySelector('.burger');

   burger.addEventListener('click', () => {
      const menu = document.querySelector('.menu-mobile__container');
      menu.classList.toggle('none');
      burger.classList.toggle('close');
      window.scrollTo(0, 0);

      if (document.body.style.overflow !== 'hidden') {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = 'auto';
      }
   });
};