# Тестовое задание 

### Запуск
Установка зависимостей:
```sh
 yarn or yarn install
```
Запуск
```sh
yarn start
```
Настройка nginx. Отдает json файлы. Типа mock-server.
```
worker_processes        1;
error_log               /var/log/nginx/error.log;

events {
    worker_connections  1024;
}

http {
    include             mime.types;
    default_type        application/octet-stream;
    sendfile            on;
    keepalive_timeout   65;

    server {
        listen                  localhost:80;
        proxy_set_header        Host $host;
        proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
        client_max_body_size    32m;
        # Здесь надо задать свой локальный путь
        set $outputStatic       /тут/путь/до/проекта/mock-json;
        location /mock/api {
            alias $outputStatic;
            add_header 'Access-Control-Allow-Origin' '*';
            add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
            add_header 'Access-Control-Allow-Headers'  
            'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
            add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';
       }
}
```

## API . Не реализовано как описано ниже. Но решил расписать как бы сделал.

### Авторизация/Аутентификация
### Создание пользователя 
### POST /account
Success.
```
  {
    "success": true,
    "data": {id: 1},
    "status": 200
  }
```
Failed 
```
  {
    "success": false,
    "error": "already_exists" },
    "status": 400
  }
```
### Создание сессий 
### POST /account/session
Success.
```
  {
    "success": true,
    "data": {"accessToken": "123131", "refreshToken": "sdf311sdf", "expires_in": 1502305985425},
    "status": 200
  }
```
Failed 
```
  {
    "success": false,
    "error": "bad_credentials" },
    "status": 400
  }
```
### Создание агента 
### POST /agents
Success.
```
  {
    "success": true,
    "data": { "name": "agent", "" },
    "status": 200
  }
```
Failed 
```
  {
    "success": false,
    "error": "" },
    "status": 400
  }
```
### Получение агента 
### GET /agents
Success.
```
  {
    "success": true,
    "data": { "name": "agent", "" },
    "status": 201
  }
```
Failed 
```
  {
    "success": false,
    "error": "" },
    "status": 204
  }
```
### Изменение агента 
### POST /agents/1
Success.
```
  {
    "success": true,
    "data": { "name": "agent", "balance": 0 },
    "status": 201
  }
```
Failed 
```
  {
    "success": true,
    "error": "" },
    "status": 400
  }
```
### Создание субагента 
### POST /agents/1/subagents
Success.
```
  {
    "ok": true,
    "data": { "name": "agent", "" },
    "status": 200
  }
```
Failed 
```
  {
    "success": false,
    "error": "" },
    "status": 400
  }
```
### Получение субагента 
### GET /agents/1/subagents/1
Success.
```
  {
    "success": true,
    "data": { "name": "agent", "" },
    "status": 201
  }
```
Failed 
```
  {
    "success": false,
    "error": "" },
    "status": 204
  }
```
### Изменение субагента 
### POST /agents/1
Success.
```
  {
    "success": true,
    "data": { "name": "agent", "balance": 0 },
    "status": 201
  }
```
Failed 
```
  {
    "success": false,
    "error": "" },
    "status": 400
  }
```
### Список субагентов 
### GET /agents/subagents
Success.
```
  {
    "success": true,
    "data": [ {"name": "agent", "balance": 0} ],
    "status": 201
  }
```
Failed 
```
  {
    "success": false,
    "error": "no_content" },
    "status": 204
  }
```
### Пополнение баланса агента
### GET /agents/replenish
Success.
```
  {
    "success": true,
    "data": [ {"name": "agent", "balance": 0} ],
    "status": 201
  }
```
Failed 
```
  {
    "success": false,
    "error": "" },
    "status": 400
  }
```
### Перевод средств субагенту
### GET /agents/subagents/transfer
Success.
```
  {
    "success": true,
    "data": [ {"name": "agent", "balance": 0} ],
    "status": 201
  }
```
Failed 
```
  {
    "success": false,
    "error": "not_enough_balance" },
    "status": 204
  }
```

#### React + Redux + React-Router + Recompose + Formik
