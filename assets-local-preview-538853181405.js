// Keep the replica's forms local. No subscriptions or contact requests are sent.
document.addEventListener('submit', (event) => {
  if (!(event.target instanceof HTMLFormElement) || ['aeris-quote-form', 'reference-project-form'].includes(event.target.id)) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  const form = event.target;
  if (!form.reportValidity()) return;
  let feedback = form.querySelector('[data-local-feedback]');
  if (!feedback) {
    feedback = document.createElement('p');
    feedback.dataset.localFeedback = '';
    feedback.setAttribute('role', 'status');
    feedback.style.cssText = 'font:inherit;margin-top:12px;grid-column:1/-1';
    form.append(feedback);
  }
  feedback.textContent = 'This is a local preview. Your email has not been submitted.';
}, true);
