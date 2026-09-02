import { HashtagNode, registerLexicalHashtag } from '@lexical/hashtag'
import { watchEffect } from 'vue'
import { useLexicalComposer } from './LexicalComposer.vine'

export function HashtagPlugin() {
  const editor = useLexicalComposer()

  watchEffect((onInvalidate) => {
    if (!editor.hasNodes([HashtagNode])) {
      throw new Error('HashtagPlugin: HashtagNode not registered on editor')
    }

    onInvalidate(registerLexicalHashtag(editor))
  })

  return vine``
}
