/* eslint-disable import/no-anonymous-default-export */
const getData = async id => {
  const data = await fetch(`https://mke2111-1.herokuapp.com//measures/${id}`, {
    method: 'GET',
  }).then(response => response.json());
  return data;
};

const pushData = async measure => {
  const data = await fetch('https://mke2111-1.herokuapp.com//measurements', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      id: 1,
      measure_id: measure[0],
      hours: measure[1],
    }),
  }).then(response => response.json());
  return data;
};

export default { getData, pushData };
