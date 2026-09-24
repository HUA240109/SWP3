# Hausuebung – Fahrzeug (22.09.2026)

Loesung zur HUE 2 aus der UE `2026-09-22_kapselung`.

- `new Fahrzeug(..., kmStand)` wirft bei negativem Startwert eine Exception.
- `setGeschwindigkeit(v)` erlaubt nur Werte zwischen `0` und `maxGeschwindigkeit`.
- `kmStand` wird nur durch `fahre()` erhoeht; von aussen ist es nur lesbar.
- `fahre(stunden)` erhoeht den KM-Stand um `geschwindigkeit * stunden`.

Testen mit:

```sh
deno test
```
