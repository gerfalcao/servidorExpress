<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('user/{user}', function(\App\Models\User $user){
    return $user;
});


Route::prefix('usuarios')->group(function(){
    Route::get('', function(){
        return 'Usuários';
    });
    Route::get('/{id}' ,function(){
        return 'Mostrar detalhes';
    });
    Route::get('/{id}/tags' ,function(){
        return 'Mostrar tags';
    });

});

Route::get('/a-empresa/{string?}', function ($string = null) {
    return $string;
    // return view('welcome');
});

// Route::get('/user/{paramA}/{paramB}', function ($paramA, $paramB) {
//     return $paramA . ' - ' . $paramB;
//     // return view('welcome');
// });
