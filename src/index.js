const emy = () => {
  const listeners = new Set();

  const publish = (event) => {
    listeners.forEach((listener) => {
      listener(event);
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
