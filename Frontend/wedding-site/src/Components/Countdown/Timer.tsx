function calculateTimer(
  currentDate: number
): Array<{ title: string; count: string | number }> {
  const difference = Math.abs(+new Date("2021/08/28") - +new Date());

  let days: number = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours: number = Math.floor((difference / (1000 * 60 * 60)) % 24);
  let minutes: number = Math.floor((difference / 1000 / 60) % 60);
  let seconds: number = Math.floor((difference / 1000) % 60);

  let daysFormat = days < 10 ? `0${days}` : days;
  let hoursFormat = hours < 10 ? `0${hours}` : hours;
  let minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
  let secondsFormat = seconds < 10 ? `0${seconds}` : seconds;

  const countDownArray = [
    {
      title: "Días",
      count: daysFormat,
    },
    {
      title: "Horas",
      count: hoursFormat,
    },
    {
      title: "Minutos",
      count: minutesFormat,
    },
    {
      title: "Segundos",
      count: secondsFormat,
    },
  ];
  return countDownArray;
}

export default calculateTimer;
