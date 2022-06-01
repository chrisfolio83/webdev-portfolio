<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('/news', 			'NewsController@store'	);
Route::post('/news/{news}', 	'NewsController@update'	);

Route::delete('/news/{news_id}','NewsController@destroy');

Route::get('/news/create', 		'NewsController@create'	);
Route::get('/news', 			'NewsController@index'	);
Route::get('/news/{news}/edit', 'NewsController@edit'	);
Route::get('/news/{news}', 		'NewsController@show'	);

Route::get('/', 				'PageController@index'	);
Route::get('/{page}', 			'PageController@show'	);

Route::get('/ajax/news',		'AjaxController@fetchAll' );
Route::get('/ajax/news/{limit}','AjaxController@fetchSome');