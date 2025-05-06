import { faker } from '@faker-js/faker';

export function generateValidEmail(): string {
    const randomPart = Math.random().toString(36).substring(2, 6);
    return `user_${randomPart}@example.com`;
}

export function generateValidPassword(): string {
    const randomPart = Math.random().toString(36).substring(2, 6);
    return `pass_${randomPart}`;
}

export function generatePhrase(): string {
    const word1 = faker.word.sample();
    const word2 = faker.word.sample();
    const word3 = faker.word.sample();
    return `${word1} ${word2} ${word3}`;
}