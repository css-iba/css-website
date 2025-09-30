# File Structure

```
css/
├── app/
│   ├── Codex/
│   │   └── page.tsx
│   ├── Forms/
        ├── constants.ts
│   │   └── page.tsx
│   ├── ProBattle/
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Codex/
│   ├── Forms/
│   ├── Home/
│   ├── Lottie
│   │   └── DisplayLottie.tsx
│   ├── ProBattle/
│   ├── Footer.tsx
│   ├── NavBar.tsx
│   └── ui/
│       └── card.tsx
├── lib/
│   └── utils.ts
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── types/
│   └── react-lottie.d.ts
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Understanding The File Structure
Inside the app folder each page has its own folder such as "Codex". Inside that folder will be a page.tsx file which combines all the components of that page.
Apart from that there can be other files with the extension .ts which will be used to store the constants only.

In the components folder you will again see the same name folders of each page. This time these will contain the components themselves.
"ui" folder should not be changed since it will contain the code for the ShadCN ui itself.

"public" folder will contain folders again for each page which will then contain the assets used on that page.

## The Tailwind Classes
Use these classes for example `className="font-text colour-text"`

### Custom Font Classes

| Class         | Font Name      | Description                                 |
|---------------|----------------|---------------------------------------------|
| .font-title   | Title Font     | Used for main titles and headings.          |
| .font-heading | Heading Font   | Used for main and section headings.         |
| .font-text    | Text Font      | Used for body and paragraph text.           |

### Custom Colour Classes

| Class                | Variable Name          | Description                                 |
|----------------------|------------------------|---------------------------------------------|
| .colour-text         | --colour-text          | Main text color.                            |
| .colour-bg           | --colour-bg            | Main background color.                      |
| .colour-primary      | --colour-primary       | Primary text color (e.g., links, highlights)|
| .colour-box-primary  | --colour-box-primary   | Primary background for boxes/cards.         |
| .colour-secondary    | --colour-secondary     | Secondary text color.                       |
| .colour-box-secondary| --colour-box-secondary | Secondary background for boxes/cards.       |
| .colour-accent       | --colour-accent        | Accent color for emphasis.                  |

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
