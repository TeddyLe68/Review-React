import { useCallback, useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import PhoneCard from "./components/PhoneCard";
import { usePhoneHook } from "./hooks/phoneHook.js";

function App() {
  const { state, addPhone, deletePhone } = usePhoneHook();
  console.log(state);

  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount(count + 1);
  }, []);

  useEffect(() => {
    increment();
  }, [increment]);
  return (
    <>
      <InputForm addPhone={addPhone} />
      <div className="w-11/12 mx-auto grid grid-cols-4 gap-4">
        {state.data.map((item) => (
          <PhoneCard key={item.id} item={item} deletePhone={deletePhone} />
        ))}
      </div>
    </>
  );
}

export default App;
