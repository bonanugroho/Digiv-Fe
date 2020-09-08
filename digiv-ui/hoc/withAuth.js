
import React from 'react';
import Router from 'next/router';
import Cookies from 'js-cookie'
const login = '/login'; // Define your login route address.


const  WrappedComponent = (Component) => {
  const hocComponent = ({ ...props }) => <Component {...props} />;

  hocComponent.getInitialProps = async ({ req,res }) => {
	const isUserLoggedIn = req.cookies['ATT'];
    // Are you an authorized user or not?
    if (!isUserLoggedIn) {
      // Handle server-side and client-side rendering.
      if (res) {
        res?.writeHead(302, {
          Location: login,
        });
        res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({});
      return { ...wrappedProps };
    }

    return { test:'asdasdasd'};
  };

  return hocComponent;
};

export default WrappedComponent