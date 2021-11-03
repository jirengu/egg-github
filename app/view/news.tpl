<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <title>GitHub 项目排行榜</title>
  <link rel="stylesheet" type="text/css" href="/public/css/news.css" >
</head>
<body>
  <main>
    <h1>Github Star 前30榜</h1>
    {% for item in list %}
    <div class="item">
      <h2><a href="{{item.html_url}}">{{item.name}}</a></h2>
        <div class="detail">
          <div class="extra">{{item.description}}</div>
          <div class="extra">{{item.stargazers_count}} star</div>
        </div>
      </a>
    </div>
    {% endfor %}
  </main>

</body>