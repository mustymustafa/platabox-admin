export const EMAIL = 'email';
export const PASSWORD = 'password';

export const isEmailValid = (email) =>
  (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.trim()));