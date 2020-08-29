import defer from 'deferred';
import { Get, Post } from './IndexService';

const url = 'interview';

const GetInterviewData = () => {
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

const GetInterviewDataId = (id) => {
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

const AddInterview = (data) => {
  const deferred = new defer();

  Post(url, data).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

export { GetInterviewData, GetInterviewDataId, AddInterview };
