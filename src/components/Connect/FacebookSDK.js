

export const initFacebookSdk = () => {
    return new Promise((resolve, reject) => {
      // Load the Facebook SDK asynchronously
      window.fbAsyncInit = () => {
        window.FB.init({
          appId: '',
          cookie: true,
          xfbml: true,
          version: 'v19.0'
        });
        // Resolve the promise when the SDK is loaded
        resolve();
      };
    })
  }

export const getFacebookLoginStatus = () => {
    return new Promise((resolve, reject) => {
      window.FB.getLoginStatus((response) => {
        resolve(response);
      });
    });
  };

export const fbLogin = () => {
    return new Promise((resolve, reject) => {
     
/*
      window.FB.login((response) => {
        resolve(response)        
      })
*/

  window.FB.login(function(response) {

    window.FB.api('/me', {fields: 'name, email'}, function(response2) {

            response['extra']=response2;
            resolve(response)  
                           });          
            },{config_id:''});
      //

    })
  }