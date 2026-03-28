<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DepartmentController;
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