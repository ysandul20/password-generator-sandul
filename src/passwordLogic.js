const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";

export const generatePassword = (length = 8) => {
   const allChars = LOWERCASE_CHARS + NUMBERS;
   let password = "";

   // FIXED: змінили length - 1 назад на length
   for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
   }

   return password;
};
