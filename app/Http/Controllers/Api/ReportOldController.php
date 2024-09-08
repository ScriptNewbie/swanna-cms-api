<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;
use Carbon\Carbon;

class ReportOldController extends Controller
{
    public function index()
    {
        //Limit amount of messages invoked by crawlers
        $what = request()->query('what');
        if ($what !== "ogloszenia") {
            return response('Not found', 404)
                ->header('Content-Type', 'text/plain');
        }

        $mailRecord = DB::table('mail')->first();

        if (!$mailRecord) {
            return response('Wystąpił błąd! Spróbuj później!', 500)
                ->header('Content-Type', 'text/plain');
        }

        $now = Carbon::now()->timestamp;
        $next = $mailRecord->last + 3600; // Next time notification can be sent
        $when = ceil(($next - $now) / 60);

        $minut = $this->getTimeSuffix($when);

        if ($now > $next) {

            Mail::raw('Zaaktualizuj ogłoszenia na stronie!', function ($message) {
                $message->from('admin@swanna.net.pl', 'Admin');
                $message->to('marcin.konopka98@protonmail.com');
                $message->subject('Zaaktualizuj ogłoszenia na stronie!');
            });

            DB::table('mail')->update(['last' => $now]);

            return response('Dziękujemy za wysłanie zgłoszenia!', 200)
                ->header('Content-Type', 'text/plain');
        }

        return response("Ktoś niedawno wysłał zgłoszenie! Następne zgłoszenie może zostać wysłane za {$when} {$minut}", 200)
            ->header('Content-Type', 'text/plain');
    }

    private function getTimeSuffix($minutes)
    {
        if ($minutes == 1) {
            return "minutę!";
        }

        if (($minutes < 10 || $minutes > 20) && ($minutes % 10 == 2 || $minutes % 10 == 3 || $minutes % 10 == 4)) {
            return "minuty!";
        }

        return "minut!";
    }
}
