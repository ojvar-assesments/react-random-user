export type MethodType =
  | "GET"
  | "POST"
  | "HEAD"
  | "OPTION"
  | "DELETE"
  | "PATCH"
  | "PUT";
export type UrlType = URL | RequestInfo;

export class BaseAPI {
  async call<T>(
    method: MethodType,
    url: UrlType,
    config: RequestInit = {
      headers: {
        "content-type": "appliacation/json",
      },
    },
  ): Promise<T> {
    const result = await fetch(url, { method, ...config });
    const data = await result.json();
    return data as T;
  }

  async get<T>(url: UrlType, config?: RequestInit): Promise<T> {
    return this.call<T>("GET", url, config);
  }

  async post<T>(url: UrlType, config?: RequestInit): Promise<T> {
    return this.call<T>("POST", url, config);
  }

  /// TODO: IMPLEMENT OTHER METHODS
}
