# GrünRaum Vor-Ort

Offline-App zum Ausfüllen der GrünRaum-Vorlagen vor Ort (Android, Chrome).

**App öffnen:** https://baum-tech.github.io/gruenraum-app/

Ablauf: Auftraggeber → Objekt → Vorlage wählen → Formular ausfüllen → „Word-/Excel-Datei erzeugen“.
Der Export befüllt die Original-Vorlagen im Ordner `vorlagen/`; Layout, Logo und Kopf-/Fußzeilen bleiben unverändert.

- Beim ersten Start unter ⚙ Name, E-Mail, Telefon und das Bild der Unterschrift eintragen; diese Angaben bleiben nur auf dem Gerät.
- Daten (Auftraggeber, Objekte, Baumliste, Fotos) liegen nur auf dem Gerät (IndexedDB). Sicherung über ⚙ Einstellungen → „Sicherung speichern“.
- Offline-Betrieb über `sw.js`. Nach Änderungen an Dateien `VERSION` in `sw.js` erhöhen.
- Neue Vorlage ersetzen: Datei in `vorlagen/` mit gleichem Namen austauschen.
