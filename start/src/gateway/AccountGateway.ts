import HttpClient from "../http/HttpClient";

type Input = {
    accountType: string;
    name: string;
    email: string;
    password: string;
}

type Output = {
    success: boolean;
    accountId: number;
}


export interface AccountGateway {
    signup(input: Input): Promise<Output>;
}

export class AccountGatewayHttp implements AccountGateway {
    //private readonly httpClient: HttpClient;

    constructor(private readonly httpClient: HttpClient) {}

    async signup(input: Input): Promise<Output> {
          const response = await this.httpClient.post('https://jsonplaceholder.typicode.com/users', input);

          return {
            success: response.statusCode === 201,
            accountId: response.data.id
          };
    }
}

export class MockAccountGateway implements AccountGateway {
  signup(): Promise<Output> {
    return Promise.resolve({
      success: true,
      accountId: 12,
    })
  }
}
 