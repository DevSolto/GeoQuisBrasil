# GeoQuisBrasil

Este projeto é um jogo simples que testa os conhecimentos do usuário sobre as cidades dos estados brasileiros. O usuário escolhe um estado e tenta adivinhar o nome das cidades pertencentes a esse estado.

## Funcionalidades

- Seleção de um estado brasileiro.
- Input para digitar o nome das cidades.
- Comparação de cidades ignorando acentos e caracteres especiais como "ç".
- Lista das cidades já acertadas pelo usuário.

## Tecnologias Utilizadas

- React
- TypeScript
- Tailwind CSS
- Shadcn/ui
- Axios
- BrasilAPI

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/DevSolto/GeoQuisBrasil.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd geo-quis-brasil
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

5. Acesse o projeto em `http://localhost:5173`.

## Como Funciona

- Ao selecionar um estado, as cidades desse estado são carregadas utilizando a BrasilAPI.
- O usuário digita o nome de uma cidade e clica em "Testar".
- Se o nome da cidade estiver correto (mesmo sem acento ou cedilha), ela é adicionada à lista de cidades acertadas.

## Estrutura do Código

- `CityFinder.tsx`: Componente principal que gerencia o jogo.
- `searchCity`: Função que compara a cidade digitada com as cidades disponíveis, ignorando acentos.

## Melhorias Futuras

- Adicionar um temporizador para tornar o jogo mais desafiador.
- Implementar níveis de dificuldade.
- Adicionar um ranking de jogadores.

## Contribuições

Sinta-se à vontade para abrir issues e pull requests para melhorias no projeto.

## Licença

Este projeto está licenciado sob a MIT License.
