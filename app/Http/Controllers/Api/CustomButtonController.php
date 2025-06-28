<?php

namespace App\Http\Controllers\Api;

use App\Models\CustomButtonSetting;
use App\Http\Controllers\Controller;

class CustomButtonController extends Controller
{
    public function index()
    {
        $settings = CustomButtonSetting::getSettings();

        // Only return the necessary public data
        return response()->json([
            'enabled' => $settings->enabled,
            'name' => $settings->name,
            'url' => $settings->url,
        ]);
    }
}
