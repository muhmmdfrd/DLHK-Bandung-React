import defer from 'deferred';
import { Get } from './IndexService';

const url = 'category';

const GetCategory = () => {
  const deferred = new defer();

  Get(url).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

export { GetCategory };
