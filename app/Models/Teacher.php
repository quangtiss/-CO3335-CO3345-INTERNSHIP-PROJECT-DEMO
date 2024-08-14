<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Subjects;

class Teacher extends Model
{
    use HasFactory;
    protected $fillable = ['last_name', 'first_name', 'teacher_code', 'department', 'faculty', 'address', 'phone', 'note'];
    public function subjects()
    {
        return $this->belongsToMany(Subjects::class, 'teacher_to_subjects', 'teacher_id', 'subject_id');
    }

    public function teacherToSubject()
    {
        return $this->hasMany(TeacherToSubject::class);
    }
}