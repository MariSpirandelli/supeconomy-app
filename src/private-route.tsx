// import ServerCookie from "next-cookies";
import { NextPageContext } from "next";
import React, { Component } from "react";
import authService from "./services/auth-service";
import { redirectToLogin } from "./services/redirect-service";

export type AuthProps = {
  token: string
}

export function privateRoute(WrappedComponent: any) {
  return class extends Component<AuthProps> {
    

    static async getInitialProps(ctx: NextPageContext) {
      
      const auth = authService;
      const initialProps = { auth };
      // if the token is expired, that means the user is no longer (or never was) authenticated
      // and if we allow the request to continue, they will reach a page they should not be at.
      if (auth.isExpired) redirectToLogin(ctx.res);
      if (WrappedComponent.getInitialProps) {
        const wrappedProps = await WrappedComponent.getInitialProps(initialProps);
        // make sure our `auth: AuthToken` is always returned
        return { ...wrappedProps, auth };
      }
      return initialProps;
    }

    componentDidMount(): void {
      // since getInitialProps returns our props after they've JSON.stringify
      // we need to reinitialize it as an AuthToken to have the full class
      // with all instance methods available
      this.setState({ auth: authService})
    }

    render() {
      // we want to hydrate the WrappedComponent with a full instance method of
      // AuthToken, the existing props.auth is a flattened auth, we want to use
      // the state instance of auth that has been rehydrated in browser after mount
      return <WrappedComponent auth={this.props} />;
    }
  };
}