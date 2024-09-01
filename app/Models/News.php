<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $table = 'news';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = ['title', 'publicationDate', 'author', 'content'];
    protected $hidden = ['author'];
}
