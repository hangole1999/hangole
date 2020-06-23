
import vue from 'vue';

const execFunc = (func, ...args) => {
  if (typeof func === 'function') {
    return func(...args);
  }
};

const storageEach = (func) => new Promise((resolve, reject) => {
  let storage;
  try {
    storage = window['localStorage'];
    let x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);

    resolve(func(storage));
  } catch (error) {
    window.console.error('storageEach', error);
    reject(error);
  }
});

const validateEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

const timeformatDiffNow = (timestamp) => {
  if (!timestamp) {
    return 'Unknown times ago';
  }

  let result = '';
  let timeValue = 0;

  try {
    timeValue = parseInt(timestamp);
  } catch (error) {
    window.console.error(error);
  }

  if ((`${timeValue}`).length < 13) {
    timeValue *= 1000;
  }

  if (isNaN(timeValue)) {
    timeValue = 0;
  }

  timeValue -= 1000;

  let date = new Date(Date.now() - timeValue);

  let second = Math.floor(date % (60000) / (1000));
  let minute = Math.floor(date % (3600000) / (60000));
  let hour = Math.floor(date % (86400000) / (3600000));
  let day = Math.floor(date / (86400000));
  let month = date.getMonth();
  let year = date.getFullYear() - 1970;

  if (year > 0) {
    result = `${year} years ago`;
  } else if (month > 0) {
    result = `${month} months ago`;
  } else if (day > 0) {
    result = `${day} days ago`;
  } else if (hour > 0) {
    result = `${hour} hours ago`;
  } else if (minute > 0) {
    result = `${minute} min ago`;
  } else if (second > 0) {
    result = `${second} sec ago`;
  } else {
    result = 'just now';
  }

  return result;
};

const timeformatObjectDiffNow = (timestamp) => {
  if (!timestamp) {
    return {
      text: 'Unknown times ago'
    };
  }

  let time = undefined;
  let text = '';
  let timeValue = 0;

  try {
    timeValue = parseInt(timestamp);
  } catch (error) {
    window.console.error(error);
  }

  if ((`${timeValue}`).length < 13) {
    timeValue *= 1000;
  }

  if (isNaN(timeValue)) {
    timeValue = 0;
  }

  timeValue -= 1000;

  let date = new Date(Date.now() - timeValue);

  let second = Math.floor(date % (60000) / (1000));
  let minute = Math.floor(date % (3600000) / (60000));
  let hour = Math.floor(date % (86400000) / (3600000));
  let day = Math.floor(date / (86400000));
  let month = date.getMonth();
  let year = date.getFullYear() - 1970;

  if (year > 0) {
    time = year;
    text = 'years ago';
  } else if (month > 0) {
    time = month;
    text = 'months ago';
  } else if (day > 0) {
    time = day;
    text = 'days ago';
  } else if (hour > 0) {
    time = hour;
    text = 'hours ago';
  } else if (minute > 0) {
    time = minute;
    text = 'min ago';
  } else if (second > 0) {
    time = second;
    text = 'sec ago';
  } else {
    text = 'just now';
  }

  return {
    time: time,
    text: text
  };
};

const timeformat = (timestamp) => {
  if (!timestamp) {
    return 'Unknown time';
  }

  let timeValue = 0;

  try {
    timeValue = parseInt(timestamp);
  } catch (error) {
    window.console.error(error);
  }

  if ((`${timeValue}`).length < 13) {
    timeValue *= 1000;
  }

  if (isNaN(timeValue)) {
    timeValue = 0;
  }

  let date = new Date(timeValue);

  let seconds = date.getSeconds();
  let minute = date.getMinutes();
  let hour = date.getHours();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  seconds = (seconds < 10) ? `0${seconds}` : seconds;
  minute = (minute < 10) ? `0${minute}` : minute;
  hour = (hour < 10) ? `0${hour}` : hour;

  day = (day < 10) ? `0${day}` : day;
  month = (month < 10) ? `0${month}` : month;

  return `${year}-${month}-${day} ${hour}:${minute}:${seconds}`;
};

const isTimeDiffBy = (time1, time2, diff) => {
  if (!time1 || !time2) {
    return false;
  }

  try {
    time1 = parseInt(time1);
    time2 = parseInt(time2);
    diff = parseInt(diff);
  } catch (error) {
    window.console.error(error);
  }

  if ((`${time1}`).length < 13) {
    time1 *= 1000;
  }
  if ((`${time2}`).length < 13) {
    time2 *= 1000;
  }

  if (isNaN(time1) || isNaN(time2) || isNaN(diff)) {
    return false;
  }

  return time1 - time2 <= diff;
};

const getColorFromString = (str) => {
  if (!str) {
    return 'FFFFFF';
  }
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = (hash & 0x00FFFFFF).toString(16).toUpperCase();

  return '00000'.substring(0, 6 - color.length) + color;
};

const numberWithCommas = (x) => {
  if (!x) {
    x = '0';
  }
  try {
    x = (`${x}`).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } catch (error) {
    window.console.log('numberWithCommas Error', error);
  }
  return x;
};

const axiosErrorHandle = (dispatch, error, errorFunction) => {
  let axiosStatus = '';
  let axiosStatusString = '';
  let axiosMessage = '';

  let responseStatus = '';
  let responseStatusString = '';
  let responseMessage = '';

  let snackbarMessage = '';

  let message = '';

  if (error) {
    axiosStatus = error.status;
    axiosStatusString = axiosStatus && `[${axiosStatus}] ` || '';
    axiosMessage = error.message || '';

    if (error.response) {
      responseStatus = error.response.result.status;
      responseStatusString = responseStatus && `[${responseStatus}] ` || '';
      responseMessage = error.response.message || '';
    }
  }

  snackbarMessage = [axiosMessage, responseMessage].join(' ').trim() || 'Unknown error';

  message = `${axiosStatusString}${responseStatusString}${snackbarMessage}`;
  window.console.log(message);

  execFunc(errorFunction, error);
};

vue.prototype.$execFunc = execFunc;
vue.prototype.$storageEach = storageEach;
vue.prototype.$validateEmail = validateEmail;
vue.prototype.$timeformatDiffNow = timeformatDiffNow;
vue.prototype.$timeformatObjectDiffNow = timeformatObjectDiffNow;
vue.prototype.$timeformat = timeformat;
vue.prototype.$isTimeDiffBy = isTimeDiffBy;
vue.prototype.$getColorFromString = getColorFromString;
vue.prototype.$numberWithCommas = numberWithCommas;
vue.prototype.$axiosErrorHandle = axiosErrorHandle;

export default {
  execFunc,
  storageEach,
  validateEmail,
  timeformatDiffNow,
  timeformatObjectDiffNow,
  timeformat,
  isTimeDiffBy,
  getColorFromString,
  numberWithCommas,
  axiosErrorHandle
};
