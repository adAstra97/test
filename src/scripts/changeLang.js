export const changeLanguages = () => {

   const langBtn = document.querySelector('#lang');
   const langBtnMobile = document.querySelector('#lang-mobile');

   const toggleLanguage = (btn) => {
      let currentLanguage = document.documentElement.getAttribute('lang');

      if (currentLanguage === 'en') {

         document.documentElement.setAttribute('lang', 'ru');
         if (btn.querySelector('span') !== null) {
            btn.querySelector('span').textContent = 'РУ';
         }
      } else {
         document.documentElement.setAttribute('lang', 'en');
         if (btn.querySelector('span') !== null) {
            btn.querySelector('span').textContent = 'EN';
         }
      }
   };

   langBtn.addEventListener('click', () => toggleLanguage(langBtn));
   langBtnMobile.addEventListener('click', () => toggleLanguage(langBtnMobile));

};