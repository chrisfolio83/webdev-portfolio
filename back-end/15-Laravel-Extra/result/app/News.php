<?php

namespace App;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class News extends Model
{
    protected $fillable = ['title', 'body', 'publish_date'];

	/**
	 * @return NewsObjecten
	 */
    public function scopeLatestNews($query, $limit){
    	return $query->orderBy('publish_date', 'desc')
    	->where('publish_date','<=', date('Y-m-d', time() ) )
    	->limit($limit)->get();
    }

    public function getDate(){
    	$carbonDate = Carbon::now();
    	$carbonDate->timestamp(strtotime($this->publish_date))
    			   ->timezone('Europe/Amsterdam')
    			   ->setLocale(LC_ALL, 'nl_NL.UTF-8');

    	return $carbonDate;
    }


    /**
     * haalt x nieuwsitems op uit de database en geef als object terug (aan de
     * news-controller)
     * @param  INT     $limit    het aantal nieuwsberichten
     * @return object            x nieuwsberichten uit de tabel 'news'
     */
    public static function getSomeNewsItems($limit){
        $newsItems = DB::table('news')->limit($limit)->get();
        // geef object terug
        return $newsItems;
    }


    /**
     * haalt alle nieuwsitems op uit de database en geef als object terug (aan de
     * news-controller)
     * @return object            alle nieuwsberichten uit de tabel 'news'
     */
    public static function getAllNewsItems(){
        $allNewsItems = DB::table('news')->get();
        // geef object terug
        return $allNewsItems;
    }
}