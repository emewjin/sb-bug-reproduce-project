# Reproduce Step

1. run `pnpm i` : install dependencies
2. run `pnpm storybook` : run storybook
3. go to http://localhost:6007/?path=/story/v5-buttons-button--basic, then you can see error:
   ```
   TypeError: importers[path] is not a function
    at StoryStore.importFn (http://localhost:6007/virtual:/@storybook/builder-vite/storybook-stories.js:6:31)
    at StoryStore.loadCSFFileByStoryId (http://localhost:6007/sb-preview/runtime.mjs:40:8376)
    at StoryStore.loadStory (http://localhost:6007/sb-preview/runtime.mjs:40:9563)
    at async http://localhost:6007/sb-preview/runtime.mjs:74:9003
    at async StoryRender.runPhase (http://localhost:6007/sb-preview/runtime.mjs:74:8764)
    at async StoryRender.prepare (http://localhost:6007/sb-preview/runtime.mjs:74:8922)
    at async PreviewWeb.renderSelection (http://localhost:6007/sb-preview/runtime.mjs:94:3120)
   ```