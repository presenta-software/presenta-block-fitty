

# PRESENTA Fitty Block

This block renders a text string using the [Fitty library](https://github.com/rikschennink/fitty) under the hood.

## Installation

Please read the installation istructions for official plugins [here](https://lib.presenta.cc/extend/#install-an-official-plugin) using this unique identifier: `block-fitty`

## Usage

To configure this block use this setting:

```js
{
	type: 'fitty',
	text: `Line1
Line2
Line3`
}
```

or the equivalent version:

```js
{
	type: 'fitty',
	text: 'Line1\nLine2\nLine3'
}
```

To emphatize a specific word, use bold variation:

```js
{
	type: 'fitty',
	text: 'Line1\n<b>Line2</b>\nLine3'
}
```

| Prop name  | Description                                                  | Default value | Possible values                        |
| ---------- | ------------------------------------------------------------ | ------------- | -------------------------------------- |
| type       | Define this block type **(required)**                        |               | fitty                                  |
| text       | A text string, optionally with HTML inline tags, with carriage returns to separate **(required)** |               | String                                 |
| width      | The width of the text block expressed in % of the container  | 100           | A number between 0 and 100             |
| linefactor | A multiplicator factor to affect the line height between text lines | 0.9           | Any number, likely between 0.5 and 1.2 |
|            |                                                              |               |                                        |

## Development

Run the watcher:

    npm start

and the local webserver

    npm run test
