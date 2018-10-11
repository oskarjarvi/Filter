<?php
add_action( 'rest_api_init', function () {
    register_rest_route( 'Articles/v1', '/articles/', [
        'methods' => 'GET',
        'callback' => 'getAllArticles'
    ]);

    register_rest_route('Articles/v1', '/articles/(?P<abbr>\w+)', [
        'methods' => 'GET',
        'callback' => 'getArticleById'
    ]);

    register_rest_route( 'Magazines/v1', '/magazines/', [
        'methods' => 'GET',
        'callback' => 'getAllMagazines'
    ]);

    register_rest_route('magazine/v1', '/magazine/(?P<abbr>\w+)', [
        'methods' => 'GET',
        'callback' => 'getMagazineById'
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
function getArticleById($data)
{

}

function getAllMagazines()
{
$magazines = get_posts([
    'post_type'=> 'magazines',
    'numberposts'=> -1
]);
foreach ($magazines as $magazine)
{
    $magazine->fields=get_fields($magazine->ID);
}
return $magazines;
}

function getMagazinebyId()
{

}
