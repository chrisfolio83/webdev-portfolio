@extends( 'layouts.master' )


@section('title')
Mijn bericht: {{ $news->title }}
@endsection


@section('content')
	<h1>{{$news->title}}</h1>
	<small>{{$news->publish_date}}</small>
	<p style="margin-bottom:0;">{!! $news->body !!}</p>
	<a href="/news/{{$news->id}}/edit" class="btn btn-info">bewerken</a>
	<form action="/news/{{$news->id}}" method="post" style="display:inline-block;">
		{{ csrf_field() }}
		<input type="hidden" name="_method" value="delete"><br>
		<button type="submit" class="btn btn-warning">verwijderen</button>
	</form>
@endsection



















