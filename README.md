# Screeps Typescript Declarations

> The repository for *Screep's* TypeScript type definitions. https://screeps.com/

Also see Screep's Typescript skeleton project to get Screep development up and running fast: [GitHUB link](https://github.com/MarkoSulamagi/Screeps-typescript-skeleton)

Discussion in [screep's community forum](http://support.screeps.com/hc/en-us/community/posts/207116485-Writing-Screep-bots-with-Typescript?page=1#)

# Usage 

Run command: 

```
$ npm install screeps-typescript-declarations --save
```

Include declaration file in your typescript compiler (usually tsconfig.json), "files" attribute.

```json
"files": ["./your_sources_folder/**/*.ts", "./node_modules/screeps-typescript-declarations/dist/screeps.d.ts"],
```

# Contribute

This library will stay up to date only with the help of you! If active players don't update it, it'll get lost.

To update the declarations, edit the files in ./src folder. 

To compile the declarations, run:

```
npm run compile
```

# Changelog

### v1.1.2 2016-02-05
- Fixed createScreep() method return type

### v1.1.1 2016-02-05

- Updated all declarations. Everything should be quite close to Screep's API (with minor exceptions if I missed something accidentally)

## Authors

* **Marko Sulamägi** - *Converted Cameron's work to quickly installable TS skeleton app* - [MarkoSulamagi](https://github.com/MarkoSulamagi)
* **vanhouc** - *Screep project with TS functionality. His gulpfile and screep.d.ts was very useful.* - [vanhouc](https://github.com/vanhouc)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT license.