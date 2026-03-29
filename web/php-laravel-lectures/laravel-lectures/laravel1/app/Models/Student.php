<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    //
    public $table = "lms_students";
    protected $fillable = [
        'name',
        'dept_id',
        'email',
        'address'
    ];

    public function department(){
        return $this->belongsTo(Department::class, 'dept_id');
    }
}
