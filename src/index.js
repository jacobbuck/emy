const emy = () => {
  const listeners = new Map();

  const publish = (event) => {
    listeners.forEach((listener) => {
      listener(event);
    });
  };

  const subscribe = (listener) => {
    const key = {};
    listeners.set(key, listener);
    return () => {
      listeners.delete(key);
    };
  };

  return [publish, subscribe];
};

export default emy;
