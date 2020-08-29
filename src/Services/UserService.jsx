import defer from 'deferred';
import { Get } from './IndexService';

const url = 'users';

const GetUserData = () => {
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

const GetUserDataId = (id) => {
  const deferred = new defer();

  Get(`${url}/${id}`).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.resolve(response);
    }
  );

  return deferred.promise;
};

export { GetUserData, GetUserDataId };
