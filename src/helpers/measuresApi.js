const getData = async id => {
  const data = await fetch(`https://mke2111-1.herokuapp.com//measurements/${id}`, {
    method: 'GET',
  }).then(response => response.json());
  return data;
};

export default getData;
