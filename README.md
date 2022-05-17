## HTML Template User Defined

1. VSCode bottom left wheel click
1. Select 사용자 코드 조각
1. search 'html', open 'html.json', and insert the following code

```
"korea html form" : {
      "scope": "html",
      "prefix": "!!",
      "body": [
         "<!DOCTYPE html>",
         "<html lang=\"ko\">",
         "<head>",
            "<meta charset=\"UTF-8\">",
            "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">",
            "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
            "<!-- RESET CSS -->",
            "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css\">",

            "<!-- jQuery cdn -->",
             "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js\"></script>",

            "<title>$1</title>",
         "</head>",
         "<body>",
         "$2",
         "</body>",
         "</html>"
      ],
      "description": "html 자동완성 (한글페이지용)"
   }
   ```