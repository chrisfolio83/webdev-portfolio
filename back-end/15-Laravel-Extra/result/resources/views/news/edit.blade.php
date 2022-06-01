@extends('layouts.master')

@section('content')
	<div class="row mb-2">
		<div class="col-md-12">
			<h1>Bericht aanpassen</h1>
			<hr>
			<form method="post" action="/news/{{ $news->id }}">
				{{ csrf_field() }}
				<div class="form-group">
					<label for="title">Titel</label>
					<input type="text" name="title" id="title" class="form-control"
					value="{{ $news->title }}">
				</div>
				<div class="form-group">
					<label for="publish_date">Datum</label>
					<input type="date" name="publish_date" id="publish_date" class="form-control"
					placeholder="yyyy-mm-dd" value="{{ $news->publish_date }}">
				</div>
				<div class="form-group">
					<label for="body">Bericht</label>
					<textarea name="body" id="body" class="form-control">{{ $news->body }}</textarea>
				</div>
				<button type="submit" class="btn btn-primary">opslaan</button>
				<a href="/news/{{ $news->id }}" style="margin-left: 10px;">annuleren</a>
			</form>
		</div>		
	</div>
@endsection