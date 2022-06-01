@extends('layouts.master')

@section('content')
	<div class="row mb-2">
		<div class="col-md-12">
			<h1>Nieuw bericht</h1>
			<hr>
			<form method="POST" action="/news">
				{{ csrf_field() }}
				<div class="form-group">
					<label for="title">Titel</label>
					<input type="text" name="title" id="title" class="form-control">
				</div>
				<div class="form-group">
					<label for="publish_date">Datum</label>
					<input type="date" name="publish_date" id="publish_date" class="form-control"
					placeholder="yyyy-mm-dd">
				</div>
				<div class="form-group">
					<label for="body">Bericht</label>
					<textarea name="body" id="body" class="form-control"></textarea>
				</div>
				<button type="submit" class="btn btn-primary">Opslaan</button>
			</form>
		</div>		
	</div>
@endsection