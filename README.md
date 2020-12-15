**NOTICE: This extension is archived. Move to [https://extensions.panic.com/extensions/com.thorlaksson/com.thorlaksson.phpcs/](https://extensions.panic.com/extensions/com.thorlaksson/com.thorlaksson.phpcs/)**

# phpcs for Nova

This issues extension for [Nova](https://panic.com/nova) provides an interface to [phpcs](http://pear.php.net/package/PHP_CodeSniffer/). It will be used with files that have the “PHP” language mode.

## Linter Installation

Before using this extension, you must ensure that `phpcs` is installed on your system. The preferred method is using [composer](https://getcomposer.org/) for both system-wide and project-wide installations.

Once phpcs is installed, you can proceed to install the phpcs extension if it is not yet installed.

### System-wide Installation

The `phpcs` linter can be installed globally using the Composer Dependency Manager for PHP.

1. Install [composer](https://getcomposer.org/doc/00-intro.md).
1. Require `phpcs` package by typing the following in a terminal:

    ```bash
    composer global require squizlabs/php_codesniffer
    ```

### Project-wide Installation

The `phpcs` linter can be installed in your project using the Composer Dependency Manager for PHP.

1. Install [composer](https://getcomposer.org/doc/00-intro.md).
1. Require `phpcs` package by typing the following at the root of your project in a terminal:

    ```bash
    composer require --dev squizlabs/php_codesniffer
    ```

### Installation

1. Open Nova.
2. Choose menu **Extensions** > **Extension Library...**
3. Search extension `phpcs`
5. Click **Install**.

## Basic Configuration

You can set the `executable_path` and `standard` in **Extensions** > **Extension Library...** > **phpcs** > **Preferences**.

### Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Credits

- [Dinh Quoc Han](https://github.com/dinhquochan)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
