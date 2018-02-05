<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My Space</title>
    <link rel="stylesheet" href="http://localhost/Project1/style.css">
  </head>
  <body>
    <h1><a href="index.php">My Space</a></h1>

    <div id="grid">
      <div id="list">
        <ol>
          <?php
            echo file_get_contents('list.txt');
            if(isset($_GET['id']) && $_GET['id']=='Work'){
                echo file_get_contents($_GET['id'].'List.txt');
            }
           ?>
        </ol>
      </div>
      <div id="article">
        <?php
          if(!isset($_GET['id'])) echo file_get_contents('indexArticle.txt');
          else if($_GET['id']=='Work'){
            if(!empty($_GET['field'])) echo file_get_contents('http://localhost/Project1/Work/'.$_GET['field'].'.txt');
          }else echo file_get_contents($_GET['id'].'.txt');
         ?>
      </div>
    </div>
  </body>
</html>
