

# Fix: Remove Old Lovable Favicon

## The Problem

The browser is finding and using the old `public/favicon.ico` (Lovable's default icon) because many browsers automatically check for `/favicon.ico` regardless of what the HTML `<link>` tag says.

## The Fix (1 step)

Replace `public/favicon.ico` with your Maranasi logo. This way, even browsers that ignore the `<link>` tag and look for `/favicon.ico` directly will find your logo instead of Lovable's.

### File Changes

| File | Change |
|------|--------|
| `public/favicon.ico` | Replace with the Maranasi logo image |

No other changes needed — `index.html` is already correctly configured.

After this change, do a hard refresh (Ctrl+Shift+R / Cmd+Shift+R) or open in incognito to see the update.

