const emy = () => {
  const listeners = new WeakSet();
  
  const publish = (...args) => {
    listeners.forEach(listener => {
      listener(...args);
    });
  };
  
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => {
      listeners.remove(listener);
    };
  };
  
  return [publish, subscribe];
};

export default emy;
