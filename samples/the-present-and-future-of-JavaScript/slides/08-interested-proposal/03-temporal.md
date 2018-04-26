## Temporal

stage-1

```javascript
let civilDate = new CivilDate(year, month, day); // month 1 - 12

let year = civilDate.year;
let month = civilDate.month;
let day = civilDate.day;

new CivilTime(hour, minute[[[, second], millisecond], nanosecond]);
let hour = civilTime.hour;
let minute = civilTime.minute;
let second = civilTime.second;
let millisecond = civilTime.millisecond;
let nanosecond = civilTime.nanosecond;

let myCivilDate = new CivilDate(2016, 2, 29);
let newCivilDate = myCivilDate.plus({years: 1, months: 2});
//results in civil date with value 2017-4-28
```

<a class="ref-link" href="https://github.com/tc39/proposal-temporal" target="_blank">
  https://github.com/tc39/proposal-temporal
</a>
