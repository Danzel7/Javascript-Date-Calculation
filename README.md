## Detail

This function returns the closest lotto date. The function takes 3 paramters - a date time string, locale (to format the messaged returned) and a boolean to allow for future draws only (if false it will return past draws - default value is true). If no paramters are provided the current date of the browser will be used.

## Usage

```Run the function using the samples below

calculateClosestLotteryDate(); 
calculateClosestLotteryDate(1601557163, 'default', true);
calculateClosestLotteryDate(1601557163, 'default', false);
calculateClosestLotteryDate('2015-04-07 01:00:00');
calculateClosestLotteryDate('This will return an error');
```