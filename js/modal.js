// DOMツリーが構築されたときに実行(他のJavascriptの読込も完了した後に実行します)
document.addEventListener(
  'DOMContentLoaded',
  function () {
    const openModal = document.querySelector('.js-modal-open');
    const closeModal = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const body = document.body;
    const input = document.getElementById('modal-input');
    const form = document.getElementById('modal-form');


    const close = () => {
      modal.classList.remove('show-modal');
      body.style.overflow = '';
      body.style.paddingRight = '0px';
    };

    const open = () => {
      let clientWidth = body.clientWidth;
      modal.classList.add('show-modal');
      body.style.overflow = ' hidden';
      let noScrollBarWidth = body.clientWidth;

      diff = noScrollBarWidth - clientWidth;
      if (diff > 0) {
        body.style.paddingRight = diff + 'px';
      }
    };

    // 開く
    openModal.addEventListener('click', () => {
      open();
    });

    // 閉じる
    closeModal.addEventListener('click', () => {
      close();
    });

    // 背景クリックで閉じる
    window.addEventListener('click', (e) => {
      if (e.target == modal) {
        close();
      }
    });

    // フォームイベント
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (input.value.trim() === '') {
        alert('何か入力してください');
        return;
      }
      alert(input.value);
      close();
    });

  },
  false
);
