# countdown-to-specific-date

GitHub Page for displaying a countdown to a specific date from an URL param

## Usage

To use this countdown, you can simply add the following URL parameters to the URL of this page:

- `year`: The year of the date you want to count down to
- `month`: The month of the date you want to count down to
- `day`: The day of the date you want to count down to
- `hour`: The hour of the date you want to count down to
- `minute`: The minute of the date you want to count down to
- `second`: The second of the date you want to count down to

For example, if you want to count down to 2050-01-01 00:00:00, you can add the following URL parameters to the URL of this page:

```
?year=2050&month=1&day=1&hour=0&minute=0&second=0
```

## Customization

You can customize the countdown by modifying the following query parameters in the URL:

**Note**: The color parameters should be in hexadecimal format **without** the `#` symbol.

- `textColor`: The color of the countdown text (`?textColor=ff0000`)
- `backgroundColor`: The background color of the countdown text ( `?backgroundColor=000000`)

You can also customize the text after the digits by modifying the following query parameters in the URL:

- `dayText`: The text after the day digits (e.g., `?dayText=days`)
- `hourText`: The text after the hour digits (e.g., `?hourText=hours`)
- `minuteText`: The text after the minute digits (e.g., `?minuteText=minutes`)
- `secondText`: The text after the second digits (e.g., `?secondText=seconds`)

## Examples

- [Countdown to 2050-01-01 00:00:00](https://coolusahd.github.io/countdown-to-specific-date?year=2050&month=1&day=1&hour=0&minute=0&second=0&textColor=fff&backgroundColor=000&dayText=days&hourText=hours&minuteText=minutes&secondText=seconds)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.
