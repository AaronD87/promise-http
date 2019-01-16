const request = require('superagent');

request
  .get('https://swapi.co/api/people/')
  .then(res => {
    return res.body.results
      .map(homeworld => homeworld.homeworld)
      .filter(homeworldUrl => homeworldUrl !== '');
  })
  .then(homeworldsUrl => {
    return Promise.all(homeworldsUrl.map(url => {
      return request.get(url);
    }));
  })
  .then(homeworldRess => homeworldRess.map(homeworldRes => homeworldRes.body))
  .then(homeworlds => console.log(homeworlds));

