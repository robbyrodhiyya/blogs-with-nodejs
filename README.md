
# zettabyte-blog

simple zettabyte blog include crud articles & comments
## End point

### Article

[POST] /articles

[GET] /articles/all?title=&author=&page=1&size=10&sort=_id&dir=1

[GET] /articles/{articleId}

[PUT] /articles/{articleId}

[DELETE] /articles/{articleId}

### Comment

[POST] /articles/{articleId}

[GET] /articles/{articleId}/{commentId}

[PUT] /articles/{articleId}/{commentId}

[DELETE] /articles/{articleId}/{commentId}
