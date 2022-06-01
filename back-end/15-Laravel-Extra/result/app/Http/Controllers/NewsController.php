<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\News;

class NewsController extends Controller
{
    /**
     * laat de laatste 5 nieuwsberichten zien
     * @param  integer $number aantal standaard 5
     * @return \Illuminate\Contracts\View\Factory | \Illuminate\View\View
     */
    public function index(){
    	$messages = News::LatestNews(10);
    	return view('news.index', 
    		compact('messages')
    	);
    }
    /**
     * laat een nieuwsbericht zien
     * @param  integer $news_id
     * @return \Illuminate\Contracts\View\Factory | \Illuminate\View\View
     */

    public function show(News $news){
    	// $message = News::find($news_id);

    	if (empty($news)){
    		return view('404');
    	}
    	
   		return view('news.show', 
    		compact('news')
    	);
	}

    public function create() {
        return view('news.create');
    }

    public function destroy( $news_id ) {
        News::find( $news_id )->delete();
        return redirect('/');
    }

    public function store() {
        $this->validate(request(),[
            'title'         =>  'required|min:5|max:150',
            'body'          =>  'required|min:5',
            'publish_date'  =>  'date',
        ]);


        $news = new News;
        
        $news->title        = request('title');
        $news->body         = request('body');
        $news->publish_date = request('publish_date');
        $news->user_id      = 1;

        $news->save();
        return redirect('/');
    }

    public function edit(News $news) {
        if (session()->hasOldInput()) {
            $news->title        = session()->getOldInput('title');
            $news->body         = session()->getOldInput('body');
            $news->publish_date = session()->getOldInput('publish_date');
        }
        return view ('news.edit', compact('news'));
    }

    public function update(News $news) {
        $this->validate(request(),[
            'title'         =>  'required|min:5|max:150',
            'body'          =>  'required|min:5',
            'publish_date'  =>  'date',
        ]);

        $news->update(request(['title','body','publish_date']));

        return redirect('/news/' . $news->id )->with('message', 'Het nieuwsbericht is aangepast!');
    }
}