const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');

submitBtn?.addEventListener('click', () => {
  formMessage.textContent = 'تم استلام طلبك ✅ سنرسل لك خطة مبدئية خلال 24 ساعة.';
});
