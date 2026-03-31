export const generatePassword = (length = 8) => {
   const chars = "abcdefghijklmnopqrstuvwxyz";
   let password = "";
   for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
   }
   return password;
};
