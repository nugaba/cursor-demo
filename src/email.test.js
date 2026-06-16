import { test } from 'node:test';
import assert from 'node:assert';
import { extractEmails, isValidEmail, getValidEmails, uniqueValidEmails } from './email.js';

test('extractEmails returns emails from members', () => {
  const members = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@test.org' },
  ];
  assert.deepStrictEqual(extractEmails(members), ['alice@example.com', 'bob@test.org']);
});

test('extractEmails returns empty array for non-array input', () => {
  assert.deepStrictEqual(extractEmails(null), []);
  assert.deepStrictEqual(extractEmails(undefined), []);
});

test('isValidEmail validates email format', () => {
  assert.strictEqual(isValidEmail('user@example.com'), true);
  assert.strictEqual(isValidEmail('invalid'), false);
  assert.strictEqual(isValidEmail(''), false);
  assert.strictEqual(isValidEmail(null), false);
});

test('getValidEmails returns only valid emails', () => {
  const members = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'not-an-email' },
    { name: 'Carol', email: 'carol@test.org' },
  ];
  assert.deepStrictEqual(getValidEmails(members), ['alice@example.com', 'carol@test.org']);
});

test('getValidEmails returns empty array for non-array input', () => {
  assert.deepStrictEqual(getValidEmails(null), []);
});

test('uniqueValidEmails removes duplicate valid emails', () => {
  const members = [
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Alice2', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@test.org' },
    { name: 'Invalid', email: 'not-an-email' },
  ];
  assert.deepStrictEqual(uniqueValidEmails(members), ['alice@example.com', 'bob@test.org']);
});

test('uniqueValidEmails returns empty array for non-array input', () => {
  assert.deepStrictEqual(uniqueValidEmails(null), []);
});
