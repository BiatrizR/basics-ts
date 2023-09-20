## Trabalhando com Typescript

* Iniciando projeto na raiz
    - npm init -y
* instalando TS em modo de desenvolvedor
    - npm install typescript -D
    - ou instalar globalmente (typescript)[https://www.typescriptlang.org/download]

    * Rodar/traduzir tipagem, especificidade do typescript para js 
     - npx tsc diretorio/arquivo.ts (criará um arquivo cópia do ts para js, esse arquivo é será executad pelo node);
        **Criar arquivo de configurações do comportamento de execução do ts(json)
          - npx tsc --init
          - (configurações)[https://www.typescriptlang.org/tsconfig] possíveis, (testar)[https://www.typescriptlang.org/play]Configs
          - Além da alteração dasjá habilitadas, é possível indicar a pasta raiz do projeto e a pasta de saída/execução do projeto
          -rootDir:"./pastaArquivoTS" 
          -outDir:"./nomedaPastaqueSeráCriadoOsarquivosTranspiladosParaJs"

* Configurar comando para rodar transpilar/rodar o projeto
      - em package.json adicionar no objeto scripts adicionar propriedade start para rodaroarquivo raiz todos dentro de build
        - rodar apernar o start => npm run start
        - removecoments => optional

*para interpretar diretamente o Typescript, sem criar apasta build com versão do js
   -npm install ts-node-dev -D (servidor local que interpreta o ts)
   - adicionar a config ao package =>  "start:dev": "ts-node-dev --respawn --transpile-only src/index.ts",


  # Camadas da web app 
   > Componentes
   > Gerenciamento de Estado
   > Roteamento/rotas/navegação
   > Renderização 

  
