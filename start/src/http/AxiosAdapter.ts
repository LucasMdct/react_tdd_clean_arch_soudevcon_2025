import axios from "axios";
import HttpClient, { ResponseType } from "./HttpClient";

class AxiosAdapter implements HttpClient {

   async post(url: string, data: Record<string, any>): Promise<ResponseType> {
        const response = await axios.post(url, data);
        return {
            statusCode: response.status,
            data: response.data
        };
    }

    async get(url: string): Promise<ResponseType> {
        const response = await axios.get(url);
        return {
            statusCode: response.status,
            data: response.data
        };
    }
}

export default AxiosAdapter;