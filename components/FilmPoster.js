import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import {Dimensions, StyleSheet} from 'react-native';

const dimension = Dimensions.get('screen');
const FilmPoster = ({images}) => {
  return (
    <SliderBox
      // ImageComponent={data}
      images={images}
      sliderBoxHeight={dimension.height / 1.3}
      onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
      dotColor={style.dot}
      inactiveDotColor={style.inactiveDot}
      // paginationBoxVerticalPadding={20}
      autoplay
      circleLoop
      resizeMethod={'resize'}
      resizeMode={'cover'}
      paginationBoxStyle={style.boxStyle}
      dotStyle={style.dots}
      ImageComponentStyle={style.image}
      imageLoadingColor={style.imageColor}
    />
  );
};
const style = StyleSheet.create({
  boxStyle: {
    position: 'absolute',
    bottom: 0,
    padding: 0,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin: 0,
    backgroundColor: 'rgba(128, 128, 128, 0.92)',
  },
  image: {
    borderRadius: 15,
    width: '97%',
    marginTop: 5,
  },
  imageColor: '#2196F3',
  inactiveDot: '#90A4AE',
  dot: '#FFEE58',
});
export default FilmPoster;
