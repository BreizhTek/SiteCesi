let mix = require('laravel-mix');



mix.postCss('resources/css/main.css', './style.css', [
    require('tailwindcss'),
])