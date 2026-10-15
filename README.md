# ULTIMATE PLANNER by Ro — Android APK Builder

This package uses the latest calendar-layout update as the web app and wraps it with Capacitor for Android.

## Important status

- This ZIP is the **APK build project**, not an already-built APK.
- The APK workflow builds a **debug APK** for personal testing, not a Play Store release.
- It uses the existing Supabase client-side sync settings from the included app. Sign in with the same Supabase account on the APK to access cloud-synced planner data.
- Google Drive/Gmail OAuth and browser-specific integrations may need separate testing inside Android WebView. Do not assume every browser integration works natively until tested.
- In-app reminders are not guaranteed background Android notifications; native notification scheduling is a separate improvement.

## Build the APK using GitHub Actions (no Android Studio needed)

1. On GitHub, create a **private** repository named `ultimate-planner-by-ro` (or another name you prefer): https://github.com/new
2. Upload **all the files inside this ZIP** to the repository root. Upload the contents, not the ZIP itself. Make sure `.github/workflows/android-apk.yml` is included; hidden folders can be easy to miss.
3. Open the repository's **Actions** tab and choose **Build Android APK**. If GitHub asks you to enable Actions, enable them.
4. Open the workflow and press **Run workflow**. If that button isn't available yet, commit/push the files to the `main` branch to trigger it.
5. Wait for the run to finish successfully. Open the completed run and download the artifact named `ultimate-planner-by-ro-debug-apk`.
6. Extract the downloaded artifact ZIP on your Android phone and tap `app-debug.apk` to install it. Android may ask you to allow installs from the app you used to download the APK. Only install an APK from your own repository/build.

## Local build (computer with Android tooling)

Install Node.js 22, Java 21, and Android Studio/SDK, then run:

```bash
npm install
npm run build
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

The resulting APK is `android/app/build/outputs/apk/debug/app-debug.apk`.

## Security

Only use a Supabase public/anon/publishable key in client-side code. Never add a Supabase service-role key or Google OAuth client secret to this project. Keep Supabase Row Level Security policies enabled and correctly scoped to the signed-in user.
