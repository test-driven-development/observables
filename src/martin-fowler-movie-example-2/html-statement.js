import {configure} from './configure'
import {usd} from './usd'

export function htmlStatement(invoice, plays) {
  return renderHtml(configure(plays, invoice))
}

function renderHtml(config) {
  return (
    `<h1>Statement for ${config.customer}</h1>\n` +
    `<p>You earned <em>${config.totalVolumeCredits}</em> credits</p>\n` +
    `<p>Amount owed is <em>${usd(config.total / 100)}</em></p>\n`
  )
}
