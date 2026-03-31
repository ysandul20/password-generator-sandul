import Controls from "./Controls";
import { generatePassword } from "./passwordLogic.";

function App() {
   return (
      <div className="app">
         <h1>Генератор паролів</h1>
         <Controls />
      </div>
   );
}

export default App;
