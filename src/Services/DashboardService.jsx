import defer from 'deferred';
import { Get } from './IndexService';

const url = 'presence';

const GetDashboardPresence = (data) => {
    const deferred = new defer();
    const path = `${url}/dashboard`;

    Get(path).then(
        (response) => {
            deferred.resolve(response);
        },
        (response) => {
            deferred.reject(response);
        }
    );

    return deferred.promise;
};

export { GetDashboardPresence };
