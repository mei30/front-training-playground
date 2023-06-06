import { createI18n } from 'vue-i18n'

import en from '@/locale/en.json'

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  message: {
    en
  }
})
