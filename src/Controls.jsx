export default function Controls({ length, setLength, onGenerate }) {
   return (
      <div className="controls">
         <label>
            Довжина: {length}
            <input
               type="range"
               min="1"
               max="20"
               value={length}
               onChange={(e) => setLength(Number(e.target.value))}
            />
         </label>
         <button onClick={onGenerate}>Згенерувати</button>
      </div>
   );
}
