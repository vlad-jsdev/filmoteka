import {action, makeObservable, observable, runInAction} from 'mobx';
import {apiKey, FETCH_MOVIE, langEng} from '../constants/constants';

class film {
  isLoading = false;
  data = [];

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      data: observable,
      fetchFilm: action,
    });
  }

  fetchFilm = async id => {
    const data = await fetch(FETCH_MOVIE + id + apiKey + langEng)
      .then(data => data.json())
      .catch(error =>
        console.log(
          'There has been a problem with your axios operation: ' +
            error.message,
        ),
      );
    console.log('here', data);
    runInAction(() => (this.data = data.genres));
  };
}

export default new film();
