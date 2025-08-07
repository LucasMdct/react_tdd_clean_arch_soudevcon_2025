import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import HttpClient from './http/HttpClient.ts';
import { RegistryProvider } from './registry/RegistryProvider.ts';
import FetchAdapter from './http/FetchAdapter.ts';
import { AccountGateway, AccountGatewayHttp } from './gateway/AccountGateway.ts';

//const httpCliente: HttpClient = new AxiosAdapter();
const httpCliente: HttpClient = new FetchAdapter();

const accountGateway: AccountGateway = new AccountGatewayHttp(httpCliente)

const registry: Record<string, any> = {
  httpCliente,
  accountGateway
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RegistryProvider value={registry}>
      <App />
    </RegistryProvider>
  </StrictMode>,
)
