# LGK's Prettier config

Run 
```
npx -y lgk-prettier
```
add the root of a project to add a [`.prettierrc`](https://prettier.io) file to it.

## Why does this exist?

I like to use Prettier in all my projects to make code formatted in a consistent way. I configured my VS Code to format automatically with the Prettier extension.

[I also wrote an article about this.](https://site.lgk.io/blog/mach-deinen-code-prettier/) It's in German though.

![Graphic visualizing pretty formatting a code](https://site.lgk.io/img/oOzfprwcvr-300.jpeg)

Unfortunately I don't like the default formatting, so I always have my own `.prettierc` in each project, since you can't have a global Prettier config.

This script should help adding this config to a new project.

My preferred config looks like this:

```json
{
    "tabWidth": 4,
    "useTabs": false,
    "semi": false,
    "singleQuote": false,
    "trailingComma": "none",
    "bracketSpacing": true,
    "bracketSameLine": false,
    "fluid": false
}
```

If you like this as well, feel free to use my command tool. Or fork this repo and change it to your own.