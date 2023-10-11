export const changeLanguages = () => {
   const langBtn = document.querySelector('#lang');

   langBtn.addEventListener('click', () => {
      let currentLanguage = langBtn.querySelector('span').textContent;

      if (currentLanguage === 'EN') {
         langBtn.querySelector('span').textContent = 'РУ';
      } else {
         langBtn.querySelector('span').textContent = 'EN';
      }
   });
};