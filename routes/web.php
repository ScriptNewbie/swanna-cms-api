<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\FilesController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\AnnouncementsController;
use App\Http\Middleware\AdminMiddleware;
use App\Http\Middleware\SuperAdminMiddleware;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

Route::get('/', function () {
    if (Auth::check() && Auth::user()->admin) {
        return redirect()->route('news');
    } elseif (Auth::check()) {
        return redirect()->route('dashboard');
    } else {
        return redirect()->route('login');
    }
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/dashboard', function () {
        if (Auth::user()->admin) {
            return redirect()->route('news');
        }
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::middleware(['auth', AdminMiddleware::class])->group(function () {
    Route::get('/news', [NewsController::class, 'index'])->name('news');
    Route::post('/news', [NewsController::class, 'store'])->name('news.store');
    Route::delete('/news/{id}', [NewsController::class, 'destroy'])->name('news.destroy');
    Route::get('/news/{id}', [NewsController::class, 'edit'])->name('news.edit');
    Route::put('/news/{id}', [NewsController::class, 'update'])->name('news.update');

    Route::get('/upload-files', [FilesController::class, 'index'])->name('files');
    Route::post('/upload-files', [FilesController::class, 'store'])->name('files.upload');
    Route::delete('/upload-files/{name}', [FilesController::class, 'destroy'])->name('files.delete');

    Route::get('/announcements', [AnnouncementsController::class, 'index'])->name('announcements');
    Route::post('/announcements', [AnnouncementsController::class, 'store'])->name('announcements.upload');
    Route::post('/announcements/next', [AnnouncementsController::class, 'storeNext'])->name('announcements.upload.next');
    Route::put('/announcements/next-as-current', [AnnouncementsController::class, 'nextAsCurrent'])->name('announcements.next.current');
});

Route::middleware(['auth', SuperAdminMiddleware::class])->group(function () {
    Route::get('/users', [UsersController::class, 'index'])->name('users');
    Route::delete('/users/{id}', [UsersController::class, 'destroy'])->name('users.destroy');
    Route::patch('/users/super-admin/{id}', [UsersController::class, 'makeSuperAdmin'])->name('users.makeSuperAdmin');
    Route::patch('/users/admin/{id}', [UsersController::class, 'makeAdmin'])->name('users.makeAdmin');
    Route::patch('/users/demote/{id}', [UsersController::class, 'makeUser'])->name('users.demote');
});

require __DIR__ . '/auth.php';
