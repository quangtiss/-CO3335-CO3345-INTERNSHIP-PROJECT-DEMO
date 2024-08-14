const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.disableNotifications();

mix.js('resources/js/app.js', 'public/js')
  .vue()
  .sass('resources/sass/app.scss', 'public/css', {
    sassOptions: {
      quietDeps: true,
    },
  })
  .css('resources/css/app.css', 'public/css');



// =====================================
mix.scripts([
  'resources/template/login/vendor/jquery/jquery-3.2.1.min.js',
  'resources/template/login/vendor/bootstrap/js/popper.js',
  'resources/template/login/vendor/bootstrap/js/bootstrap.min.js',
  'resources/template/login/vendor/select2/select2.min.js',
  'resources/template/login/vendor/tilt/tilt.jquery.min.js',
  'resources/template/login/js/main.js'
], 'public/js/login.js')
  .styles([
    'resources/template/login/vendor/bootstrap/css/bootstrap.min.css',
    'resources/template/login/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
    'resources/template/login/vendor/animate/animate.css',
    'resources/template/login/vendor/css-hamburgers/hamburgers.min.css',
    'resources/template/login/vendor/select2/select2.min.css',
    'resources/template/login/css/util.css',
    'resources/template/login/css/main.css'
  ], 'public/css/login.css')

  .styles([
    'node_modules/@fontsource/source-sans-3/index.css',
    'node_modules/overlayscrollbars/styles/overlayscrollbars.min.css',
    'resources/template/admin/dist/css/adminlte.css',
    'node_modules/apexcharts/dist/apexcharts.css'
  ], 'public/css/admin.css')
  .scripts([
    'node_modules/overlayscrollbars/browser/overlayscrollbars.browser.es6.min.js',
    'node_modules/@popperjs/core/dist/umd/popper.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'resources/template/admin/dist/js/adminlte.js'
  ], 'public/js/admin.js')
  .copyDirectory([
    'resources/template/admin/dist/assets/img'
  ], 'public/dist/assets/img')