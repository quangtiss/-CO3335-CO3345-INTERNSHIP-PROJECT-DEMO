<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Imports extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'status', 'path', 'created_by', 'note'];
}