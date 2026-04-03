import { expect, test } from "vitest";
import { generatePassword } from "./passwordLogic";

test("generatePassword returns password of correct length", () => {
   const password = generatePassword(10);

   // ВИПРАВЛЕНО: тепер очікуємо правильну довжину
   expect(password.length).toBe(10);
});
