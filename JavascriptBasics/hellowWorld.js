// As a rule, only the simplest scripts are put into HTML. More complex ones reside in separate files.

// The benefit of a separate file is that the browser will download it and store it in its cache.

// Other pages that reference the same script will take it from the cache instead of downloading it, so the file is actually downloaded only once.

// That reduces traffic and makes pages faster.

// A single <script> tag can’t have both the src attribute and code inside.