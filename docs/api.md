# Weather API

## Base URL

```text
http://localhost:3000
```

---

## GET /

Returns the API status.

### Response

```text
Weather API
```

### Status Codes

- 200 OK

---

## GET /weather/:city

Returns weather information for a supported city.

### Example Request

```http
GET /weather/Colombo
```

### Success Response

```json
{
  "city": "Colombo",
  "temperature": 29.8,
  "windSpeed": 10.1
}
```

### Error Response

```json
{
  "error": "Unsupported city"
}
```

### Status Codes

- 200 OK
- 404 Not Found
- 500 Internal Server Error

### Supported Cities

- Colombo
- Kandy
- Galle
