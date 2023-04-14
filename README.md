# Reproduce Step

1. run `pnpm i` : install dependencies
2. run `pnpm storybook` : run storybook
3. go to http://localhost:6007/?path=/docs/changelog--docs, then you can see error:
   ```
   Error: Failed to execute 'createElement' on 'Document': The tag name provided ('/CHANGELOG.md') is not a valid name.
    at createElement (http://localhost:6007/node_modules/.cache/.vite-storybook/deps/chunk-CFDS43L5.js?v=315bd9cb:7233:42)
    at createInstance (http://localhost:6007/node_modules/.cache/.vite-storybook/deps/chunk-CFDS43L5.js?v=315bd9cb:8093:28)
    at completeWork (http://localhost:6007/node_modules/.cache/.vite-storybook/deps/chunk-CFDS43L5.js?v=315bd9cb:14762:34)
    at completeUnitOfWork (http://localhost:6007/node_modules/.cache/.vite-storybook/deps/chunk-CFDS43L5.js?v=315bd9cb:16907:24)
    at performUnitOfWork (http://localhost:6007/node_modules/.cache/.vite-storybook/deps/chunk-CFDS43L5.js?v=315bd9cb:16889:13)
    at workLoopSync (http://localhost:6007/node_modules/.cache/.vite-storybook/deps/chunk-CFDS43L5.js?v=315bd9cb:16835:13)
    at renderRootSync (http://localhost:6007/node_modules/.cache/.vite-storybook/deps/chunk-CFDS43L5.js?v=315bd9cb:16810:15)
    at performSyncWorkOnRoot (http://localhost:6007/node_modules/.cache/.vite-storybook/deps/chunk-CFDS43L5.js?v=315bd9cb:16550:26)
    at scheduleUpdateOnFiber (http://localhost:6007/node_modules/.cache/.vite-storybook/deps/chunk-CFDS43L5.js?v=315bd9cb:16315:15)
    at updateContainer (http://localhost:6007/node_modules/.cache/.vite-storybook/deps/chunk-CFDS43L5.js?v=315bd9cb:18754:11)
   ```