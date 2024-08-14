<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeacherToSubject extends Model
{
    use HasFactory;
    protected $fillable = ['teacher_id', 'subject_id', 'semester', 'year', 'note'];
    public function report()
    {
        return $this->hasMany(Reports::class);
    }
    public function teacher()
    {
        return $this->belongsTo(Teacher::class, 'teacher_id');
    }

    public function subject()
    {
        return $this->belongsTo(Subjects::class, 'subject_id');
    }
}