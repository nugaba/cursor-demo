import { isValidEmail } from './validator.js';

/**
 * 이메일과 비밀번호로 로그인한다.
 * @param {string} email - 로그인 이메일
 * @param {string} password - 비밀번호
 * @returns {{ success: boolean, error?: string }}
 */
export function login(email, password) {
  if (!isValidEmail(email)) {
    return { success: false, error: '유효하지 않은 이메일 형식입니다.' };
  }
  return { success: true };
}
