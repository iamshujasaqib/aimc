import {Endpoint} from '../request';
import RNFetchBlob from 'rn-fetch-blob';
import {URL} from 'src/constants/url';

const endpoint = 'image/upload';

export const uploadImage = (image: any) => {
  return RNFetchBlob.fetch(
    'POST',
    URL + endpoint,
    {
      // 'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
    },
    [
      {
        name: 'image',
        filename: 'a.jpg',
        data: RNFetchBlob.wrap(image.path),
      },
    ],
  )
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(err => {});
};
