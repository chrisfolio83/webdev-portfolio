@extends( 'layouts.master' )

@section('title')
Berichten Overzicht
@endsection


@section('content')
	<div class="row mb-2 news_holder">
	@foreach( $messages as $message )
        <div class="col-md-6">
          	@include('news.news')
        </div>
    @endforeach
    </div>
@endsection
















