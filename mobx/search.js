import {action, makeObservable, observable, runInAction} from 'mobx';
import {FETCH_SEARCH} from '../constants/constants';

class search {
  isLoading = false;
  data = [];

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      data: observable,
      fetchPopularTVs: action,
    });
  }

  fetchPopularTVs = async () => {
    const data = await fetch(FETCH_SEARCH)
      .then(data => data.json())
      .catch(error =>
        console.log(
          'There has been a problem with your axios operation: ' +
            error.message,
        ),
      );
    console.log('here', data);
    runInAction(() => (this.data = data.results));
  };
}

export default new search();
