import { useState } from "react";
import Controls from "./Controls";
import { generatePassword } from "./passwordLogic";

function App() {
   const [password, setPassword] = useState("");
   const [length, setLength] = useState(8);

   const handleGenerate = () => {
      const newPassword = generatePassword(length);
      setPassword(newPassword);
   };

   return (
      <div className="app">
         <h1>Генератор паролів</h1>
         <div className="password-display">
            {password || "Натисніть кнопку"}
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
