import {
  ENGLISH_TRANSLATION,
  CHINESE_TRANSLATION
} from './types'

export function handleTranslation (language) {
  if (language === 'en') {
    return {
      type: ENGLISH_TRANSLATION,
      payload: null
    }
  } else if (language === 'cn') {
    return {
      type: CHINESE_TRANSLATION,
      payload: null
    }
  }
}
