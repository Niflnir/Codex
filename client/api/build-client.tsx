import axios from "axios";
import { NextPageContext } from "next";

export default ({ req }: NextPageContext) => {
  if (typeof window === 'undefined') {
    // on the server
    return axios.create({
      // baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      baseURL: 'http://www.codex-app.codes',
      //@ts-ignore
      headers: req.headers
    });
  } else {
    // on the browser
    return axios.create({
      baseURL: '/'
    });
  }
};
