# Contributing

To add, remove, or change any _project_ on the list, please submit a Pull Request.

To add, remove, or change a _category_, please create an Issue or open a standalone
Pull Request.

## Contribution Guidelines

- Items should be sorted alphabetically within categories.
- Each item should have a link.
- The link should be on the name of the project.
- If a project has separate links for different platforms, include links on the
  platform name. For example, `[Android](link)`.
- Descriptions should be clear, concise, and non-promotional.
- Projects that contain data only (e.g., json, yaml, xml, txt) should have a
  `platform` type of "data".
- Projects that contain scripts only should have a `platform` type of "script".
- API/service projects should have a `platform` type of "API".

## Project Requirements

**Christian Projects** is for projects that are useful to developers.

- All projects should be directly related to the Christian faith. This could be
  expanded to include, for example, the writings of Josephus, but would not include
  a todo app.
- Code projects should be open source, but there are no license restrictions.
- API and related projects should be non-commercial or at least have
  non-commercial components. For example, an API that provides a
  free tier of up to 100 requests per day would be allowed.

## Markdown Linting Guidelines

To ensure consistency in our markdown files, we use
[markdownlint](https://github.com/DavidAnson/markdownlint).
This helps us maintain a clean and readable format across all our documentation.

### Using markdownlint

1. Install markdownlint-cli2 globally using npm:

   ```sh
   npm install -g markdownlint-cli2
   ```

2. Run markdownlint on your markdown files:

   ```sh
   markdownlint-cli2 "**/*.md"
   ```

### Automatic Linting via GitHub Actions

We have configured a GitHub Action to automatically run markdownlint
on all pull requests. This ensures that all markdown files adhere
to our linting guidelines before they are merged.
