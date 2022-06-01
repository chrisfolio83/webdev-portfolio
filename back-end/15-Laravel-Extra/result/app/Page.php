<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
 	/**
 	 * scopeActivePage description geeft onze (active) pagina als query
 	 * @param   		$query 
 	 * @param  string 	$url   
 	 * @return Mixed
 	 */
	public function scopeActivePage($query, $url = 'welcome'){
		return $query->where(
			[
				['active', '=' , 1	 ],
				['url'	 , '=' , $url],
			])->first();
	}
}
