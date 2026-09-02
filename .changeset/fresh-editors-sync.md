---
"lexical-vue": minor
---

Bump Lexical dependencies to 0.49.0

- Fix collaboration setup and cleanup so the Yjs provider and binding are not recreated while the editor is open
- Fix ContentEditable props, including support for `spellcheck="false"`
- Fix HashtagPlugin registering editor history instead of hashtag support
- Fix HorizontalRulePlugin inserting the base node instead of the lexical-vue node
- Fix menu closing, keyboard controls, item preselection, and active item attributes
- Fix selected styles not updating for alignable blocks
