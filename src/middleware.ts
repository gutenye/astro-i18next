import { defineMiddleware } from 'astro:middleware'
import i18next from 'i18next'

export const onRequest = defineMiddleware((context, next) => {
  i18next.changeLanguage(context.params.locale || i18next.options.lng)
  return next()
})
