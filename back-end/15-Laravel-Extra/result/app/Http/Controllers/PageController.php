<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Page;
use App\News;

class PageController extends Controller
{
/**
     * laat de indexpagina zien met 2 nieuwste berichten
     * @return \Illuminate\Contracts\View\Factory | \Illuminate\View\View
     */
    public function index(){
        $page      = Page::activePage( 'welkom' );
    	$messages  = News::LatestNews(3);
    	return view( 'pages.index', compact('messages','page') );
    }
    /**
     * laat een andere pagina zien
     * @param  integer $page_id
     * @return \Illuminate\Contracts\View\Factory | \Illuminate\View\View
     */

    public function show($url){
    	$page = Page::activePage($url);
   		return view('pages.show', compact('page') );
	}
}
