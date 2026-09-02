import type { LexicalEditor } from 'lexical'
import type { MaybeRefOrGetter } from 'vue'

import { registerList } from '@lexical/list'
import { toValue, watchEffect } from 'vue'

export function useList(
  editor: LexicalEditor,
  shouldPreserveNumbering?: MaybeRefOrGetter<boolean | undefined>,
) {
  watchEffect((onInvalidate) => {
    const unregister = registerList(editor, {
      restoreNumbering: toValue(shouldPreserveNumbering) ?? false,
    })

    onInvalidate(unregister)
  })
}
