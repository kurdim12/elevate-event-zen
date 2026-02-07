
# Landing Page Visual Enhancement Plan

## Overview
Integrate 9 uploaded photos across the landing page to create a stunning, visually compelling experience that showcases Maranasi's diverse event portfolio - from luxury weddings to corporate conferences to aviation events.

---

## Photo Assignments

| Photo | Section | Purpose |
|-------|---------|---------|
| Citadel Red Lighting | Hero Section | Main hero background |
| Team Photo | About Section | Human element, trust |
| Henna Night Stage | Signature Moment | Emotional centerpiece |
| TEDx Amman | Latest Events Gallery | Corporate/conference |
| Luxury Car Event | Latest Events Gallery | Brand activation |
| INGOT Booth | Latest Events Gallery | Retail activation |
| Pharmaceuticals Booth | Latest Events Gallery | Exhibition design |
| Fighter Jet | Latest Events Gallery | Aviation event |
| Small Aircraft | Latest Events Gallery | Aviation/drone event |

---

## Implementation Steps

### Step 1: Copy Images to Project

Copy all 9 uploaded images from user-uploads to `src/assets/` folder with descriptive names:

```text
src/assets/
  hero-citadel.png         (Citadel red lighting)
  team-photo.jpg           (Team at event)
  henna-night-stage.jpg    (Wedding stage setup)
  events/
    tedx-amman.jpg         (TEDx entrance)
    luxury-car-event.jpg   (Corvette at amphitheater)
    ingot-booth.jpg        (INGOT brand activation)
    exhibition-booth.jpg   (Pharmaceuticals booth)
    aviation-fighter.jpg   (Fighter jet)
    aviation-drone.jpg     (Small aircraft)
```

### Step 2: Update Hero Section

**File:** `src/components/home/HeroSection.tsx`

- Replace import from `hero-main.jpg` to `hero-citadel.png`
- Update alt text to "Luxury gala at Amman Citadel"
- The dramatic red lighting will create an unforgettable first impression

### Step 3: Add Team Photo to About Section

**File:** `src/components/home/AboutSection.tsx`

Current layout is text-only. Enhance with:
- Add team photo on the right side (desktop)
- Subtle hover effect with scale transform
- Caption: "The Maranasi Team"
- Maintains the clean editorial feel while adding human warmth

### Step 4: Update Signature Moment Section

**File:** `src/components/home/SignatureMomentSection.tsx`

- Replace current `wedding-event.jpg` with the beautiful henna night stage photo
- The arched backdrop with orange curtains and candlelit ambiance perfectly captures "the details are the design"

### Step 5: Enhance Latest Events Gallery

**File:** `src/components/home/LatestEventsSection.tsx`

Replace/add events with new photos:

```text
1. TEDx Amman Conference (tedx-amman.jpg)
   Category: Conference | Location: Amman, Jordan

2. Luxury Car Exhibition (luxury-car-event.jpg)
   Category: Brand Activation | Location: Roman Amphitheater

3. INGOT Brand Experience (ingot-booth.jpg)
   Category: Activation | Location: Amman, Jordan

4. Exhibition Booth Design (exhibition-booth.jpg)
   Category: Exhibition | Location: Trade Show

5. Aviation Event (aviation-fighter.jpg)
   Category: Special Event | Location: Jordan

6. Drone Showcase (aviation-drone.jpg)
   Category: Aviation | Location: Jordan

+ Keep 2-3 existing wedding/gala photos for variety
```

---

## Visual Hierarchy After Changes

```text
HERO (Citadel Red Lighting)
    |
    v
ABOUT (Team Photo + Company Story)
    |
    v
RHYTHM BREAK
    |
    v
SERVICE SELECTOR
    |
    v
SERVICES LIST
    |
    v
SIGNATURE MOMENT (Henna Night Stage)
    |
    v
BELIEFS
    |
    v
DESTINATIONS
    |
    v
LATEST EVENTS GALLERY (All new photos)
    |
    v
CTA
```

---

## Technical Details

### Files to Modify
1. `src/components/home/HeroSection.tsx` - New hero image import
2. `src/components/home/AboutSection.tsx` - Add team photo with layout enhancement
3. `src/components/home/SignatureMomentSection.tsx` - New background image
4. `src/components/home/LatestEventsSection.tsx` - New event photos and metadata

### Image Optimization
- All images will be imported as ES6 modules for proper bundling
- Aspect ratios preserved with `object-cover`
- Lazy loading maintained for gallery items

### Styling Consistency
- Maintain existing Ken Burns effect on hero
- Keep current gradient overlays
- Preserve hover animations on gallery items
- Editorial caption styling unchanged

---

## Expected Result

A landing page that:
- Opens with a dramatic, unforgettable hero image (Citadel)
- Shows the team behind the brand (About section)
- Creates emotional impact (Henna night signature moment)
- Showcases portfolio diversity (corporate, weddings, aviation, activations)
- Demonstrates range from intimate ceremonies to large-scale conferences
