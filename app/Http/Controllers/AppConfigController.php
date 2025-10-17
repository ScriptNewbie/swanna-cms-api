<?php

namespace App\Http\Controllers;

use App\Models\AppConfig;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppConfigController extends Controller
{
    public function index()
    {
        $config = AppConfig::getConfig();

        return Inertia::render('AppConfig/Index', [
            'config' => $config
        ]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'version' => 'required|string|max:255',
        ]);

        $config = AppConfig::getConfig();
        $config->update($validated);

        return redirect()->back()->with('success', 'App configuration updated successfully!');
    }
}
