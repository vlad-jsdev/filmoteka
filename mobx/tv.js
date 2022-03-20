import {action, makeObservable, observable, runInAction} from 'mobx';
import {apiKey, FETCH_TV, langEng} from '../constants/constants';

class tv {
  isLoading = false;
  data = {};

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      data: observable,
      fetchTvs: action,
    });
  }

  fetchTvs = async id => {
    const data = await fetch(FETCH_TV + id + apiKey + langEng)
      .then(data => data.json())
      .catch(error =>
        console.log(
          'There has been a problem with your axios operation: ' +
            error.message,
        ),
      );
    runInAction(() => (this.data = data));
  };
}

export default new tv();
