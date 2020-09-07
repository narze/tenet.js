function Tenet(value) {
  this.value = value
  this._snapshots = []

  this.apply = (fn) => {
    this._snapshots = [...this._snapshots, this.value]
    this.value = fn(this.value)
    return this
  }

  this.invert = () => {
    if (!this._snapshots.length) { throw new Error("Value not invertible")}

    this.value = this._snapshots.pop()

    return this
  }

  return this
}

module.exports = Tenet;
