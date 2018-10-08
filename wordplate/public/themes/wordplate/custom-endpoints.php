<?php
add_action( 'rest_api_init', function () {
    register_rest_route( 'Magazines/v1', '/articles/', [
        'methods' => 'GET',
        'callback' => 'getAllArticles'
    ]);

    register_rest_route('articles/v1', '/articles/(?P<abbr>\w+)', [
        'methods' => 'GET',
        'callback' => 'getArticleById'
    ]);
});

function getAllArticles()
{
$articles = get_posts([
    'post_type'=> 'articles',
    'numberposts'=> -1
]);
foreach ($articles as $article)
{
    $article->fields=get_fields($article->ID);
}
return $articles;
}
