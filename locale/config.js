dayjs.locale({
  name: 'sr',
  weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
  weekdaysShort: 'ned._pon._uto._sre._četv._pet._sub.'.split('_'),
  weekdaysMin: 'ne_po_ut_sr_če_pe_sub'.split('_'),
  months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
  monthsShort: 'jan._feb._mart_apr._maj_jun_jul_avg._sept._okt._nov._dec.'.split('_'),
  weekStart: 1,
  yearStart: 4,
  formats: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  },
  relativeTime: {
    future: 'u %s',
    past: 'pre %s',
    s: 'nekoliko sekundi',
    m: 'jedne minute',
    mm: '%d minuta',
    h: 'jedan sat',
    hh: '%d sati',
    d: 'jedan dan',
    dd: '%d dana',
    M: 'mesec',
    MM: '%d meseci',
    y: 'godina',
    yy: '%d godine'
  },
  ordinal: (n) => {
    const o = n === 1 ? 'er' : ''
    return `${n}${o}`
  }
}, null, false);