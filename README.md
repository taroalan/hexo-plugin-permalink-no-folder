# hexo-plugin-permalink-no-folder

This plugin help you remove folder name in your permalink.

For example, if your posts directory structure like this:

```
.
├── _posts
│   ├── life
│   │   └── 2018-09-23-hello-world.md
│   ├── notes
│   │   └── 2018-09-22-today-is-a-good-day.md
```

and your permalink config is:

```yml
permalink: :title.html
```

then your posts url will include folder name:

```
/life/hello-world.html
/notes/today-is-a-good-day.html
```

this plugin will help you remove the folder name in the path, so the finally path will be short:

```
/hello-world.html
/today-is-a-good-day.html
```

## How to use

Install dependencies.

```bash
npm i hexo-plugin-permalink-no-folder
```

Then config the plugin in your `_config.yml` file.

```
permalink: :title.html
permalink_no_folder: true
```

## LICENSE

[MIT LICENSE](./LICENSE)