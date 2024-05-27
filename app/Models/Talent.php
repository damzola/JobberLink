<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Talent extends Model
{
    use HasFactory, HasApiTokens, Notifiable;


    protected $table= 'talent';
    protected $fillable=[
        "fullname",
        "skill",
        "education",
        "category",
        "email",
        "phone",
        "image",
    ];
}
