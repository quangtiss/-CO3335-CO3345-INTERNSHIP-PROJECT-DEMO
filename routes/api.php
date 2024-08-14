<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\ImportsController;
use App\Http\Controllers\SubjectsController;
use App\Http\Controllers\TeacherToSubjectController;
use App\Http\Controllers\ReportsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::apiResource('students', StudentController::class);
Route::apiResource('users', UserController::class);
Route::apiResource('teachers', TeacherController::class);
Route::apiResource('imports', ImportsController::class);
Route::apiResource('subjects', SubjectsController::class);
Route::apiResource('teacher_to_subjects', TeacherToSubjectController::class);
Route::apiResource('reports', ReportsController::class);