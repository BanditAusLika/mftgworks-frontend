# MFTG IT Solutions

Production website for MFTG IT Solutions, a mobile IT support and web services business operating across Melbourne, Victoria.

The site includes dedicated search landing pages for business IT support, computer repairs, installations and upgrades, software support, networking, custom PC builds and Melbourne service areas. The production build generates static route shells with unique metadata and structured data for each page.

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

Netlify builds the project with `npm run build` and publishes the `dist` directory. The enquiry form is processed by Netlify Forms.

`public/sitemap.xml` lists all public routes and `public/robots.txt` advertises the sitemap to search engines. After a production release, submit `https://mftgworks.org/sitemap.xml` through the verified Google Search Console property.

## Contact

- Phone: 0402 940 099
- Business email: info-contact@mftgworks.org
- Website: https://mftgworks.org
