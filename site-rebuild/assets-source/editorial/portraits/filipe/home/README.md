# Home portrait provenance

Status: approved-canonical  
Source: user-approved cinematic portrait from 2026-08-26  
Canonical file: `hero-approved-master.webp`  
Canonical dimensions: 1152 × 648 (16:9)  
SHA-256: `12266b14dce58b50c1606c0d4d8a22944f691c8ca538e29566a0d41b654d3713`  
Allowed: downscale, format conversion, compression, responsive crop  
Forbidden: face regeneration, pose change, expression change, scenario replacement, non-uniform scaling, desktop derivatives wider than the canonical source  
Desktop focal point: 64% 48%  
Mobile focal point: 68% 46%

The canonical source is stored as a real binary WebP file. Desktop derivatives are capped at the source width (1152 px) and rendered inside a source-sized editorial panel on large screens instead of being synthetically enlarged to QHD/4K widths. Mobile keeps its dedicated 4:5 crop. Responsive derivatives are generated deterministically by `scripts/generate-home-hero.mjs`; the canonical source itself is never shipped directly to the browser.
