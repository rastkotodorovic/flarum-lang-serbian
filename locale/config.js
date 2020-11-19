app.translator.plural = function(count) {
  return count == 1 ? 'one' : 'other';
};

function processRelativeTime(number, withoutSuffix, key, isFuture) {
  var format = {
    'm': ['minut', 'jedan minut'],
    'h': ['sat', 'jedan sat'],
    'd': ['dan', 'jedan dan'],
    'dd': [number + ' dana', number + ' dana'],
    'M': ['mesec', 'jedan mesec'],
    'MM': [number + ' meseci', number + ' meseci'],
    'y': ['godina', 'jedna godina'],
    'yy': [number + ' godina', number + ' godina']
  };
  return withoutSuffix ? format[key][0] : format[key][1];
};

moment.locale('bs', {
  months : 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
	monthsShort : 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
	monthsParseExact: true,
	weekdays : 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
	weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
	weekdaysParseExact : true,
  longDateFormat : {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L : 'DD/MM/YYYY',
    LL : 'D MMMM YYYY',
    LLL : 'D. MMMM YYYY HH:mm',
    LLLL : 'dddd, D. MMMM YYYY HH:mm'
  },
  calendar : {
    sameDay : '[danas u] LT',
    nextDay : '[sutra u] LT',
    nextWeek : function () {
	    switch (this.day()) {
	        case 0:
	            return '[u] [nedelju] [u] LT';
	        case 3:
	            return '[u] [sredu] [u] LT';
	        case 6:
	            return '[u] [subotu] [u] LT';
	        case 1:
	        case 2:
	        case 4:
	        case 5:
	            return '[u] dddd [u] LT';
	    }
	},
	lastDay  : '[juče u] LT',
	lastWeek : function () {
	    switch (this.day()) {
	        case 0:
	        case 3:
	            return '[prošlu] dddd [u] LT';
	        case 6:
	            return '[prošle] [subote] [u] LT';
	        case 1:
	        case 2:
	        case 4:
	        case 5:
	            return '[prošli] dddd [u] LT';
	    }
	},
    sameElse : 'L'
    },
  relativeTime : {
    future : 'za %s',
    past : 'pre %s',
    s : 'nekoliko sekundi',
    m : 'minut',
    mm : '%d minuta',
    h : 'sat',
    hh : '%d sati',
    d : 'dan',
    dd : '%d dana',
    M : 'mesec',
    MM : '%d meseci',
    y : 'godina',
    yy : '%d godina'
  },
  ordinalParse: /\d{1,2}\./,
  ordinal : '%d.',
  week : {
    dow : 1, // Monday is the first day of the week.
    doy : 7  // The week that contains Jan 4th is the first week of the year.
  }
});
