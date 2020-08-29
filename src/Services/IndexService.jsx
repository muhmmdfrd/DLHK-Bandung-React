import defer from 'deferred';
import Axios from 'axios';

const baseurl = 'http://api.dlhk.local/api/';

const Login = (data) => {
  const deferred = new defer();
  const url = baseurl + 'login';

  Axios({
    method: 'POST',
    url: url,
    data: data,
    timeout: deferred.promise,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const Get = (path) => {
  const deferred = new defer();
  const url = baseurl + path;

  Axios({
    method: 'GET',
    url: url,
    timeout: deferred.promise,
    header: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'application/json',
    },
  }).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const Post = (path, data) => {
  const deferred = new defer();
  const url = baseurl + path;

  Axios({
    method: 'POST',
    url: url,
    data: data,
    timeout: deferred.promise,
    header: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const PostMultipart = (path, data) => {
  const deferred = new defer();
  const url = baseurl + path;

  Axios({
    method: 'POST',
    url: url,
    data: data,
    timeout: deferred.promise,
    header: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  }).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const Put = (path, data) => {
  const deferred = new defer();
  const url = baseurl + path;

  Axios({
    method: 'PUT',
    url: url,
    data: data,
    timeout: deferred.promise,
    header: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'PUT',
      'Access-Control-Allow-Headers': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const PutMultipart = (path, data) => {
  const deferred = new defer();
  const url = baseurl + path;

  Axios({
    method: 'PUT',
    url: url,
    data: data,
    timeout: deferred.promise,
    header: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'PUT',
      'Access-Control-Allow-Headers': 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  }).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

const Delete = (path) => {
  const deferred = new defer();
  const url = baseurl + path;

  Axios({
    method: 'DELETE',
    url: url,
    timeout: deferred.promise,
    header: {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE',
      'Access-Control-Allow-Headers': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then(
    (response) => {
      deferred.resolve(response);
    },
    (response) => {
      deferred.reject(response);
    }
  );

  return deferred.promise;
};

export { Get, Post, PostMultipart, Put, PutMultipart, Delete, Login };
