<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\News;

class AjaxController extends Controller
{	
	/**
	 * deze functie haalt x nieuwsberichten op via het news-model
	 * en geeft deze geserialiseert terug als json
	 * @param  integer   $limit   aantal berichten
	 * @return json
	 */
    public function fetchSome($limit){
    	// x nieuwsitems ophalen via nieuws-model
    	$newsItems = News::getSomeNewsItems($limit);
    	
    	// het object converteren naar json en teruggeven
    	return json_encode($newsItems);    	
    }

    /**
     * deze functie haalt alle nieuwsberichten op via het news-model
     * @return json
     */
    public function fetchAll(){
    	// alle nieuwsitems ophalen via nieuws-model
    	$allnews = News::getAllNewsItems();

    	// het object converteren naar json en teruggeven
    	return json_encode($allnews);    	
    }
}