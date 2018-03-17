import Api from '@/services/Api'

export default {
/*     With promises
register (credentials) {
        return(Api().post('register', credentials)
        .then(function (response) {
            return response;
          })
          .catch(function (error) {
            console.log(error);
            return error;
          }));
    } */
    register (credentials) {
        return(Api().post('register', credentials));
    }
};