module.exports = class OtTool {
  constructor() {
    this.arr = new Array();
  }
  push(id, res) {
    const i = this.check(id);
    if (i == -1) {
      let newResArr = new Array();
      newResArr.push(res);
      this.arr.push([id, newResArr]);
    } else {
      this.arr[i][1].push(res);
    }
    console.log(this.arr);
  }
  pop(id, data) {
    const i = this.check(id);
    if (i != -1) {
      this.arr[i][1].forEach((e) => {
        e.send(data);
      });

      this.arr.splice(i, 1);
    }
  }
  check(id) {
    let index = -1;
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i][0] == id) {
        index = i;
      }
    }
    return index;
  }
};
