const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const formatDate = (date) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (day.length < 2) day = "0" + day;

  return [day, monthNames[month], year].join("-");
};

export { getRandomInt, formatDate };
