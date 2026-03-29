<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\StudentController;
// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

// Route::get('/colors', function () {
//     $colors = ["Red", "Green", "Blue"];
//     return $colors;
// });

Route::get('/departments', [DepartmentController::class, 'departments'])->name('departments.list');

Route::get('/departments/{id}/edit', [DepartmentController::class, 'department'])->name('departments.edit');

Route::post('/departments/save', [DepartmentController::class, 'save'])->name('departments.save');

Route::post('/departments/update', [DepartmentController::class, 'update'])->name('departments.update');

Route::get('/departments/{id}/delete', [DepartmentController::class, 'delete'])->name('departments.delete');

// Stduents

Route::get('/students', [StudentController::class, 'students'])->name('students.list');

Route::get('/students/{id}/edit', [StudentController::class, 'student'])->name('students.edit');

Route::post('/students/save', [StudentController::class, 'save'])->name('students.save');

Route::post('/students/update', [StudentController::class, 'update'])->name('students.update');

Route::get('/students/{id}/delete', [StudentController::class, 'delete'])->name('students.delete');