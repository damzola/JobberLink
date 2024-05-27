<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\Jobcontroller;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\TalentController;


Route::Post("register", [AuthController::class, "register"]);
Route::post("signin", [AuthController::class, "signin"]);

// ROUTE FOR LOGGED OUT A USER
Route::middleware(['auth:sanctum'])->group(function () {
    Route::post("logout",[AuthController::class,"logout"]);
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
Route::Post('job', [Jobcontroller::class, 'job']);
Route::get("home", [JobController::class, "home"]);
Route::post("talent", [TalentController::class, "talent"]);
Route::get("info", [TalentController::class, "info"]);
Route::get("search/{key}", [Jobcontroller::class, 'search']);

Route::get("Welcome", function(){
    return 'Welcome on Board Man';
});
