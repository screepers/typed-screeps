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

### v1.2.1 2016-02-08 [ChangeLog](http://support.screeps.com/hc/en-us/articles/206897739-Changelog-2016-02-08)
- New body part (CLAIM)
- Documentation updates to support claim
- Added Creep.dismantle()

### v1.1.7 2016-02-08
- Change room.controller and room.storage to correct type

### v1.1.5 2016-02-07
- Updated RoomPosition declarations [#1](https://github.com/MarkoSulamagi/Screeps-Typescript-Declarations/issues/1)
- Removed HashMap from Game interface. It caused migration issues from JS to TS. [#2](https://github.com/MarkoSulamagi/Screeps-Typescript-Declarations/issues/2)
- Declare construction site variable (to fix instanceof problem)

### v1.1.3 2016-02-06
- Removed empty memory interfaces
- Fixed createScreep() method return type
- Updated all declarations. Everything should be quite close to Screep's API (with minor exceptions if I missed something accidentally)

## Authors

* **Marko Sulamägi** - *Converted Cameron's work to quickly installable TS skeleton app* - [MarkoSulamagi](https://github.com/MarkoSulamagi)
* **vanhouc** - *Screep project with TS functionality. His gulpfile and screep.d.ts was very useful.* - [vanhouc](https://github.com/vanhouc)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT license.