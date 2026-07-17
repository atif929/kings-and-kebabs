# Kings Kebab & Mexican — Website

Production React website. Built in 10 phases; all phases complete.

## Tech Stack
React 19 + Vite · React Router v6 · React Icons · plain CSS with design tokens
+ CSS Modules per component. No UI framework (no Bootstrap/MUI/Chakra/Tailwind).

## Run It
```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # serve the production build locally
npm run lint      # oxlint — currently 0 warnings, 0 errors
```

## Project Structure
```
src/
  pages/            One folder per route, each with its own components/ subfolder
                     for page-specific sections (Home, About, Menu, Gallery, Contact,
                     Privacy, Terms, NotFound)
  components/
    layout/          Navbar, Footer, PageLayout (wraps every route via <Outlet/>)
    ui/               Reusable primitives: Button, Container, Section, Logo, FormField
    shared/           Cross-page composites: PageHeader, CtaBanner, FeatureGrid,
                       LegalContent, PageLoader, ErrorBoundary
  data/
    menuData.js        Full official menu — single source of truth
    galleryData.js      Gallery items (placeholder photography — see below)
    testimonialsData.js  Empty by design — see below
  constants/
    routes.js           Route paths + nav link list
    business.js          Phone/email/address/hours — the one file that drives
                          Footer, Navbar, Contact, Home's trust strip/location
                          section, and SEO structured data
  hooks/               useScrolled, useLockBodyScroll, useActiveSection, useInView,
                       useDocumentMeta, useRestaurantSchema
  styles/
    variables.css        Design tokens: color, type, spacing, breakpoints, motion
    global.css            Reset + base styles
```

## Design System
Black/gold luxury palette, `Cormorant Garamond` (display) + `Manrope` (body),
4px spacing scale, mobile-first breakpoints at 480/768/1024/1280px — all as
CSS custom properties in `src/styles/variables.css`. Full details were covered
phase-by-phase in the build conversation.

## Performance
- Every route is code-split with `React.lazy` — initial JS is ~244KB (77KB
  gzip), each page loads its own small chunk on demand
- Scroll-reveal animations use `IntersectionObserver`, not scroll listeners
- Fonts load with `font-display: swap` via preconnected Google Fonts

## SEO
- Per-page `<title>`/meta description (`useDocumentMeta` hook)
- `robots.txt` + `sitemap.xml` in `public/` — **update the placeholder domain
  in both files once this is deployed to its real URL**
- Open Graph + Twitter Card tags in `index.html` (no `og:image` yet — add one
  once brand imagery exists)
- Restaurant JSON-LD structured data, injected site-wide, address included
  automatically now that one is set

## Accessibility
Skip-to-content link, visible focus states, `aria-current` on active nav
links, accessible form fields with error announcements, lightbox with
keyboard support (Escape/arrows) and focus management, semantic HTML
throughout, reduced-motion support on all animations.

## Deployment
Client-side routing means the host needs a rewrite rule so refreshing on
`/menu` (etc.) doesn't 404. Both are already set up:
- **Vercel**: `vercel.json` at the project root — just deploy, no config needed
- **Netlify**: `public/_redirects` — copied into `dist/` automatically on build

For either: connect the repo, build command `npm run build`, publish directory `dist`.

## Outstanding — Needs Your Input Before Launch
| Item | Status |
|---|---|
| Street address | ✅ Set: Shop 216/211 Lake Entrance Rd, Shellharbour City Centre NSW 2529 |
| Business hours | ⏳ Placeholder — confirm real trading hours in `constants/business.js` |
| Contact email | ⏳ Placeholder (`info@kingskebabmexican.com.au`) — confirm real inbox |
| Social links | ⏳ Empty — add Instagram/Facebook URLs to `constants/business.js` to make them appear in the Footer |
| Food/interior photography | ⏳ None yet — Hero, Gallery, and About use styled placeholders. Send real photos and they drop in without a layout rewrite |
| Customer testimonials | ⏳ Intentionally empty (`src/data/testimonialsData.js`) rather than fabricated — add real reviews to activate that homepage section |
| Privacy Policy / Terms & Conditions | ⏳ Solid template, **not legal advice** — have a lawyer review before going live (a visible notice on both pages says so until then) |
| Production domain | ⏳ Update the placeholder domain in `robots.txt` and `sitemap.xml` once deployed |
| Contact form backend | ⏳ Currently opens the user's email client via `mailto:` (functional, but not ideal UX) — swap for a real backend/email API whenever one exists; validation/UI needs no changes |

## Future Scalability
Architecture keeps the door open for a backend, database, auth, online
ordering, and payments without a frontend rewrite: `data/` files are shaped
to be swapped for API calls, `services/`/`context/` folders are reserved and
empty, and `ContactForm`'s submit handler is the one place a real API call
would plug in.
