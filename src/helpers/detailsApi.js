/* eslint-disable import/no-anonymous-default-export */
const getData = async () => {
  const data = await fetch('https://mke2111-1.herokuapp.com//measures', {
    method: 'GET',
  }).then(response => response.json());
  return data;
};

const pushData = async measure => {
  const data = await fetch('https://mke2111-1.herokuapp.com//measures', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: measure[0],
      // memory: measure[1],
    }),
  }).then(response => response.json());
  return data;
};

export default { getData, pushData };
