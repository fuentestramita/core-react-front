# Core Tramita

## Localhost Development

Necesitas crear un archivo .env.local en la raiz del proyecto con los siguientes datos:
VITE_BASE_URL="http://localhost:3000"
VITE_API_URL="https://core-back-ms.azurewebsites.net"

## TramitaAPI service : /src/services/index.ts

Este servicio lo creamos para poder centralizar axios y que todas las request tengan los mismos request headers y URL Base.

### Chunks sizes for Azure

https://stackoverflow.com/a/75719691/12533883
