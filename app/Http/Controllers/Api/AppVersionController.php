<?php

namespace App\Http\Controllers\Api;

use App\Models\AppConfig;
use App\Http\Controllers\Controller;

class AppVersionController extends Controller
{
    public function index()
    {
        $config = AppConfig::getConfig();

        // Only return the necessary public data
        return response()->json([
            'version' => $config->version,
        ]);
    }
}
