---
title: "Technik"
description: "GitLab, WLAN, Uni-Mail, etc."
pubDate: "Jun 17 2025"
ordinal: 3
heroImage: "/src/images/wiki/technology.png"
---

### GitLab

Hier findest du eine [Anleitung]({{"/images/static/Gitlab-Anleitung.pdf" | relative_url}}) für das GitLab des FSR Informatik.

#### Erreichbarkeit

Das Git ist über deinen Browser auf https://git.fsinf.informatik.uni-leipzig.de/ erreichbar.
Einloggen kannst du dich mit dem selben Account, mit dem du dich in den PC-Pools anmeldest. Nähere Informationen zum Informatik-Pool Account findest du unter [fakultätsinterne Arbeitsplätze](#3.).

#### Struktur

Alle Module haben ein eigenes Repository.
Wenn ein Modul fehlt, bei dem du gerne Material hinzufügen möchtest, dann kannst du auch diesbezüglich eine [Mail](mailto:{{ site.email }}) schreiben.
Sämtliches Material wird nach Semester geordnet. Die Ordner der einzelnen Semester müssen “WiSeXX” oder “SoSeXX” heißen, wobei “XX” durch die entsprechende Jahreszahl, des Jahres, ersetzt werden muss, in dem das Semester angefangen hat.
Als Unterordner kann es die Ordner “Uebungen”, “Skript” und “Klausuren" geben. Diese Bezeichnungen sprechen für sich selbst.

### WLAN

Die lange Anleitung zur WLAN-Einrichtung findet ihr auf den Seiten des [Universitätsrechenzentrums](https://www.urz.uni-leipzig.de/dienste/netze-zugang/wlan/), einschließlich [ausführlicher Anleitungen](https://www.urz.uni-leipzig.de/hilfe/anleitungen-a-z/wlan-einrichtung/) zu vielen Betriebssystemen.
Kurz gefasst: Access Point eduroam, DHCP, WPA & WPA2 Enterprise, TTLS, PAP, anonymous, mai12xyz@studserv.uni-leipzig.de + euer Studserv-Passwort und ihr braucht [dieses Zertifikat](https://pki.pca.dfn.de/unilei-ca/pub/cacert/rootcert.crt).

Du nutzt Linux und keinen Network Manager und willst weiterhin netctl verwenden, um dich mit eduroam zu verbinden?

Das Profil unten läuft, wenn man die groß geschriebenen Konstanten INTERFACE, USER und PASSWORD entsprechend ändert.
Das T-Telesec GlobalRoot Class 2 Zertifikat sollte standardmäßig schon vorinstalliert sein.

    Description='A wireless connection to the eduroam network provided by
    the Leipzig University.'
    Interface=INTERFACE
    Connection=wireless
    Security='wpa-configsection'
    IP=dhcp
    ESSID=eduroam
    WPAConfigSection=(
        'ssid="eduroam"'
        'key_mgmt=WPA-EAP'
        'eap=TTLS'
        'phase2="auth=PAP"'
        'ca_cert="/etc/ssl/certs/T-TeleSec_GlobalRoot_Class_2.pem"'
        'altsubject_match="DNS:radius.uni-leipzig.de"'
        'identity="USER@uni-leipzig.de"'
        'anonymous_identity="eduroam@uni-leipzig.de"'
        'password="PASSWORD"'
    )

### Uni E-Mail / StudServ

Die Uni Leipzig stellt euch für die Zeit eures Studiums eine eigene Mailadresse mit 300 MB Speicher zur Verfügung. Die eMail-Adresse lautet mai12xyz@studserv.uni-leipzig.de.
Auch wenn ihr diese Adresse nicht aktiv nutzt, werden dorthin z.B. offizielle Nachrichten der Universitätsverwaltung, der Unibibliothek oder des StuRa geschickt.

Die Webmail-Oberfläche befindet sich unter [mail.uni-leipzig.de](https://mail.uni-leipzig.de/portal/imp/login.php?server=studserv). Die Login-Daten sind die üblichen (mai12xyz + Passwort). Dort habt ihr die Möglichkeit, euch einen personalisierten Mail-Alias (z.B. Vorname.Nachname@studserv.uni-leipzig.de) einzurichten. Außerdem kann eine Weiterleitung an eine andere eMail-Adresse konfiguriert werden.

Es ist auch möglich sich einen Alias einzurichten. zB mustermensch@studserv.uni-leipzig.de .

Hinweise zur Nutzung des studserv via POP, IMAP und SMTP gibt es [ebenfalls beim URZ](https://www.urz.uni-leipzig.de/studserv.html).

### Hardwarekauf und Lizenzen

Uns erreichen regelmäßig Anfragen zum Hardwarekauf und zu Lizenzerwerb. Wir können dazu ein paar Ratschläge geben.

#### Gebrauchte Hardware

Gebrauchte Hardware zu kaufen ist nicht nur umweltbewusst, sondern genügt in den meisten Fällen den Ansprüchen fürs Studium bei weitem. Dass bei Privatkäufen ein gewisses Risiko besteht, ist verständlich. Für alle, die auf Nummer sicher gehen wollen, gibt es zahlreiche seriöse Anbieter im Internet, die generalüberholte Geräte inkl. einjähriger Garantie vertreiben.

#### Neue Rechner und Hardware

Solltest Du dennoch einen neuen Rechner oder Hardware für Dein Studium anschaffen, informierst Du dich am besten über Sonderangebote für Studierende. Die meisten Hersteller haben spezielle Campusprogramme und stellen oftmals sogar Sondereditionen und -baureihen her. In jedem Fall lohnt es sich, beim Erwerb auf eine Betriebssystemslizenz und zusätzliche Software ab Werk zu verzichten. Näheres erfährst Du dazu im nächsten Absatz.

#### Betriebssystem und Lizenzen

Wir empfehlen Dir, Dich während des Studiums mit freien Betriebssystemen, zum Beispiel [Linux-Derivaten](https://de.wikipedia.org/wiki/Liste_von_Linux-Distributionen), auseinander zu setzen und diese zu benutzen.

https://azureforeducation.microsoft.com/devtools

Solltest Du dennoch Microsoft-Lizenzen, zum Beispiel Windows 10, benötigen, kannst du diese kostenfrei über [Microsoft Azure](https://azureforeducation.microsoft.com/devtools) erhalten. Dort kannst du dich einfach anmelden und musst nur deine Uni-Mailadresse bestätigen. Wichtig ist, dass eine kommerzielle Nutzung der Software unzulässig ist.

Das Office-Paket erhälst du über [Campus Sachsen](https://campussachsen.tu-dresden.de/). Du musst dich lediglich alle 180 Tage dort einloggen, damit deine Lizenz nicht verfällt.

#### Sonstiges

Empfehlenswert sind Businessmodelle, da diese in der Regel eine bessere Qualität und manchmal auch eine längere Garantie aufweisen.

Anschaffungen fürs Studium sind unter Umständen steuerlich absetzbar.
