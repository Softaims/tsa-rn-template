export function validateEmail(email: string): boolean {
  if (!email) return false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateName(firstName: string, lastName: string): boolean {
  const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

  if (
    !firstName.length ||
    !lastName.length ||
    firstName.trim().length <= 1 ||
    lastName.trim().length <= 1 ||
    !nameRegex.test(firstName) ||
    !nameRegex.test(lastName)
  ) {
    return false;
  }

  return true;
}

export function validatePassword(password: string): string[] {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long.");
  }

  if (!/[0-9]/.test(password)) {
    errors.push("Password must contain at least one digit.");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter.");
  }

  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter.");
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push("Password must contain at least one special character.");
  }

  return errors;
}

export function validateUsername(username: string): boolean {
  const usernameRegex = /^[a-zA-Z0-9._]+$/;

  if (!username.length || username.length < 3 || !usernameRegex.test(username)) {
    return false;
  }

  return true;
}