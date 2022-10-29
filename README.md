
# zettabyte-blog

simple zettabyte blog include crud articles & comments
## API Reference

#### Headers
```http
  Content-Type : application/json
```

#### Create Article
```http
  POST /articles
```
| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. Title |
| `subTitle` | `string` | **Required**. Subtitle |
| `author` | `string` | **Required**. Author |
| `article` | `string` | **Required**. Article |

#### Get Article
```http
  GET /articles/{articleId}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `articleId` | `string` | **Required**. Article Id of item to fetch |

#### Update Article
```http
  PUT /articles/{articleId}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `articleId` | `string` | **Required**. Article Id of item to fetch |

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**. Title |
| `subTitle` | `string` | **Required**. Subtitle |
| `author` | `string` | **Required**. Author |
| `article` | `string` | **Required**. Article |

#### Delete Article
```http
  DELETE /articles/{articleId}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `articleId` | `string` | **Required**. Article Id of item to fetch |

#### Create Comment
```http
  POST /articles/{articleId}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `articleId` | `string` | **Required**. Article Id of item to fetch |

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Title |
| `comment` | `string` | **Required**. Subtitle |

#### Get Comment
```http
  GET /articles/{articleId}/{commentId}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `articleId` | `string` | **Required**. Article Id of item to fetch |
| `commentId` | `string` | **Required**. Comment Id of item to fetch |

#### Update Comment
```http
  PUT /articles/{articleId}/{commentId}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `articleId` | `string` | **Required**. Article Id of item to fetch |
| `commentId` | `string` | **Required**. Comment Id of item to fetch |

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Title |
| `comment` | `string` | **Required**. Subtitle |

#### Delete Comment
```http
  DELETE /articles/{articleId}/{commentId}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `articleId` | `string` | **Required**. Article Id of item to fetch |
| `commentId` | `string` | **Required**. Comment Id of item to fetch |
