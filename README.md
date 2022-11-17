
# blog-app

simple blog app include crud articles & comments
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

#### Get Articles
```http
  GET /articles/all
```
| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | Title |
| `author` | `string` | Author |
| `page` | `int` | Page |
| `size` | `int` | Size |
| `sort` | `int` | Sort by |
| `dir` | `int` | Direction (1=asc, -1=desc) |

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
