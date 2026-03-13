<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    //
    public $table = "lms_departments";
    protected $fillable = [
        'name',
    ];
}
