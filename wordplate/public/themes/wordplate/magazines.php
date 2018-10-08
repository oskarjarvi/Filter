<?php

declare(strict_types=1);

// Register Parties post type
if (function_exists('register_post_type')) {
    register_post_type('magazines', [
        'labels' => [
            'name' => 'Magazines',
            'singular_name' => 'Magazine',
            'add_new' => 'Add Magazine',
            'add_new_item' => 'Redigera Magasin',
            'search_items' => 'Search Magazines'
        ],
        'supports' => [
            'title',
        ],
        'menu_icon' => 'dashicons-book-alt',
        'public' => true,
        'menu_position' => 1,
    ]);
}

// Add ACF fields to the Parties post type
if(function_exists('acf_field_group')) {
    acf_field_group([
        'title' => 'Magazine',
        'fields' => [
                acf_text([
                    'name'=>'link',
                    'label'=>'Link to PDF',
                    'required' => true
                ]),

                acf_image([
                    'name'=>'image',
                    'label' => 'Image',
                    'required' => true
                ])


            ],
            'location' => [
                [
                    acf_location('post_type', 'magazines')
                ],
            ],
        ]);
    }
