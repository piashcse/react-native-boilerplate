import {
    BASE_URL
} from './Url';
import axios from 'axios';
import { NetInfo, Alert } from 'react-native';

class AxiosService {
    async getServiceData(url, parameter) {
        const connectionInfo = await NetInfo.getConnectionInfo();
        if (connectionInfo.type === 'none') {
            Alert('LOGIN_MODULE.PLEASE_CONNECT_TO_INTERNET')
            throw new Error("Please connect to internet")
        } else {
            let requestHeader;
            requestHeader = {
                'Content-Type': 'application/json'
            };
            return axios.get(BASE_URL + url, {
                params: parameter,
                headers: requestHeader
            })
        }

    }

    async postServiceData(url, body) {
        const connectionInfo = await NetInfo.getConnectionInfo();
        if (connectionInfo.type === 'none') {
            Alert('LOGIN_MODULE.PLEASE_CONNECT_TO_INTERNET')
            throw new Error("Please connect to internet")
        } else {
            let requestHeader;
            requestHeader = {
                'Content-Type': 'application/json'
            };

            return axios.post(BASE_URL + url, body, {
                headers: requestHeader
            })
        }
    }

    // update
    async putServiceData(url, body) {
        const connectionInfo = await NetInfo.getConnectionInfo();
        if (connectionInfo.type === 'none') {
            Alert('LOGIN_MODULE.PLEASE_CONNECT_TO_INTERNET')
            throw new Error("Please connect to internet")
        } else {
            let requestHeader;
            requestHeader = {
                'Content-Type': 'application/json'
            };

            return axios.put(BASE_URL + url, body, {
                headers: requestHeader
            })
        }
    }
    //delete

    async deleteServiceData(url, body) {
        const connectionInfo = await NetInfo.getConnectionInfo();
        if (connectionInfo.type === 'none') {
            Alert('LOGIN_MODULE.PLEASE_CONNECT_TO_INTERNET')
            throw new Error("Please connect to internet")
        } else {
            let requestHeader;
            let serverUrl =  BASE_URL;
            requestHeader = {
                'Content-Type': 'application/json'
            };
            return axios.delete(serverUrl + url, {
                data: body,
                headers: requestHeader
            })
        }
    }
}

module.exports = new AxiosService();
