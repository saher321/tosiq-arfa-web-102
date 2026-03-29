<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
class StudentController extends Controller
{
    //
    public function students(){
        $students = Student::with("department")->get();
        
        // $students = [
        //     ["id" => 1, "name" => "Student 1", "email" => "student1@example.com"],
        //     ["id" => 2, "name" => "Student 2", "email" => "student2@example.com"],
        //     ["id" => 3, "name" => "Student 3", "email" => "student3@example.com"],
        // ];

        return response()->json([
            'students' => $students,
            'total'    => $students->count()
        ]);
    }

    public function student($id){
        if ($id > 0) {
            $student = Student::where('id', $id)->first();
            if ($student) {
                return response()->json([
                    'status'    => true,
                    $student
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
        
        $name = $request->stdName;
        $dept_id = $request->deptId;
        $email = $request->email;
        $address = $request->address;

        $res = Student::create([
            'name' => $name,
            'dept_id' => $dept_id,
            'email' => $email,
            'address' => $address
        ]);

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
            $student = Student::where('id', $id)->first();
            if ($student) {
                $student->delete();
                return response()->json([
                    'status'    => true,
                    'message'   => "Data has been deleted!"
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

    public function update(Request $request){
        $id = $request->id;
        $name = $request->stdName;
        $dept_id = $request->deptId;
        $email = $request->email;
        $address = $request->address;

        $res = Student::where('id', $id)->update([
            'name' => $name,
            'dept_id' => $dept_id,
            'email' => $email,
            'address' => $address
        ]);

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
