import { InterceptedHttp } from "./http.interceptor";
export function httpFactory(xhrBackend, requestOptions) {
    return new InterceptedHttp(xhrBackend, requestOptions);
}
//# sourceMappingURL=/Users/kbo/dev_java/git/angular/src/app/http/http.factory.js.map