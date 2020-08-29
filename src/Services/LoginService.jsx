import defer from 'deferred';
import { Login } from './IndexService';

const LoginService = (data) => {
  const deferred = new defer();

  Login(data).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

export default LoginService;
