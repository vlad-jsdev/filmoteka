import {action, makeObservable, observable, runInAction} from 'mobx';
import {FETCH_GENRES} from '../constants/constants';

class genres {
  isLoading = false;
  data = [];

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      data: observable,
      fetchGenres: action,
    });
  }

  fetchGenres = async () => {
    const data = await fetch(FETCH_GENRES)
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

export default new genres();
