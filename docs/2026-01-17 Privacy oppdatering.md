Ferdige tekstsnutter du kan lime inn
Lim inn disse seksjonene i privacy.html der det passer.

Analyse og krasjrapportering
html

<h3>Analyse og krasjrapportering</h3>
<p>Vi bruker tredjepartsleverandører for å forbedre appen og finne feil. For å redusere personvernrisiko bruker vi en lokalt generert, ikke‑gjenkjennbar <strong>analytics‑ID</strong> i stedet for Firebase UID eller e‑post. Vi sender ikke e‑post, telefon eller andre direkte identifikatorer til tredjepart for analyse.</p>
<ul>
  <li><strong>Firebase / Google</strong> – Crashlytics, Analytics, Firestore, Auth. Mottar krasjstacktraces, anonymiserte events og appdata lagret i Firestore.</li>
  <li><strong>Amplitude</strong> – produktanalyse; mottar pseudonymiserte events knyttet til analytics‑ID.</li>
  <li><strong>Mapbox</strong> – kartforespørsler og posisjonsdata ved bruk av kartfunksjoner.</li>
  <li><strong>RevenueCat</strong> – kjøpskvitteringer og abonnementsstatus for håndtering av kjøp.</li>
  <li><strong>Google Mobile Ads</strong> – annonsevisning og målrettingssignaler (hvis annonser aktivert).</li>
</ul>
Hvilke identifikatorer vi bruker
html
<h3>Identifikatorer</h3>
<p>Vi bruker en intern, ikke‑gjenkjennbar <strong>analytics‑ID</strong> (UUID) som lagres lokalt. Denne IDen brukes kun for å koble hendelser på tvers av enheter og for krasjdiagnostikk. Vi kan internt mappe analytics‑ID til din konto kun for supportformål; denne mappingen er sikret og deles ikke med tredjepart uten rettslig grunnlag.</p>
Opt‑out og innstillinger
html
<h3>Deaktivere analyse</h3>
<p>Du kan deaktivere analyse og krasjrapportering i appen: <em>Innstillinger → Personvern → Deaktiver bruksdata</em>. Når du deaktiverer dette, stopper vi sending av analytics‑events og fjerner analytics‑ID fra fremtidige hendelser.</p>
Sletting og innsyn
html
<h3>Sletting og innsyn</h3>
<p>Du kan be om innsyn eller sletting av dine data ved å kontakte oss på <a href="mailto:privacy@ravndalstudio.com">privacy@ravndalstudio.com</a>. Oppgi enten din konto‑e‑post eller analytics‑ID (finnes i appens Personvern‑side). Vi svarer normalt innen 30 dager og vil slette eller anonymisere data i samsvar med gjeldende lov.</p>
Lagringstider
html
<h3>Lagringstider</h3>
<ul>
  <li><strong>Analytics‑hendelser:</strong> opptil 2 måneder før automatisk sletting.</li>
  <li><strong>Crashrapporter:</strong> opptil 90 dager før automatisk sletting.</li>
  <li><strong>Firestore backups:</strong> opptil 30 dager før automatiske sletting.</li>
</ul>
Databehandleravtaler og overføringer
html
<h3>Databehandleravtaler</h3>
<p>Vi har inngått databehandleravtaler (DPA) med våre leverandører (Google/Firebase, Amplitude, RevenueCat). Data kan overføres utenfor EØS; slike overføringer skjer kun med passende sikkerhetstiltak (SCC eller tilsvarende). Kontakt privacy@ravndalstudio.com for mer informasjon eller kopi av DPA.</p>
Tekniske tiltak og drift du bør dokumentere kort
Sanitizing: vi fjerner sensitive strenger fra feilmeldinger før de sendes til analytics/crashlytics.

Opt‑out‑sjekk: alle analytics/crach‑calls sjekker analytics_enabled før sending.

Fallback for secure storage: hvis flutter_secure_storage ikke er tilgjengelig, faller vi tilbake til SharedPreferences; dokumenter konsekvens (backup/restore).

Retry/backoff: Firestore‑kall bruker retry med eksponentiell backoff for transient feil.

Retention og slette‑API: dokumenter at du kan slette analytics‑data ved å oppgi analytics‑ID eller konto‑e‑post.

Kort endringslogg du kan vise i personvernsiden
html

<h3>Endringslogg</h3>
<ul>
  <li>2026‑01‑17: Byttet til ikke‑gjenkjennbar analytics‑ID; fjernet PII fra analytics events; lagt til opt‑out.</li>
  <li>2026‑01‑10: Innført sanitizing av error strings før logging til tredjepart.</li>
  <li>2025‑12‑01: Implementert delta‑sync for metadata og forbedret retry for Firestore.</li>
</ul>
