
export type ResponseType = {
    statusCode: number;
    data: Record<string, any>;
}

interface HttpClient {
  post(url: string, data: Record<string,any>): Promise<ResponseType>;
  get(url: string): Promise<ResponseType>;
}

export default HttpClient;