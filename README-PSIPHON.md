# Psiphon Changes

This is a summary of the Psiphon specific content changes.

## Change default theme from dark to light

- Remove conf/custom.ini from the .gitignore because we need the custom config to be used for changing the default theme from dark to light.
- Add a conf/custom.ini which sets the default theme to light.
- Remove theme change radio buttons from user preferences form.
- Remove theme change option from nav menu.

## Add custom Psiphon content, and set color to match light theme, for email templates

- Set the background color of all email template mjml files to a light theme color.
- Remove "Grafana" specific content from email mjml and txt template files.
- Add Psiphon/PDE specific content to email mjml and txt template files.
- Replace Grafana logo with Psiphon logo in email header.
- Generate corresponding new emails.

## Add Psiphon colors and branding to website

- Add Psiphon theme colors to a custom color file.
- Import custom Psiphon orange colors into color palette files.
- Add Psiphon orange colors as "primary" colors for theme color file.
- Replace Grafana orange with Psiphon orange where it is used as an accent color throughout website.
- Replace Grafana gradients with Psiphon orange where used as accent colors.
- Change Favicon, appletouchicon, to Psiphon logos.
- Change app name to Psiphon.
- Add PDE logo as main website header logo, update sizing so it fits properly on page.
- Change content that refers to the application as "Grafana" to "Psiphon" or "PDE".
- Add generated scss file.

## Add Psiphon branding to login page

- Use Psiphon logo on login page instead of Grafana logo .
- Use custom background image on login page.
- Remove Grafana welcome message on login page.
- Change App Title on login page to 'Psiphon Data Engine' instead of Grafana.
- Remove footer links from login page.
- Remove overlay box that doesn't work with light background to look better with our custom content.

## Change website functionality for our requirements

- Remove time range options that we don't want available.
- Limit access to "Dashboards" option in menu to admins and editors only.
- Remove "Help" links in nav for all users.
- Remove "news/blog/rss" button in nav for all users.
- Update home.json file to our custom home.json file.
