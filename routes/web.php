<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

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
Route::middleware(['auth'])->group(function () {
    Route::get('/', function () {
        return redirect()->route('dashboard');
    });
    Route::get('/dashboard', [App\Http\Controllers\HandleEvent::class, 'showDashboard'])->name('dashboard');
    Route::get('/logout', [App\Http\Controllers\Auth\LoginController::class, 'logout'])->name('logout');

    Route::middleware(['student_role'])->group(function () {
        Route::get('/dashboard/student_information', [App\Http\Controllers\HandleEvent::class, 'showFormStudent'])->name('student_information');
        Route::get('dashboard/upload-report', [App\Http\Controllers\HandleEvent::class, 'showUploadReport'])->name('upload-report');
    });

    Route::middleware(['admin_role'])->group(function () {
        Route::get('/dashboard/teacher_information', [App\Http\Controllers\HandleEvent::class, 'showFormTeacher'])->name('teacher_information');
        Route::get('dashboard/subject-information', [App\Http\Controllers\HandleEvent::class, 'showFormSubject'])->name('subject_information');
        Route::get('dashboard/import-teacher', [App\Http\Controllers\HandleEvent::class, 'showImportTeacher'])->name('import-teacher');
        Route::get('dashboard/import-student', [App\Http\Controllers\HandleEvent::class, 'showImportStudent'])->name('import-student');
        Route::get('dashboard/import-subject', [App\Http\Controllers\HandleEvent::class, 'showImportSubject'])->name('import-subject');
        Route::get('dashboard/register-teach', [App\Http\Controllers\HandleEvent::class, 'showRegisterTeach'])->name('register-teach');
    });

    Route::middleware(['teacher_role'])->group(function () {
        Route::get('dashboard/set-mark', [App\Http\Controllers\HandleEvent::class, 'showSetMark'])->name('set-mark');
    });

    Route::middleware(['admin_teacher_role'])->group(function () {
        Route::get('dashboard/export-mark', [App\Http\Controllers\HandleEvent::class, 'showExportMark'])->name('export-mark');
    });

    Route::middleware(['student_teacher_role'])->group(function () {
        Route::get('dashboard/set-image', [App\Http\Controllers\HandleEvent::class, 'showSetImage'])->name('set-image');
    });

    Route::post('store-queue', [App\Http\Controllers\HandleEvent::class, 'storeQueue']);
    Route::get('getDataUserLogin', [App\Http\Controllers\HandleEvent::class, 'getDataUserLogin']);
    Route::post('hash-password', [App\Http\Controllers\HandleEvent::class, 'hashPassword']);
    Route::post('/upload-file', [App\Http\Controllers\HandleEvent::class, 'uploadFile']);
    Route::post('search-teacher-subject', [App\Http\Controllers\TeacherToSubjectController::class, 'search']);
    Route::post('search-name-id', [App\Http\Controllers\HandleEvent::class, 'searchNameToID']);
    Route::post('upload-report', [App\Http\Controllers\HandleEvent::class, 'uploadReport']);
    Route::post('search-report', [App\Http\Controllers\ReportsController::class, 'searchReport']);
    Route::post('search-set-mark', [App\Http\Controllers\HandleEvent::class, 'searchSetMark']);
    Route::post('/search-export-mark', [App\Http\Controllers\HandleEvent::class, 'searchExportMark']);
    Route::get('/export-excel-mark/{year}/{semester}/{teacherID}/{teacherName}/{subjectID}/{subjectName}/{teacherToSubject}', [App\Http\Controllers\HandleEvent::class, 'exportMark']);
    Route::post('set-image', [App\Http\Controllers\HandleEvent::class, 'setImage']);
    Route::get('/download/{temp1}/{temp2}/{temp3}/{temp4}/{path}', function ($temp1, $temp2, $temp3, $temp4, $path) {
        $fullPath = storage_path('app/' . $temp1 . '/' . $temp2 . '/' . $temp3 . '/' . $temp4 . '/' . $path);
        return response()->download($fullPath);
    })->name('downloadFile');

});

Auth::routes();

Route::middleware(['guest'])->group(function () {
    Route::get('/login', [App\Http\Controllers\Auth\LoginController::class, 'index'])->name('login');
    Route::post('/login', [App\Http\Controllers\Auth\LoginController::class, 'check'])->name('login_check');
    Route::post('/register', [App\Http\Controllers\Auth\RegisterController::class, 'store'])->name('register');
});