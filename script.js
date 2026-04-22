function handleSubmit(event) {
  event.preventDefault();
  const message = document.getElementById('formMessage');
  message.textContent = 'تم استلام طلبك ✅ سنعاود التواصل معك خلال يوم عمل.';
  event.target.reset();
  return false;
}
