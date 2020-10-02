function calculateClosestLotteryDate(passedDateTime = null, locale = 'default', onlyUseFutureDraws = true) {
	try {
        let dateToCheck = new Date();
        let nextLottoDay = null;

        if (passedDateTime) {
            const d = new Date(passedDateTime);
    
            if (d instanceof Date && !isNaN(d)) {
                if (!onlyUseFutureDraws && d < new Date()) {
                    dateToCheck = new Date(passedDateTime);
                }
            } else {
                return `${passedDateTime} is not valid date time value`;
            }
        }

        if(dateToCheck.getDay() === 3 || dateToCheck.getDay() === 6) {
            if(dateToCheck.getHours() <= 20) {
                nextLottoDay = dateToCheck;
                return nextLottoDay;
            }
        }

        for(let i=0; i < 8; i++) {
            let nextDay = new Date(dateToCheck);
            nextDay.setDate(nextDay.getDate() + i);

            if(nextDay.getDay() === 3 || nextDay.getDay() === 6) {
                nextLottoDay = nextDay;
                break;
            }
        }

        const dayName = nextLottoDay.toLocaleDateString(locale, { weekday: 'long' })
        const day = nextLottoDay.toLocaleString(locale, { day: 'numeric' });
        const month = nextLottoDay.toLocaleString(locale, { month: 'long' });
        const year = nextLottoDay.toLocaleString(locale, { year: 'numeric' });

        return `The next Lotto draw is on next ${dayName} ${day} ${month} ${year} at 8pm`;
	} catch (err) {
        return 'Failed to find next Lotto draw date';
    }
}
