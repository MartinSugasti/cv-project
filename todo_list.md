Code:
- Components refactors: several components do the same. Add items, remove items and render.

Users features:
- Users: employees and recruiters.
- Sign in with google, facebook, linkedin or new account.
- Search CV by email and optional key.
- Search CVs by name or skills.
- Advanced search combining location, company and skills.
- What employees can do:
  - Create CV.
  - Download CV as pdf.
  - Make CV public or private.
  - If CV private, add a key in order to find it.
- What recruiters can do:
  - Download CVs as pdf.
  - Make CVs as favorites.
  - Create CVs lists for different positions (payment).

Technical features:
- CV improvements:
  - Limit inputs length to not break layout.
  - Allow list in jobs descriptions.
  - Make sections editable.
  - Fix References section (always add reference to Personal References)
  - Languages section.
- Create employees and recruiters users with devise.
- Internationalization.
- Emails for employees when their CV reachs 10 views.
- Payments with stripe.
- Implement some feature with scheduler jobs.
- Try to use cancan.
