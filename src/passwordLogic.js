const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";

export const generatePassword = (length = 8) => {
   // Рефакторинг: додали цифри для надійності
   const allChars = LOWERCASE_CHARS + NUMBERS;
   let password = "";

   // УВАГА БАГ: цикл генерує на 1 символ менше, ніж треба (length - 1)
   for (let i = 0; i < length - 1; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
   }

   return password;
};
