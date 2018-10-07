<?php

declare(strict_types=1);

// Register Parties post type
if (function_exists('register_post_type')) {
    register_post_type('articles', [
        'labels' => [
            'name' => 'Articles',
            'singular_name' => 'Article',
            'add_new' => 'Add Article',
            'add_new_item' => 'Redigera Artikel',
            'search_items' => 'Search Articles'
        ],
        'supports' => [
            'title',
        ],
        'menu_icon' => 'dashicons-megaphone',
        'public' => true,
        'menu_position' => 1,
    ]);
}

// Add ACF fields to the Parties post type
if(function_exists('acf_field_group')) {
    acf_field_group([
        'title' => 'Article',
        'fields' => [
            acf_text([
                'name' => 'Title',
                'label' => 'Title',
                'wrapper' =>
                [
                    'width' => '20',
                    ],
                ]),
                acf_wysiwyg([
                    'name' => 'Content',
                    'label' => 'Content',
                    'media_upload'=> true,
                    'toolbar'=>'simple',
                ]),


            ],
            'location' => [
                [
                    acf_location('post_type', 'articles')
                ],
            ],
        ]);
    }
