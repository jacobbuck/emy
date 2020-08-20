const emy = () => {
  const listeners = new WeakSet();

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
