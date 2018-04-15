const setTimer = (time) => {
  return {
    restTime: time,
    finish: false,
    tick() {
      if (this.restTime < 1) {
        this.finish = true;
      }
      this.restTime -= 1;
    },
  };
};
export default setTimer;
