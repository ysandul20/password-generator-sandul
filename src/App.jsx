import { useState } from "react";
import Controls from "./Controls";
import { generatePassword } from "./passwordLogic";

function App() {
   const [password, setPassword] = useState("");
   const [length, setLength] = useState(8);

   const handleGenerate = () => {
      if (length < 4) {
         alert("Пароль занадто короткий! Мінімальна довжина: 4");
         return;
      }
      const newPassword = generatePassword(length);
      setPassword(newPassword);
   };

   // Логіка очищення пароля
   const handleClear = () => {
      setPassword("");
   };

   return (
      <div className="app">
         <h1>Генератор паролів</h1>
         <div className="password-display">
            {password || "Очікування генерації..."} {/* Змінили текст */}
            {/* Додали кнопку очищення в те саме місце, де в іншій гілці кнопка копіювання */}
            <button onClick={handleClear} disabled={!password}>
               Очистити
            </button>
         </div>
         <Controls
            length={length}
            setLength={setLength}
            onGenerate={handleGenerate}
         />
      </div>
   );
}

export default App;
