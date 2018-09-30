# bbcore

Rewrite of bobril-build to .Net Core. Mainly for speed reasons. It now replaced original JS version.

# How to start

    yarn global add bobril-build

    bb

# What to do when bb failing to start for first time because Github rate limit

Github by default has limit of 60 anonymous requests per hour from one IP. So if it fails you have 2 options, wait or provide token to authenticate as yourself. First read [https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/] how to create your token. Token can have just read only rights, you don't need to select any scopes. Then you can either store it into your user profile directory in .github/token.txt file or set environment variable GITHUB_TOKEN.

# How to override used version

In `package.json` create `bobril` section and set `bbVersion` to specific version you need. By setting `tsVersion` you can override used TypeScript for compilation.

    "bobril": {
        "bbVersion": "0.9.0",
        "tsVersion": "2.7.1"
    }

# How to use Docker version

## Run it

    docker run -it --rm -v %cd%:/project -v directory_for_persistent_cache:/bbcache -p 8080:8080 bobril/build

## What it contains

- Bobril-build
- Chrome
- Nodejs
- Npm
- Yarn

## Build it on your own

    docker build . -t bobril/build --build-arg VERSION=x.y.z
    docker tag bobril/build bobril/build:x.y.z
    docker push bobril/build:x.y.z

## Look inside

    docker history bobril/build
    docker run -it --rm --entrypoint bash bobril/build

# List of bobril-build specific warnings and errors

| Number | Severity | Message                                                                                        |
| ------ | -------- | ---------------------------------------------------------------------------------------------- |
| -1     | Warn     | Local import has wrong casing                                                                  |
| -2     | Warn     | Module import has wrong casing                                                                 |
| -3     | Error    | Missing dependency                                                                             |
| -5     | Error    | First parameter of b.asset must be resolved as constant string                                 |
| -6     | Error    | b.sprite cannot have more than 6 parameters                                                    |
| -7     | Warn     | Problem with translation message                                                               |
| -8     | Error    | Translation message must be compile time resolvable constant string, use f instead if intended |
| -9     | Error    | Hint message must be compile time resolvable constant string                                   |
| -10    | Error    | Absolute import name must be just simple module name                                           |
| -11    | Warn     | Fixing local import with two slashes                                                           |

# Package.json - bobril section features

## How to enable generating of **sprites.ts** from all pngs in assets directory

    "bobril": {
        "plugins": {
            "bb-assets-generator-plugin": {
                "generateSpritesFile": true
            }
        }
    }

# Environmental variables

## Disable yarn creating links

Docker on Windows filesystem has limitation in creating links. To workaround this issue create environment variable `BBCoreNoLinks` with not empty value so bbcore will add `--no-bin-links` parameter to yarn command line.
