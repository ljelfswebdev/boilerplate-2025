export function validateForm(form) {
    let isValid = true;
  
    // Clear old errors
    const oldErrors = form.querySelectorAll('.form-error');
    oldErrors.forEach((el) => el.remove());
  
    const fields = form.querySelectorAll('[required]');
  
    fields.forEach((field) => {
      const value = field.value?.trim();
  
      // Reset outline
      field.style.outline = '2px solid transparent';
  
      // Remove any previous input listener
      field.removeEventListener('input', handleInputFix);
  
      if (!value) {
        isValid = false;
  
        field.style.outline = '2px solid #ff0000';
  
        const hasError = field.parentElement.querySelector('.form-error');
        if (!hasError) {
          const error = document.createElement('span');
          error.classList.add('form-error');
          error.textContent = '*field required';
          error.style.color = '#ff0000';
          error.style.fontSize = '14px';
          error.style.marginTop = '4px';
          field.parentElement.appendChild(error);
        }
  
        field.addEventListener('input', handleInputFix);
      }
    });
  
    return isValid;
  }
  
  // 🛠 Updated input fix handler
  function handleInputFix(e) {
    const field = e.target;
    const value = field.value?.trim();
  
    if (value) {
      // ✅ Remove red error outline
      field.style.outline = '2px solid var(--primary)';
  
      // ✅ Remove error message
      const error = field.parentElement.querySelector('.form-error');
      if (error) {
        error.remove();
      }
  
      field.removeEventListener('input', handleInputFix);
    }
  }