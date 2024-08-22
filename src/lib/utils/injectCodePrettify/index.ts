export default function injectCodePrettify() {
  const removeLink = document.querySelector('[href^="https://cdn.jsdelivr.net/gh/google/code-prettify"]')
  removeLink && removeLink?.remove()
  const prettifyScript = document.createElement('script')
  prettifyScript.src = "https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?lang=css&lang=html&lang=js&lang=json&lang=bash&skin=sons-of-obsidian"
  prettifyScript.id = 'prettify-script'
  document.body.appendChild(prettifyScript)
}
