import { useMemo, useState } from "react";

function ProxyComponent() {
  const [state, setState] = useState({
    user: { name: "John", details: { age: 25 } },
  });

  const stateProxy = useMemo(() => {
    return new Proxy(state, {
        set(target, prop, value) {            
            target[prop] = value;
            setState({ ...state });
            return true;
        },
        get(target, prop) {
          if (typeof target[prop] === "object") {
            return new Proxy(target[prop], this); 
          }

          return target[prop];
        },
      });
  }, [state]);

  const changeAge = () => {
    stateProxy.user.details.age = 30; 
  };  

  return (
    <div>
      <p>{state?.user?.details?.age}</p>
      <button onClick={changeAge}>Yaşı Değiştir</button>
    </div>
  );
}

export default ProxyComponent;
