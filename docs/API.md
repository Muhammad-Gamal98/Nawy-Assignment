# API Documentation

## Base URL

```
http://localhost:8000
```

## Endpoints

### Apartments

#### List All Apartments

```http
GET /apartment
```

Query Parameters:

- `page` (number): Page number for pagination
- `limit` (number): Number of items per page
- `search` (string): Search term for full-text search

Response:

```json
{
  "items": [
    {
      "id": number,
      "unitName": string,
      "unitNumber": number,
      "project": string,
      "description": string,
      "image": string,
      "price": number
    }
  ],
  "meta": {
    "totalItems": number,
    "itemCount": number,
    "itemsPerPage": number,
    "totalPages": number,
    "currentPage": number
  }
}
```

#### Get Specific Apartment

```http
GET /apartment/:id
```

Response:

```json
{
  "id": number,
  "unitName": string,
  "unitNumber": number,
  "project": string,
  "description": string,
  "image": string,
  "price": number
}
```

#### Search Apartments

```http
GET /apartment/search?term=searchterm
```

Query Parameters:

- `term` (string): Search term for full-text search

Response:

```json
[
  {
    "id": number,
    "unitName": string,
    "unitNumber": number,
    "project": string,
    "description": string,
    "image": string,
    "price": number
  }
]
```

#### Create New Apartment

```http
POST /apartment
```

Request Body:

```json
{
  "unitName": string,
  "unitNumber": number,
  "project": string,
  "description": string,
  "image": string,
  "price": number
}
```

#### Create Multiple Apartments

```http
POST /apartment/many
```

Request Body:

```json
[
  {
    "unitName": string,
    "unitNumber": number,
    "project": string,
    "description": string,
    "image": string,
    "price": number
  }
]
```

#### Delete Specific Apartment

```http
DELETE /apartment/:id
```

#### Delete All Apartments

```http
DELETE /apartment
```

## Error Responses

The API uses standard HTTP status codes:

- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error

Error Response Format:

```json
{
  "statusCode": number,
  "message": string,
  "error": string
}
```
