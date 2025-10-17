<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\ReportOldController;
use App\Http\Controllers\Api\CustomButtonController;
use App\Http\Controllers\AnnouncementsController;
use App\Http\Controllers\FilesController;
use App\Http\Controllers\Api\AppVersionController;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/news', [NewsController::class, 'index']);
Route::get('/report-old', [ReportOldController::class, 'index']);
Route::get('/custom-button', [CustomButtonController::class, 'index']);
Route::get('/app-version', [AppVersionController::class, 'index']);

Route::get('/files/{name}', [FilesController::class, 'show'])->name('files.show');
Route::get('/ogloszenia/{filename}', [AnnouncementsController::class, 'show'])->name('announcements.show');
