const LOAD_SETTINGS = {
  SERVER_URL: `https://es.dump.academy/guess-melody`,
  APP_ID: 186764
};

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  throw new Error(`Произошла ошибка. Статус: ${response.status} ${response.statusText}. Пожалуйста, перезагрузите страницу`);
};

const toJSON = (response) => response.json();

class Load {
  static loadData() {
    return fetch(`${LOAD_SETTINGS.SERVER_URL}/questions`).then(checkStatus).then(toJSON);
  }

  static uploadStatistic(data) {
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`${LOAD_SETTINGS.SERVER_URL}/stats/${LOAD_SETTINGS.APP_ID}`, requestSettings).then(checkStatus);
  }

  static downloadStatistic() {
    return fetch(`${LOAD_SETTINGS.SERVER_URL}/stats/${LOAD_SETTINGS.APP_ID}`).then(checkStatus).then(toJSON);
  }
}

export default Load;
