import {
  action,
  makeAutoObservable,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';
import {FETCH_POPULAR_MOVIES} from '../constants/constants';

class popularMovies {
  isLoading = false;
  data = [];
  posterImages = [];
  posterImagesId = [];

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      data: observable,
      posterImages: observable,
      posterImagesId: observable,
      fetchPopularMovies: action,
    });
  }

  fetchPopularMovies = async () => {
    const data = await fetch(FETCH_POPULAR_MOVIES)
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
  // showData = () => {
  //   console.log(this.data);
  // };
}

export default new popularMovies();
