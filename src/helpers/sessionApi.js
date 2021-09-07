const signin = async (sessionType, name) => {
  if (sessionType === 'login') {
    const data = await fetch(`https://mke2111-1.herokuapp.com//signin?uname=${name}`, {
      method: 'GET',
    }).then(response => response.json());
    if (await data.reply === 'exists') {
      return [true, data.user[0]];
    }
    return false;
  }
  const data = await fetch('https://mke2111-1.herokuapp.com//users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
    }),
  }).then(response => response.json());
  if (typeof await data.id === 'number') {
    return [true, data];
  }
  return false;
};

export default signin;
