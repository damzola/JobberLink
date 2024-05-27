<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Job extends Model
{
    use HasApiTokens, HasFactory, Notifiable;


    protected $fillable = [
        'title_post',
        'company',
        'education',
        'category',
        'skill',

    ];
}
