<div class="card flex-md-row mb-4 box-shadow h-md-120">
	<div class="card-body d-flex flex-column align-items-start">
		<h3 class="mb-0">
			<a href="" class="title"></a>
		</h3>
		<div class="mb-1 text-muted pub-date"><img class="loading-image" src="/images/ajax-loader.gif" style="display:none;"></div>
		<p class="card-text mb-auto inhoud"></p>
		<small class="text-muted"><a href="" class="lees-meer">Lees meer...</a></small>
	</div>
</div>


{{-- OUDE NIET-AJAX VERSIE:

<div class="card flex-md-row mb-4 box-shadow h-md-120">
	<div class="card-body d-flex flex-column align-items-start">
		<h3 class="mb-0">
			<a href="/news/{{ $message->id }}">{{ $message->title }}</a>
		</h3>
		<div class="mb-1 text-muted">{{ $message->getDate()->formatLocalized('%d %B %Y') }}</div>
		<p class="card-text mb-auto">{{ Str::limit($message->body,50) }}</p>
		<small class="text-muted"><a href="/news/{{ $message->id }}">Lees meer...</a></small>
	</div>
</div> --}}