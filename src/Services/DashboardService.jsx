import defer from 'deferred';
import { Get } from './IndexService';

const url = 'presence';

const GetDashboardPresence = () => {
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

const GetDashboardItem = () => {
    const deferred = new defer();
    const path = `${url}/dashboard-item`;

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

const GetDashboardContract = () => {
    const deferred = new defer();
    const path = `${url}/dashboard-contract`;

    Get(path).then(
        (response) => {
            deferred.resolve(response);
        },
        (response) => {
            deferred.reject(response);
        }
    );

    return deferred.promise;
}

export { GetDashboardPresence, GetDashboardItem, GetDashboardContract };
