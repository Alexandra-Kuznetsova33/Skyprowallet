export function validateAmount(amount) {
  return /^\d+(\.\d{1,2})?$/.test(amount) && parseFloat(amount) > 0;
}

export function validateDescription(desc) {
  return desc.trim().length > 0;
}
