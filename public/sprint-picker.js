/* Accessible sprint dropdown behavior shared by Sprint 3 and Sprint 4. */
(() => {
  'use strict';
  const picker = document.querySelector('.sprint-picker');
  if (!picker) return;

  document.addEventListener('pointerdown', event => {
    if (picker.open && !picker.contains(event.target)) picker.open = false;
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && picker.open) {
      picker.open = false;
      picker.querySelector('summary')?.focus();
      event.stopPropagation();
    }
  });
})();
