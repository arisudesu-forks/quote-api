# quote-api

[![wakatime](https://wakatime.com/badge/github/LyoSU/quote-api.svg)](https://wakatime.com/badge/github/LyoSU/quote-api)

Апи для генерации Telegram цитат

## Методы
##### Создание цитаты
```http
POST /generate
```

Пример JSON запроса:
```json
{
  "type": "quote",
  "format": "png",
  "backgroundColor": "#1b1429",
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "chatId": 66478514,
      "avatar": true,
      "from": {
        "id": 66478514,
        "first_name": "Yuri 💜",
        "last_name": "Ly",
        "username": "LyoSU",
        "language_code": "ru",
        "title": "Yuri 💜 Ly",
        "photo": {
          "small_file_id": "AQADAgADCKoxG7Jh9gMACBbSEZguAAMCAAOyYfYDAATieVimvJOu7M43BQABHgQ",
          "small_file_unique_id": "AQADFtIRmC4AA843BQAB",
          "big_file_id": "AQADAgADCKoxG7Jh9gMACBbSEZguAAMDAAOyYfYDAATieVimvJOu7NA3BQABHgQ",
          "big_file_unique_id": "AQADFtIRmC4AA9A3BQAB"
        },
        "type": "private",
        "name": "Yuri 💜 Ly"
      },
      "text": "I love you 💜",
      "replyMessage": {}
    }
  ]
}
```

Медиа:
```json
{
  "type": "quote",
  "format": "png",
  "backgroundColor": "#1b1429",
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "media": [
        {
          "file_id": "CAACAgIAAxkBAAIyH2AAAUcJoPJqv4uOPabtiSR3judSnQACaQEAAiI3jgQe29BUaNTqrx4E",
          "file_size": 22811,
          "height": 512,
          "width": 512
        }
      ],
      "mediaType": "sticker",
      "chatId": 66478514,
      "avatar": true,
      "from": {
        "id": 66478514,
        "first_name": "Yuri 💜",
        "last_name": "Ly",
        "username": "LyoSU",
        "language_code": "ru",
        "title": "Yuri 💜 Ly",
        "photo": {
          "small_file_id": "AQADAgADCKoxG7Jh9gMACBbSEZguAAMCAAOyYfYDAATieVimvJOu7M43BQABHgQ",
          "small_file_unique_id": "AQADFtIRmC4AA843BQAB",
          "big_file_id": "AQADAgADCKoxG7Jh9gMACBbSEZguAAMDAAOyYfYDAATieVimvJOu7NA3BQABHgQ",
          "big_file_unique_id": "AQADFtIRmC4AA9A3BQAB"
        },
        "type": "private",
        "name": "Yuri 💜 Ly"
      },
      "replyMessage": {}
    }
  ]
}
```

Без Telegram
```json
{
  "type": "quote",
  "format": "png",
  "backgroundColor": "#1b1429",
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "media": {
        "url": "https://placehold.co/1000"
      },
      "avatar": true,
      "from": {
        "id": 1,
        "name": "Mike",
        "photo": {
          "url": "https://placehold.co/100"
        }
      },
      "text": "Hey",
      "replyMessage": {}
    }
  ]
}
```

Параметры:
|  Поле | Тип |  Описание  |
| :------------ | :------------ | :------------ |
|  type | string | Тип выходного изображения. Может быть: quote, image, null |
|  backgroundColor | string | Цвет фона цитаты. Может быть Hex, название или random для случайного цвета |
|  messages | array | Массив из сообщений |
| width | number | Максимальная ширина |
| height | number | Максимальная высота |
| scale | number | Маcштаб |

Пример ответа:

```json
{
  "ok": true,
  "result": {
    "image": "base64 image",
    "type": "quote",
    "width": 512,
    "height": 359
  }
}

```
