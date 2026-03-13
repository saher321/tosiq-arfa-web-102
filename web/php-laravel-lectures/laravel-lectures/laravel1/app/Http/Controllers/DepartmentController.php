<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Department;
class DepartmentController extends Controller
{
    //
    public function departments(){
        $departments = Department::all();
        
        // $departments = [
        //     ["id" => 101, "name" => "Dept 1"],
        //     ["id" => 102, "name" => "Dept 2"],
        //     ["id" => 103, "name" => "Dept 3"],
        // ];

        return [
            'data' => $departments,
            'total'=> $departments->count()
        ];
    }
}
