export interface HttpRequest {
  [key: string]: string | number | boolean | undefined;
}

export interface HttpResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: Record<string, unknown>;
}
