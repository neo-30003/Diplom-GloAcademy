const timer = (deadline) => {
  const orderBlocks = document.querySelectorAll(".order");

  const zero = (el) => {
    if (el < 10) {
      return (el = `0${el}`);
    } else {
      return el;
    }
  };

  const getTimeRemaining = () => {
    let dateNow = new Date().getTime();
    let dateStop = new Date(deadline).getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 3600 / 24);
    let hours = Math.floor((timeRemaining / 3600) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    days = zero(days);
    hours = zero(hours);
    minutes = zero(minutes);
    seconds = zero(seconds);

    return { timeRemaining, days, hours, minutes, seconds };
  };

  orderBlocks.forEach((block) => {
    const timerDays = block.querySelector(".count.count_1 > span");
    const timerHours = block.querySelector(".count.count_2 > span");
    const timerMinutes = block.querySelector(".count.count_3 > span");
    const timerSeconds = block.querySelector(".count.count_4 > span");

    let interval;

    const updateClock = () => {
      let getTime = getTimeRemaining();

      timerDays.textContent = getTime.days;
      timerHours.textContent = getTime.hours;
      timerMinutes.textContent = getTime.minutes;
      timerSeconds.textContent = getTime.seconds;

      if (getTime.timeRemaining <= 0) {
        timerDays.textContent = "00";
        timerHours.textContent = "00";
        timerMinutes.textContent = "00";
        timerSeconds.textContent = "00";
        clearInterval(interval);
      }
    };

    interval = setInterval(updateClock, 500);
    updateClock();
  });
};
export default timer;
