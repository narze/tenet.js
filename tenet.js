function Tenet(value) {
  return {
    value,
    apply: (fn) => {
      return Tenet(fn(value))
    }
  };
}

module.exports = Tenet;
