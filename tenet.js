function Tenet(value, snapshots = []) {
  return {
    value,
    apply: (fn) => {
      return Tenet(fn(value), [...snapshots, value])
    },
    invert: () => {
      if (!snapshots.length) { throw new Error("Value not invertible")}
      return Tenet(snapshots.pop(), snapshots)
    }
  };
}

module.exports = Tenet;
