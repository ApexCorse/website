# Guide: Adding, editing and removing sponsors

This guide will explain how to work with all the parts of the website related to sponsors. There are mainly two places in the website where we show our sponsors: the _Home Page_ and the _Sponsors Page_.

However, the components which actually show all the sponsors are:

- [`SponsorBanner`](../src/components/home/SponsorBanner.astro), a banner placed inside the _Home Page_ which simulates an infinite horizontal scroll, showing the sponsors slowly sliding to the left.
- [`SponsorsList`](../src/components/sponsors/SponsorsList.astro), a more traditional way of displaying all our partners, ranked by relevance.

<!--TODO: Fix the incongruence in the naming of the two components -->

Make sure you target both these components when making changes to the sponsors.

## Adding sponsors

Before continuing, make sure you have:

- SVG (recommended), PNG, WEBP, etc., of the sponsor's logo.
- URL of the sponsor's website.

Both for the `SponsorBanner` and the `SponsorsList`:

1. Import the SVG (or whatever other image format) at the top.
2. Place it where you find the other sponsors. Make sure you follow the structure:
```javascript
{
    Component: <name_used_in_import>,
    href: <url>
}
```

> [!WARNING]
> Inside `SponsorBanner`, we have two instances of each sponsor, to allow for a more natural behaviour. Make sure you address both instances of each sponsor during any operation.

> [!CAUTION]
> The order of sponsors inside `SponsorBanner` is shifted because of the component behaviour. See how it behaves in the site for clarification.

> [!CAUTION]
> In case you are NOT using an SVG for the sponsor's logo, see how Pitarresi is implemented for reference.

## Editing sponsors

By editing we mean:

- Changing the logo filename/location.
- Changing the sponsor's website URL.
- Switching the positions based on changes in rank.

Then you must make sure, in both the components, that:

- There are not syntax errors.
- The imports are correct.
- The naming is consistent.

## Removing sponsors

When removing sponsors, you just have to:

- Delete the import
- Delete ALL occurrencies of the sponsor in both `SponsorBanner` and `SponsorsList`.
