<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reports extends Model
{
    use HasFactory;
    protected $fillable = ['student_id', 'teacher_to_subject_id', 'title', 'path', 'mark', 'note'];
    public function student()
    {
        return $this->belongsTo(Student::class, 'student_id');
    }
}