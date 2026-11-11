# 🦗🐸🐰🐧 Atlayan Dostlar / Прыгающие друзья / Jumping Friends

4–6 yaşlı uşaqlar üçün brauzerdə oynanan şən macəra oyunu. Yükləmək lazım deyil: telefonda, planşetdə, kompüterdə və TV-də işləyir.

▶️ **Oyna:** https://nilkin.github.io/jumping-friends/

## Oyun haqqında
- **9 mərhələ:** Yaz, Yay, Payız, Qış, Ay, Mars, Yupiter, Saturn və son mərhələ Günəş
- Hər mərhələdə yeni qəhrəman və gecə-gündüz dövrü
- Hər mərhələnin sonunda **final boss**, qələbədən sonra hədiyyə və salyut
- Son döyüş: Günəşdə üç hissəli **Alov Əjdahası** döyüşü
- 3 can sistemi: maneəyə iki dəfə yandan dəymək 1 can aparır, canlar bitəndə əvvəlki mərhələyə qayıdılır
- Maneənin üstünə yuxarıdan düşmək təhlükəsizdir
- **Dillər:** Azərbaycan, Русский, English
- **Sürət:** Yavaş / Orta / Sürətli

## İdarəetmə
| Cihaz | Atlamaq |
|---|---|
| Telefon / planşet | Ekrana toxun |
| Kompüter | Boşluq, ↑ və ya W |
| TV pultu | OK (Enter) |

Menyuda ← → sürəti, ↓ dili dəyişir.

## İşə salmaq
**Onlayn:** oyun GitHub Pages-də yayımlanır: https://nilkin.github.io/jumping-friends/

**Lokal:** heç bir quraşdırma tələb olunmur, `index.html` faylını brauzerdə açın.

### Kodu dəyişmək
Oyunun mənbə kodu `src/index.html`-dədir. Kökdəki `index.html` ondan avtomatik yaradılır, onu birbaşa redaktə etməyin. Dəyişiklikdən sonra:

```bash
npm install      # yalnız ilk dəfə
npm run build    # src/index.html → index.html
```

Build skripti (`build.js`) oyun kodunu Babel ilə ES5-ə çevirir ki, köhnə brauzerlərdə, məsələn köhnə LG webOS televizorlarında da işləsin. Sonra çıxışın həqiqətən ES5 olduğunu yoxlayır. Hər iki `index.html` faylını birlikdə commit edin.

### GitHub Pages
Sayt `main` branch-ının kök qovluğundan (`/ (root)`) avtomatik yayımlanır (**Settings → Pages**). `main`-ə edilən hər push bir neçə dəqiqə ərzində sayta düşür.

## Texniki məlumat
Oyun tək bir `index.html` faylıdır: HTML5 Canvas və saf JavaScript ilə yazılıb, işləmək üçün heç bir kitabxana və ya xarici fayl lazım deyil (Babel yalnız build zamanı istifadə olunur). Köhnə brauzerlər üçün `ctx.ellipse`, pointer event-lər, `e.key`, köhnə Web Audio API və s. üçün ehtiyat variantlar var. Bütün qrafika kodla çəkilir, səslər Web Audio API ilə yaradılır.

`jumping-friends_reels.mp4` oyunun Instagram Reels üçün 31 saniyəlik reklam videosudur.
