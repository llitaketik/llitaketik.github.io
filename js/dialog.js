document.addEventListener('DOMContentLoaded', () => {
  const modalsBtnOpen = document.querySelectorAll('.js-modal-open'),
      modalsBtnClose = document.querySelectorAll('.js-modal-close'),
      overlay = document.querySelector('.js-overlay'),
      body = document.querySelector('body');

  for (let i = 0; i < modalsBtnOpen.length; i++) {
    const item = modalsBtnOpen[i],
        modalId = item.dataset.modal,
        modal = document.getElementById(modalId),
        modalContent = modal.querySelector('.js-modal-content'),
        modalClose = modal.querySelector('.js-modal-close');

    item.addEventListener('click', () => {
      body.classList.add('is-no-scroll');
      overlay.classList.remove('is-hidden');
      modal.classList.remove('is-hidden');
      modalContent.focus();
      modalContent.addEventListener('keydown', (event) => {
        switch (event.keyCode) {
          case 9: {
            const focusableElements = modal.querySelectorAll('a, label, input, select, button, .js-modal-content');
            if (!event.shiftKey && focusableElements[focusableElements.length - 1] === document.activeElement) {
              event.preventDefault();
              focusableElements[0].focus();
            } else if (event.shiftKey && focusableElements[0] === document.activeElement) {
              event.preventDefault();
              focusableElements[focusableElements.length - 1].focus();
            }
            break;
          }
          case 27:
            modalClose.click();
            break;
          default:
            break;
        }
      });
    });
  }

  for (let i = 0; i < modalsBtnClose.length; i++) {
    const item = modalsBtnClose[i],
        modalId = item.dataset.modal,
        modal = document.getElementById(modalId);

    item.addEventListener('click', () => {
      body.classList.remove('is-no-scroll');
      overlay.classList.add('is-hidden');
      modal.classList.add('is-hidden');
      document.querySelector(`.js-modal-open[data-modal="${modalId}"]`).focus();
    });
  }

  document.addEventListener('click', (e) => {
    const modalsOpen = document.querySelector('.modal:not(.is-hidden)');
    if (!e.target.closest('.modal') && !e.target.classList.contains('js-modal-open')
        && body.classList.contains('is-no-scroll')) {
      modalsOpen.querySelector('.js-modal-close').click();
    }
  });
});
