@if( $flash=session('message') )
    <div class="alert alert-success" role="alert">
        {{$flash}}
    </div>
@endif
@if( $flash=session('error') )
    <div class="alert alert-danger" role="alert">
        {{$flash}}
    </div>
@endif
@if (session('status'))
    <div class="alert alert-success">
        {{ session('status') }}
    </div>
@endif