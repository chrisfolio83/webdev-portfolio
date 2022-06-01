<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@yield( 'title' ) | {{ config('app.name') }}</title>

    <!-- Styles -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="/css/app.css" rel="stylesheet">
</head>

<body>
<div class="container">
    @include('layouts.partials.header')
    @include('layouts.partials.nav')
    @include('layouts.partials.errors')
    @include('layouts.partials.messages')

    <main role="main">
        @yield( 'content' )
    </main>

    @include('layouts.partials.footer')
</div>
@include('layouts.partials.scripts')
</body>
</html>