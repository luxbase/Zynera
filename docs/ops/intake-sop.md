# Intake SOP — Manual Runbook

## Requested from the client

### Mode A — Handoff
- Link to **Google Drive / WeTransfer / WhatsApp** with the listing photos (any format).
  - If photos are already on a portal, send the portal URL instead — we'll grab them.
- Portal listing URL (optional — we use it to copy the existing description and verify orientation).

### Mode B — Done-for-you
- **Portal name + listing URL**.
- **Login credentials** (email + password) for the portal.
  - _Note: see `credential-policy.md` for how credentials are handled._

## ZIP output naming convention

```
<YYYY-MM-DD>_<property-address-or-id>_<mode>.zip

Example:
2026-06-14_casa-saltos-1234_handoff.zip
2026-06-14_apto-pineda-567_dfy.zip
```

**Contents of ZIP:**

| File | Required |
|------|----------|
| `fotos/` — all enhanced photos, numbered by room | Yes |
| `descripcion.txt` — rewritten listing description | Yes |
| `originales/` — untouched originals (for reference) | Nice-to-have |

## QA checklist (before delivery)

- [ ] All photos color-corrected and sharpened.
- [ ] No floating furniture, cut-off objects, or distorted perspective.
- [ ] Description rewritten in Spanish, no placeholder text.
- [ ] ZIP follows naming convention above.
- [ ] WhatsApp message sent confirming delivery + request for client review.
