<!DOCTYPE html>
<html lang="pl-PL">

<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta
        name="description"
        content="Parafia św. Anny w Tarnowskich Górach - strona dla starszych urządzeń" />
    <meta
        name="keywords"
        content="Parafia, Anny, Tarnowskich, Górach, Tarnowskie, Góry" />
    <title>
        Parafia św. Anny w Tarnowskich Górach - strona dla starszych urządzeń
    </title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: rgb(136, 160, 227);
            font-family: "Times New Roman";
        }

        #logo {
            position: relative;
            width: 100%;
            min-height: 200px;
            background-color: #3f4d7f;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #logo a {
            color: white;
            text-decoration: none;
        }

        .logobigger {
            font-size: 3rem;
        }

        .logonapis {
            text-align: center;
            cursor: pointer;
        }

        #contentWrapper {
            width: 100%;
            background-color: white;
        }

        #contentContainer {
            padding: 20px;
        }

        #content {
            padding: 20px;
        }

        .title_home {
            position: relative;
            text-align: justify;
            margin-bottom: 0px;
            margin-top: 0;
            font-weight: 500;
            line-height: 1.2;
            display: block;
        }

        .post_home {
            position: relative;
            text-align: justify;
            margin-top: 15px;
            font-size: larger;
        }

        .linia {
            position: relative;
            width: calc(100% + 30px);
            left: -15px;
            height: 1px;
            background-color: darkgrey;
            margin-top: 25px;
            margin-bottom: 25px;
        }

        .post_home>p {
            margin: 0em;
        }

        .news {
            border: 1px solid grey;
            padding: 10px;
        }

        .newssep {
            height: 1px;
            background-color: grey;
            width: 100%;
            margin-bottom: 15px;
        }

        .opublikowano {
            font-weight: bold;
        }

        .menu {
            width: 100%;
            text-align: center;
            background-color: #848ead;
        }

        .menu a:hover {
            background-color: #a6b0cf;
        }

        .menu a {
            width: 200px;
            display: inline-block;
            color: white;
            text-decoration: none;
            padding: 10px;
        }

        .back {
            position: fixed;
            bottom: 10px;
            right: 30px;
            padding: 10px;
            background-color: #848ead;
            border-radius: 5px;
            color: white;
            cursor: pointer;
            text-decoration: none;
        }

        .back:hover {
            background-color: #a6b0cf;
            color: white;
        }

        .space {
            height: 50px
        }

        #contentContainer a {
            text-decoration: none;
            color: #1E90FF;
        }

        #contentContainer a:visited {
            color: #1E90FF;
        }
    </style>
</head>

<body>
    <div id="logo">
        <a href="/old">
            <div class="logonapis">
                Parafia <br />
                <span class="logobigger">Świętej Anny</span>
                <br />w Tarnowskich Górach
            </div>
        </a>
    </div>
    <div class="menu"><a href="#news">Aktualności</a> <a href="#nabozenstwa">Porządek nabożeństw </a><a href="#historia">Historia kościoła</a> <a href="#kontakt">Kontakt</a></div>
    <div id="contentContainer">
        <div id="contentWrapper">
            <div id="content">
                <h2 class="title_home">Strona dla starszych urządzeń!</h2>
                <div class="post_home">
                    Jesteś na stronie dla (bardzo) starych urządzeń. Prawdopodobnie
                    twoje urządzenie obsługuje normalną stronę która znajduje się pod
                    adresem
                    <a href="https://swanna.net.pl">swanna.net.pl</a>
                </div>
                <div class="linia"></div>
                <h2 id="nabozenstwa" class="title_home">
                    Ogłoszenia parafialne i porządek nabożeństw
                </h2>
                <div class="post_home">
                    Pełne ogłoszenia parafialne i porządek nabożeństw znajdują się pod
                    <a
                        target="_blank"
                        href="http://api.swanna.net.pl/api/ogloszenia/ogloszenia.pdf">tym adresem (kliknij tutaj)</a>! Ogłoszenia z następnego tygodnia (nie zawsze są dostępne!) znajdziesz natomiast <a
                        target="_blank"
                        href="http://api.swanna.net.pl/api/ogloszenia/next.pdf">pod tym adresem (kliknij tutaj)</a>. Jeżeli masz problem z otworzeniem ogłoszeń, skontaktuj się z nami
                    mailowo, na adres <i>kontakt@swanna.net.pl</i> - prześlemy ci
                    aktualne ogłoszenia drogą mailową.
                    <br /> <br />
                    Jeżeli znajdujące się pod podanym adresem ogłoszenia są nieaktualne, prosimy o wysłanie zgłoszenia o tym fakcie klikając <a
                        target="_blank"
                        href="http://api.swanna.net.pl/api/report-old?what=ogloszenia">tutaj</a>!
                </div>
                <div class="linia"></div>
                <h2 id="kontakt" class="title_home">Dane parafii</h2>
                <div class="post_home">
                    <b>Adres kościoła pw. Świętej Anny:</b>
                    <br />
                    <a href="https://goo.gl/maps/1GfMw5EyXFvzUscZA" target="_blank">ul. Gliwicka</a>
                    <br />
                    42-600 Tarnowskie Góry
                    <br />
                    <b>Adres probostwa, kancelarii oraz kaplicy pw. Świętej Jadwigi:</b>
                    <br />
                    <a href="https://goo.gl/maps/uQynd4Ecs2qATDLHA" target="_blank">ul. Torowa 45</a>
                    <br />
                    42-600 Tarnowskie Góry <br />
                    <b>Godziny pracy kancelarii:</b>
                    <br />
                    Poniedziałek 12:00 - 15:00
                    <br />
                    Piątek 15:00 - 17:00
                    <br />
                    <b>e-mail:</b> kontakt@swanna.net.pl <br />
                    <b>Tel.</b> +48 32 285 85 47 <br />
                    <b>Numer konta bankowego parafii:</b> PL 42 1050 1230 1000 0090 3256
                    7647 <br />
                    <b>Standardy ochrony dzieci:</b> <a href="https://api.swanna.net.pl/api/files/standardy.v1.pdf" target="_blank">Znajdują się pod tym adresem.</a>
                </div>
                <div class="linia"></div>
                <h2 id="news" class="title_home">Aktualności</h2>
                <div class="post_home">
                    <div class="news">
                        @forelse($newsItems as $index => $news)
                        <h3>{{ $news['title'] }}</h3>
                        <span class="opublikowano">Opublikowano:</span> {{ $news['date'] }}
                        <br /><br />
                        <div class="trescn">{!! $news['content'] !!}</div>
                        @if($index < count($newsItems) - 1)
                            <div class="newssep">
                    </div>
                    @endif
                    @empty
                    <span class="tytul">Brak aktualności</span>
                    <br /><span class="opublikowano">Opublikowano: 01/01/1970</span>
                    <br /><br />
                    <div class="trescn">Zajrzyj później!</div>
                    @endforelse
                </div>
                <div class="linia"></div>
                <h2 id="historia" class="title_home">
                    Historia kościoła
                </h2>
                <div class="post_home">
                    Według stanu z 1 grudnia 1992 roku, na terenie diecezji gliwickiej
                    znajduje się sześć kościołów p.w. św. Anny. Jednym z nich jest
                    kościół parafialny w Tarnowskich Górach, przy ul. Gliwickiej.
                    <br /><br />
                    Aczkolwiek świątynię tę wierni od wielu lat darzą wielkim
                    sentymentem, to jednak ze względu na brak obszernych materiałów
                    źródłowych i dokumentów historycznych niezwykle trudno odtworzyć
                    jej dzieje. Niemniej z tego, co ocalało, możemy choć w bardzo
                    ograniczony sposób przybliżyć jej historię.
                    <br />
                    <br />
                    Na początku był to kościół „pogrzebowy", bo zasadniczo w takim
                    celu został zbudowany na cmentarzu. W miarę rozwoju miasta
                    zwiększała się również liczba jego mieszkańców. Trzeba było myśleć
                    o wybudowaniu większego, murowanego kościoła na miejscu
                    znajdującej się tam pierwotnie drewnianej kaplicy. Nadarzyła się
                    po temu dobra okazja.
                    <br />
                    <br />
                    Mianowicie mieszkanka Tarnowskich Gór p. Goske (Gąska?) w
                    testamencie podarowała miastu swój dom, który miał być sprzedany
                    na budowę nowego kościoła na cmentarzu „za miastem". Dom
                    sprzedano, ale pieniędzy nie wystarczyło. Gromadzono dalsze środki
                    na ten cel.
                    <br />
                    <br />
                    Również mistrz górniczy, późniejszy burmistrz tarnogórski, Jakub
                    Gruzełko zapisał miastu siedemset talarów na rzecz „budowy
                    kościoła na cmentarzu przed Bramą Gliwicką zwaną też wrocławską".
                    Wtedy rada miejska w Tarnowskich Górach mogła przystąpić do budowy
                    wspomnianego kościoła. Budowę prowadzili tutejsi mistrzowie:
                    Grzegorz Marczewicz i Baltazar Roth.
                    <br />
                    <br />
                    Koszty tej inwestycji zostały pokryte głównie dzięki fundacjom
                    Gruzełki i Goskowej. Trudno dokładnie ustalić, kiedy ukończono
                    budowę kościoła św. Anny. Jedni (np. J.Samek) podają rok 1612,
                    inni (K.Winkler, J.Nowak,) rok 1619.
                    <br />
                    <br />
                    Na cześć swojego najhojniejszego fundatora Jakuba Gruzełki kościół
                    ten otrzymał imię św. Jakuba. Pośrodku gontowego dachu miał
                    drewnianą wieżyczkę z małą sygnaturką, którą dzwoniono w czasie
                    uroczystości pogrzebowych. Na początku kościół należał do
                    protestantów. Katolikom został oddany w 1630 roku. Wtedy też
                    otrzymał nowe wezwanie, mianowicie św. Anny. Katolicy tarnogórscy,
                    mając odtąd dwa kościoły: farny i cmentarny, nie potrzebowali już
                    uczęszczać na nabożeństwa do Starych Tarnowic.
                    <br />
                    <br />
                    W ciągu wieków kościół św. Anny przechodził różne koleje.
                    Ciekawostką może być fakt, że główny ołtarz jest darem proboszcza
                    gliwickiego - ks. Sendeliusa.
                    <br />
                    <br />
                    Duże zainteresowanie świątynią wykazał także proboszcz kościoła
                    Świętych Apostołów Piotra i Pawła w Tarnowskich Górach, ks.
                    Aleksander Klaybor. W II połowie XVII wieku przeprowadził
                    gruntowny remont. Akta wizytacyjne z 29 listopada 1695 roku,
                    podpisane przez ks. Władysława Opockiego, archidiakona
                    krakowskiego, podają, że kościół cmentarny św. Anny posiada
                    pięknie wymalowane prezbiterium i nowe ławki. W 1707 roku
                    dobudowano zakrystię. Zaś w latach 1846-1847 kościół został
                    powiększony. Wzbogacił się też o nową wieżę. Po tej rozbudowie
                    zyskał wyraźnie pod względem architektonicznym i mógł pomieścić
                    więcej ludzi. Jak podaje J.Heyda, stał się prawdziwą ozdobą
                    miasta.
                    <br />
                    <br />
                    Dużo uwagi poświęcił kościołowi św. Anny także ks. Antoni
                    Sachneidersky, proboszcz tarnogórski w latach 1811-1851.
                    <br />
                    <br />
                    Oprócz ceremonii pogrzebowych, sprawowano w tym kościele
                    nabożeństwa w czasie Dni Krzyżowych, w Dzień Zaduszny i w
                    uroczystości jego patronki, św. Anny.
                    <br />
                    <br />
                    W latach międzywojennych świątynia służyła jako kościół
                    garnizonowy, dla stacjonujących w Tarnowskich Górach żołnierzy
                    pułków piechoty i ułanów.
                    <br />
                    <br />
                    Po II wojnie światowej władze duchowne nakazały kościół
                    wyremontować i przystosować do stałych nabożeństw. W okolicy
                    świątyni powstawało coraz więcej domów mieszkalnych, wzrosła
                    liczba wiernych. Toteż od 1958 roku mianowano tam osobnych
                    duszpasterzy - rektorów...
                    <br />
                    <br />
                    3 maja 1981 roku, przy kościele erygowano samodzielną parafię,
                    wydzieloną z parafii świętych Apostołów Piotra i Pawła.
                    <br />
                    <br />
                    <div class="podpis1">
                        ks. dr Herbert Jeziorski, <br />
                        „Dekanat Tarnowskie Góry"
                        <br />
                        <br />
                        Źródło:
                        <a
                            href="http://www.montes.pl/"
                            target="_blank"
                            rel="noreferrer">
                            www.montes.pl
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    <a href="#logo" class="back">Powróć na górę strony</a>
    <div class="space"></div>
</body>

</html>