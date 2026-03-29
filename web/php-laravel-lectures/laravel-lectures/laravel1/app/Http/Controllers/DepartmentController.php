<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Department;
class DepartmentController extends Controller
{
    //
    public function departments(){
        $departments = Department::with("students")->get();
        
        // $departments = [
        //     ["id" => 101, "name" => "Dept 1"],
        //     ["id" => 102, "name" => "Dept 2"],
        //     ["id" => 103, "name" => "Dept 3"],
        // ];

        return response()->json([
            'departments' => $departments,
            'total'       => $departments->count()
        ]);
    }

    public function department($id){
        if ($id > 0) {
            $department = Department::where('id', $id)->first();
            if ($department) {
                return response()->json([
                    'status'    => true,
                    $department
                ]);
            } else {
                return response()->json([
                    'status'    => false,
                    'message'   => "Data not found!"
                ]);
            }
        }else {
            return response()->json([
                'status'    => false,
                'message'   => "Id not found!"
            ]);
        }
    }

    public function save(Request $request){
        
        $name = $request->deptName;

        $res = Department::create(['name' => $name]);

        if ($res) {
            return response()->json([
                'status'    => true,
                'message'   => "Data has been saved"
            ]);
        } else {
            return response()->json([
                'status'    => false,
                'message'   => "Failed to save data"
            ]);
        }


    }
    
    public function delete($id){

        if ($id > 0) {
            $department = Department::where('id', $id)->first();
            if ($department) {
            
                if ($department->students()->count() > 0) {
                    return response()->json([
                        'status'    => false,
                        'message'   => "Department has students. Can't delete!"
                    ]);
                } else {
                    $department->delete();
                    return response()->json([
                        'status'    => true,
                        'message'   => "Data has been deleted"
                    ]);
                }

            } else {
                return response()->json([
                    'status'    => false,
                    'message'   => "Data not found!"
                ]);
            }
        }else {
            return response()->json([
                'status'    => false,
                'message'   => "Id not found!"
            ]);
        }
    }

    public function update(Request $request){
        $id = $request->id;
        $name = $request->deptName;

        $res = Department::where('id', $id)->update(['name' => $name]);

        if ($res) {
            return response()->json([
                'status'    => true,
                'message'   => "Data has been updated"
            ]);
        } else {
            return response()->json([
                'status'    => false,
                'message'   => "Failed to save data"
            ]);
        }
    }
}

//  student tbl fields: id, name, dept, email, address
