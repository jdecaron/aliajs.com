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
            fr: {
                label: 'Français',
            },
        },
        customCss: [
            './src/styles/custom.css',
        ],
        pagefind: false,
			  social: [
          { icon: 'email', label: 'Email', href: 'mailto:j@aliajs.com' },
          { icon: 'github', label: 'Github', href: 'https://github.com/jdecaron/aliajs' },
          { icon: 'mastodon', label: 'Mastodon', href: 'https://floss.social/@aliajs' },
			],
		}),
	],
});
