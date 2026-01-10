
# Django + Vite Frontend

## Development
cd frontend
npm run dev

## Build for Production
cd frontend
npm run build

## Django settings.py Configuration
STATICFILES_DIRS = [BASE_DIR / "frontend/dist"]
TEMPLATES DIR should point to index.html
Use Whitenoise for static file serving

## urls.py Configuration
re_path(r'^.*$', TemplateView.as_view(template_name='index.html'))

## Notes
- Tailwind CSS v4+ is configured with @tailwindcss/postcss plugin
- PostCSS configuration uses CommonJS format for compatibility
- All builds are optimized for production with minified CSS
