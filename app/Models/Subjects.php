<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subjects extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'code', 'note'];
    public function teachers()
    {
        return $this->belongsToMany(Teacher::class, 'teacher_to_subjects');
    }

    public function teacherToSubject()
    {
        return $this->belongsTo(TeacherToSubject::class, 'subject_id');
    }
}