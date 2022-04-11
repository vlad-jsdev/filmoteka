import {action, makeObservable, observable, runInAction} from 'mobx';
import {FETCH_POPULAR_MOVIES, URL_IMAGE} from '../constants/constants';

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
      poster: action,
    });
  }

  poster = () => {
    this.posterImages = this.data.map(
      item => `${URL_IMAGE + item.poster_path}`,
    );
    this.posterImagesId = this.data.map(item => item.id);
  };

  fetchPopularMovies = async () => {
    const data = await fetch(FETCH_POPULAR_MOVIES)
      .then(data => data.json())
      .catch(error =>
        console.log(
          'There has been a problem with your axios operation: ' +
            error.message,
        ),
      );
    runInAction(() => (this.data = data.results));
    runInAction(() => this.poster());
  };
}

export default new popularMovies();
