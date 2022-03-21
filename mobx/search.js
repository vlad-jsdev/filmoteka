import {action, makeObservable, observable, runInAction} from 'mobx';
import {
  apiKey,
  basicUrl,
  langEng,
  movies,
  searchMovie,
  tvs,
} from '../constants/constants';

class search {
  isLoading = false;
  data = [];

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      data: observable,
      searchMovies: action,
    });
  }

  searchMovies = async (query, type) => {
    const data = await fetch(
      basicUrl + searchMovie + type + apiKey + langEng + `&query=${query}`,
    )
      .then(data => data.json())

      .catch(error =>
        console.log(
          'There has been a problem with your axios operation: ' +
            error.message,
        ),
      );
    runInAction(
      () =>
        (this.data = data.results.map(item => ({...item, type: type + 's'}))),
    );
  };
  cleanData = () => {
    runInAction(() => (this.data = []));
  };
}

export default new search();
