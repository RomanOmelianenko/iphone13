const getData = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos/';
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Данные были получены с ошибкой!');
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error.message);
    })
    .finally(() => {
      console.log('finally');
    })
};

getData();