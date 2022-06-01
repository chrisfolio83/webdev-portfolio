@extends( 'layouts.master' )

@section('title')
    {{ $page->title }}
@endsection

@section('content')

    <section class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div class="col-md-6 px-0">
            <h1 class="jumbotron-heading">{{ $page->title }}</h1>
            <p>
                {!! $page->body !!}
            </p>
            <p>
                <a href="/news/" class="btn btn-primary" role="button">Naar het nieuwsoverzicht</a>
            </p>
        </div>
    </section>

    <div class="row mb-2 news_holder">
        @foreach( $messages as $message )
            <div class="col-md-4">
                @include('news.news')
            </div>
        @endforeach
    </div>
@endsection


@section('scripts') 


@endsection







