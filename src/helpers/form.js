export function validateCredentials(email, password) {
  if (email.length >= 3 && password.length >= 6) {
    return true;
  }
  return false;
}
