<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CustomButtonSetting extends Model
{
    use HasFactory;

    protected $fillable = ['enabled', 'name', 'url'];

    /**
     * Get or create the single instance of custom button settings
     */
    public static function getSettings()
    {
        $settings = self::first();

        if (!$settings) {
            $settings = self::create([
                'enabled' => false,
                'name' => "",
                'url' => "",
            ]);
        }

        return $settings;
    }
}
