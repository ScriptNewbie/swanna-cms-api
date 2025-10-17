<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AppConfig extends Model
{
    use HasFactory;

    protected $table = 'app_config';
    public $timestamps = false;

    protected $fillable = ['version'];

    /**
     * Get or create the single instance of app config
     */
    public static function getConfig()
    {
        $config = self::first();

        if (!$config) {
            $config = self::create([
                'version' => "1.0.0",
            ]);
        }

        return $config;
    }
}
