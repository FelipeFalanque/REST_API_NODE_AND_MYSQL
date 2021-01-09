# REST API NODE AND MYSQL

## Debug no vscode
Para debug no vscode criar a pasta ".vscode" na raiz do projeto,
dentro da pasta criada o arquivo "launch.json" com o seguinte conteudo

{
    "version": "0.2.0",
    "configurations": [
        {
            "command": "npm start",
            "name": "Run npm start",
            "request": "launch",
            "type": "node-terminal"
        }

    ]
}
