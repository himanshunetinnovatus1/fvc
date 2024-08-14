import { RESULTS, check, request } from 'react-native-permissions';

export const CheckPermission = async (permission) => {
    return check(permission)
        .then((result) => {
            switch (result) {
                case RESULTS.DENIED:
                    return RequestPermission(permission);
                case RESULTS.GRANTED:
                    return true;
                case RESULTS.UNAVAILABLE:
                    return false;
            }
        }).catch((error) => { console.log(error) })
}

const RequestPermission = (permission) => {
    return request(permission, true).then((result) => {
        switch (result) {
            case RESULTS.GRANTED:
                return true;
        }
    })
}
