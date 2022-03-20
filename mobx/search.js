import {action, makeObservable, observable, runInAction} from 'mobx';
import {FETCH_SEARCH} from '../constants/constants';

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

  searchMovies = async query => {
    const data = await fetch(FETCH_SEARCH + `&query=${query}`)
      .then(data => data.json())
      .catch(error =>
        console.log(
          'There has been a problem with your axios operation: ' +
            error.message,
        ),
      );
    runInAction(() => (this.data = data.results));
  };
}

export default new search();
