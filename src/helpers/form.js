export function validateCredentials(username, password) {
  if (username.length >= 3 && password.length >= 6) {
    return true;
  }
  return false;
}
