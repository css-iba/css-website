.PHONY: dev build format clean

dev:
	bun run dev

build:
	bun run build

format:
	bunx prettier --write .

clean:
	rm -rf dist .astro node_modules