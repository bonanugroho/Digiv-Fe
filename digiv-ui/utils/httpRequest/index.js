import axios from 'axios';

let axiosApiRequest = '';


const digivApiServices = () => {
    // const { openSnackbar } = useContext(SnackbarContext);

    const API_BASE_CONFIG = {
        baseURL: ENV.API_URL,
        timeout: 60000,
    }

    const cancelToken = axios.CancelToken.source();

    const digivApi =  axios.create(API_BASE_CONFIG)

    // add cancelation feature to axios request config
    const withAxiosCancelation = config => {
        config.cancelToken = cancelToken.token;
        return config;
    };

    // handleGlobalConfig
    const handleGlobalConfig = config => {
        const globalConfig = withAxiosCancelation(config);
        return globalConfig;
    };
    
    const axiosInterceptorsRequest = config => {
        config.headers['Content-Type'] = 'application/json';
        // config.headers.post['Content-Type'] = 'application/json';
        // config.headers.put['Content-Type'] = 'application/json';
        // config.headers.delete['Content-Type'] = 'application/json';
        return config;
    }

    const axiosInterceptorsRequestError = error => {
        return Promise.reject(error)
    }

    const axiosInterceptorsResponseSuccess = response => {
        return response
    }

    const axiosInterceptorsResponseError = error => {
        const { data } = error.response || {};
        // console.log(data)
        // if(data && data.error.status === 400){
        //     openSnackbar({text: 'Oops, you\'re cannot access this page'});
        //     // window.location.href="/";
        // }
        return Promise.reject(error);
    }

    digivApi.interceptors.response.use(
        axiosInterceptorsResponseSuccess,
        axiosInterceptorsResponseError
    );

    digivApi.interceptors.response.use(
        axiosInterceptorsResponseSuccess,
        axiosInterceptorsResponseError
    );

    digivApi.interceptors.request.use(
        axiosInterceptorsRequest,
        axiosInterceptorsRequestError
    );
    digivApi.interceptors.request.use(handleGlobalConfig)
    return {
        cancelRequest : (message) => cancelToken.cancel(message),
        digivApi,
    }
}

export const { digivApi } = digivApiServices;
export default digivApiServices;
