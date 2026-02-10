

# SEO Domination Strategy for Jordan — Sector by Sector

## The Problem

Right now, every service page and sub-service page targets broad regions (Jordan, Egypt, UAE, Thailand, etc.) in its meta description and keywords. But none of them specifically target **Jordan-specific search terms** with enough depth to rank for sector queries like:

- "corporate event planner Amman"
- "wedding planner Jordan"  
- "exhibition booth design Amman"
- "conference management Jordan"
- "gala dinner organizer Amman"

Google ranks pages that are **deeply relevant** to a specific query. To dominate Jordan, every service page needs Jordan-specific keywords baked into its invisible SEO layer.

## How This Works (Non-Technical)

When someone in Jordan searches "conference management Amman" or "wedding planner Jordan", Google looks at your page's title, description, and keywords to decide if your page is relevant. Right now, your pages mention Jordan generically alongside 10 other countries — so Google doesn't see you as the **specialist** for Jordan.

The fix: make every service page's hidden SEO data prioritize Jordan and Amman **first**, then list other regions second. This signals to Google that you are the go-to for each sector in Jordan.

Once Jordan is dominated, the same approach expands to Saudi Arabia, UAE, and so on — one region at a time.

## What Changes (All Invisible)

No visible UI changes. Only meta titles, descriptions, and keywords update.

### 1. Corporate Sub-Service Pages (12 pages)

Update `src/data/services.ts` — each corporate service's `metaTitle` and `metaDescription` will lead with "in Jordan" or "in Amman" phrasing, and add a new `metaKeywords` field.

Examples:
- **MICE Event Management**: "MICE Event Management in Jordan | MaraNasi" with keywords like "MICE event planner Amman, MICE Jordan, incentive travel Jordan"
- **Conference Management**: "Conference Management in Jordan | MaraNasi" with "conference organizer Amman, conference planner Jordan"
- **Exhibition Booth Design**: "Exhibition Booth Design Jordan | MaraNasi" with "exhibition booth Amman, booth design Jordan"
- **Gala Dinner**: "Gala Dinner Production in Jordan | MaraNasi" with "gala dinner Amman, banquet planner Jordan"
- And so on for all 12 corporate services

### 2. Wedding Sub-Service Pages (3 pages)

Same approach in `src/data/services.ts` for wedding services:
- "Luxury Wedding Planning in Jordan | MaraNasi"
- "Destination Weddings in Jordan | MaraNasi"  
- "Marriage Proposals in Jordan | MaraNasi"

### 3. Main Category Pages (3 pages)

- `CorporateEventsMain.tsx` — lead with "Corporate Events Jordan | Amman"
- `WeddingsMain.tsx` — lead with "Destination Weddings Jordan"
- `DestinationsMain.tsx` — already Jordan-focused

### 4. Supporting Pages (4 pages)

- `Blog.tsx` — add Jordan-focused keywords
- `FAQs.tsx` — add Jordan-specific keywords
- `Work.tsx` — add SEO component with Jordan portfolio keywords
- `Contact.tsx` — add "contact event planner Jordan Amman" keywords

### 5. Sub-Service Page Layout

- Update `SubServicePageLayout.tsx` and `CorporateServicePage.tsx` to pass the new `metaKeywords` field to the SEO component.

## Technical Details

### Data Model Change

Add `metaKeywords` to the `ServiceData` interface in `src/data/services.ts`:

```text
export interface ServiceData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords?: string;       // <-- new field
  h1: string;
  ...
}
```

### Files Modified

| File | Change |
|------|--------|
| `src/data/services.ts` | Add `metaKeywords` to interface + all 15 services get Jordan-first meta titles, descriptions, and keywords |
| `src/pages/corporate/CorporateServicePage.tsx` | Pass `metaKeywords` to SubServicePageLayout |
| `src/pages/weddings/WeddingServicePage.tsx` | Pass `metaKeywords` to SubServicePageLayout |
| `src/components/services/SubServicePageLayout.tsx` | Accept and pass `keywords` to SEO component |
| `src/pages/corporate/CorporateEventsMain.tsx` | Jordan-first SEO metadata |
| `src/pages/weddings/WeddingsMain.tsx` | Jordan-first SEO metadata |
| `src/pages/destinations/DestinationsMain.tsx` | Jordan-first SEO metadata |
| `src/pages/Blog.tsx` | Add Jordan keywords |
| `src/pages/FAQs.tsx` | Add Jordan keywords |
| `src/pages/Work.tsx` | Add SEO component with Jordan keywords |
| `src/pages/Contact.tsx` | Jordan-first keywords |

### Expansion Strategy

Once Jordan SEO is established (typically 4-8 weeks for indexing), the same `metaKeywords` fields can be expanded to prioritize the next target market (e.g., Saudi Arabia) without changing any architecture.

