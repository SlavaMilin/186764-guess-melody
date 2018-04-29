const LOAD_SETTINGS = {
  serverUrl: `https://es.dump.academy/guess-melody`,
};

class Load {
  static loadData() {
    return window.fetch(`${LOAD_SETTINGS.serverUrl}/questions`).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Произошла ошибка. Статус: ${response.status} ${response.statusText}. Пожалуйста, перезагрузите страницу`);
    });
  }
}

export {Load};
