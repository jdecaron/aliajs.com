import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			  title: 'AliaJS',
        logo: {
            src: './public/aliajs-logo.svg',
        },
        defaultLocale: 'root',
        locales: {
            root: {
                label: 'English',
                lang: 'en',
            },
        },
        customCss: [
            './src/styles/custom.css',
        ],
        components: {
            ThemeSelect: './src/components/ThemeSelect.astro',
            ThemeProvider: './src/components/ForceDarkTheme.astro',
        },
        expressiveCode: {
          themes: ['starlight-light'],
        },
        // pagefind: false,
			  social: [
          { icon: 'email', label: 'Email', href: 'mailto:j@aliajs.com' },
          { icon: 'github', label: 'Github', href: 'https://github.com/jdecaron/aliajs' },
          { icon: 'linkedin', label: 'Mastodon', href: 'https://www.linkedin.com/company/aliajs' },
        ],
		}),
	],
});
