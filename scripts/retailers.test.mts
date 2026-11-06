import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { getRetailers } from '../src/config/retailers'
import { getCrmModules } from '../src/config/crmData'

describe('getRetailers', () => {
  it('returns Amazon, Audible, Kindle, and Barnes & Noble in English and Spanish', () => {
    const en = getRetailers('en')
    const es = getRetailers('es')

    assert.equal(en.length, 4)
    assert.equal(es.length, 4)
    assert.deepEqual(
      en.map((r) => r.id),
      ['amazon', 'audible', 'kindle', 'bn'],
    )
    assert.equal(en[0].name, 'Amazon')
    assert.equal(en[1].name, 'Audible')
    assert.equal(en[2].name, 'Amazon Kindle')
    assert.equal(en[3].name, 'Barnes & Noble')

    for (const item of en) {
      assert.ok(item.cta.length > 0, `Expected non-empty CTA for ${item.id}`)
      assert.ok(item.comingSoonNote.length > 10, `Expected comingSoonNote for ${item.id}`)
    }
  })
})

describe('getCrmModules', () => {
  it('returns the 3 owner-confirmed CRM modules in English and Spanish', () => {
    const en = getCrmModules('en')
    const es = getCrmModules('es')

    assert.equal(en.length, 3)
    assert.equal(es.length, 3)
    assert.deepEqual(
      en.map((m) => m.id),
      ['portal', 'workbook', 'progress'],
    )
    assert.ok(en[0].headline.includes('Teacher Classroom Management'))
    assert.ok(en[1].headline.includes('Interactive Digital Workbook'))
    assert.ok(en[2].headline.includes('Student Progress Tracking'))
  })
})
