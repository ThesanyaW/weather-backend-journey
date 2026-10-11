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

---

## GET /cities

Returns all supported cities.

### Example Request

```http
GET /cities
```

### Response

```json
["Colombo", "Kandy", "Galle"]
```

### Status Codes

- 200 OK

---

## GET /health

Returns the health status of the API.

### Example Request

```http
GET /health
```

### Response

```json
{
  "status": "healthy"
}
```

### Status Codes

- 200 OK

---

### Status Codes

- 200 OK
- 404 Not Found
- 500 Internal Server Error
