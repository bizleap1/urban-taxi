**TASK: Precisely refine the Hero Section's Vehicle Pricing + CTA layout.**

I want one specific UI improvement to the existing Urban Taxi website. Study both attached screenshots carefully.

- Screenshot 1 = Current website. This is the existing implementation that must be preserved.
- Screenshot 2 = Desired pricing and CTA arrangement. Use it as the visual reference for this particular component.

### 1. Exact change required

Currently, the Hero section has:
- Two pricing cards side by side.
- Two separate booking CTA buttons positioned underneath the pricing cards.

**Change this into two complete, self-contained vertical pricing cards.**

**Left card — FORCE URBANIA**
1. Vehicle heading: FORCE URBANIA
2. Local pricing: ₹8,400 (8h / 80km)
3. Outstation pricing: ₹9,713/day
4. BOOK URBANIA → button at the bottom, inside the same card.

**Right card — INNOVA CRYSTA**
1. Vehicle heading: INNOVA CRYSTA
2. Local pricing: ₹2,414 (4h / 40km)
3. Outstation pricing: ₹6,405/day
4. BOOK CRYSTA → button at the bottom, inside the same card.

### 2. Visual implementation

Follow the second screenshot's layout:

- Keep both cards side by side on desktop.
- Each card must contain its own heading, both pricing details and its respective CTA.
- Maintain equal card widths and consistent heights.
- Place the CTA below the pricing details, with comfortable spacing.
- Use the existing dark, premium, glass-like appearance.
- Maintain the existing gold/black colour palette.
- Give the cards a subtle premium highlight using a refined gold border, restrained shadow or very subtle glow.
- Make the CTA slightly more visually prominent while retaining the existing gold button styling.
- Improve internal spacing, alignment and visual hierarchy slightly.

The result should feel approximately 1% more polished and premium, not like a redesigned website.

### 3. STRICT SCOPE — DO NOT TOUCH ANYTHING ELSE

This is the most important requirement.

**Only modify the Hero section's two vehicle pricing cards and their associated booking CTA buttons.**

Do NOT modify, redesign, remove, reposition or change:

- Website navigation or logo.
- Hero background image, vehicle image or background positioning.
- Main heading "Travel Together."
- Hero subtitle.
- Statistics (rating, successful trips, support and sanitized vehicles).
- Contact numbers or phone icons.
- Floating booking, call or WhatsApp buttons.
- Watch Experience button.
- Any other section of the website.
- Existing booking functionality, routes, links or click handlers.
- Existing text, prices or vehicle information.

Do not introduce new sections, animations, dependencies or unnecessary components.

### 4. Implementation constraints

Before editing, inspect the existing project structure and identify the exact component and styles responsible for the vehicle pricing cards and their CTA buttons.

Make the smallest possible targeted changes.

- Reuse existing components and styling conventions wherever possible.
- Do not make broad CSS changes.
- Do not modify global styles, shared components or unrelated files.
- Avoid changing existing layout dimensions outside the pricing component.
- Preserve all existing functionality.
- Ensure both cards remain responsive on smaller screens, stacking cleanly when necessary.
- Avoid overflow, unwanted spacing or overlap with nearby hero content.

### 5. Final verification

After implementation:

1. Compare the result with both screenshots.
2. Confirm that each vehicle's pricing and booking CTA are now contained within one unified card.
3. Confirm that both cards are properly aligned.
4. Verify that both booking buttons still work exactly as before.
5. Check that the rest of the Hero section and website remain visually and functionally unchanged.

**FINAL INSTRUCTION: Do not interpret this as a general website improvement task. Do not refactor or optimize unrelated code. This is one isolated UI enhancement: combine each vehicle's existing pricing panel and its corresponding CTA into one vertically structured, subtly highlighted card. Preserve everything else exactly as it is.**