function Tenet(value, snapshots = []) {
  return {
    value,
    apply: (fn) => {
      return Tenet(fn(value), [...snapshots, value])
    },
    invert: () => {
      return Tenet(snapshots.pop(), snapshots)
    }
  };
}

module.exports = Tenet;
