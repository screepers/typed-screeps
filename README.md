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

# Usage

Note: When using this API, you can't access creeps in manner suggested in Screeps' tutorial: 

```
Game.creeps.Worker1  // This is not allowed by TypeScript compiler
```

Instead, you have to use 

```
Game.creeps['Worker1']
```

# Contribute

This library will stay up to date only with the help of you! If active players don't update it, it'll get lost.

To update the declarations, edit the files in ./src folder. 

To compile the declarations, run:

```
npm run compile
```

# Changelog

### v3.0.0 Change all usage of interface to class.
Please raise an issue if this break your code! 

### v2.1.0 2016-06-23 [ChangeLog] (http://support.screeps.com/hc/en-us/articles/209164605-Changelog-2016-06-17)
- Added new method StructureRampart.setPublic.
- Added new property StructureRamprt.isPublic.
- Added new global property Game.constructionSites.
- Added new argument asArray to methods Room.lookAtArea and Room.lookForAtArea
- Method Creep.moveByPath now accepts paths returned from PathFinder.search.

### v1.5.4 2016-04-04 [Bug](https://github.com/MarkoSulamagi/Screeps-Typescript-Declarations/issues/12)
- Missing constants

Thanks [Strategic-Link-Consulting](https://github.com/Strategic-Link-Consulting)

### v1.5.3 2016-03-31 [Bug](https://github.com/MarkoSulamagi/Screeps-Typescript-Declarations/issues/11)
- Problem with the Game arrays.

### v1.5.2 2016-03-19 [Bug](https://github.com/MarkoSulamagi/Screeps-Typescript-Declarations/issues/10)
- RoomPosition opts fix. Filter and algorithm are optional.

### v1.5.1 2016-03-18 [ChangeLog](http://support.screeps.com/hc/en-us/articles/208013255)
- Added new STRUCTURE_CONTAINER constant
- New structure: Container
- Added Game.map.getRoomLinearDistance method.

### v1.4.3 2016-03-18 Commited by NhanHo
- Added typings for various list of global objects in Game
- Add serializePath and deserializePath to Room
- Allow optional argument and properties in transferEnergy and PathFinderOps

### v1.4.2 2016-03-10
- Fix for CostMatrix 

### v1.4.1 2016-03-10 [ChangeLog](http://support.screeps.com/hc/en-us/articles/207929925)
- Added Extractor, Lab, Terminal, Market, Mineral objects
- New constants
- Read more from docs

### v1.3.2 2016-03-10 [ChangeLog](http://support.screeps.com/hc/en-us/articles/207023879-PathFinder)
- Updated all interfaces from 19.02 changelog and added docs to PathFinder [ChangeLog](http://support.screeps.com/hc/en-us/articles/207728995-Changelog-2016-02-19). 

### v1.3.1 2016-02-25 [PathFinder](http://support.screeps.com/hc/en-us/articles/207023879-PathFinder)
- NhanHo added new PathFinder interface [ChangeLog](http://support.screeps.com/hc/en-us/articles/207728995-Changelog-2016-02-19). 
Unfortunately other changes in that changelog are not added yet. We're working on it

### v1.2.2 2016-02-08 [ChangeLog](http://support.screeps.com/hc/en-us/articles/206897739-Changelog-2016-02-08)
- New body part (CLAIM)
- Documentation updates to support claim
- Added Creep.dismantle()

- Fixed missing NOT_ENOUGH_ENERGY constant

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

* **Marko Sulamägi** - *Converted Cameron's work to quickly installable TS skeleton app.* - [MarkoSulamagi](https://github.com/MarkoSulamagi)
* **vanhouc** - *Screep project with TS functionality. His gulpfile and screep.d.ts was very useful.* - [vanhouc](https://github.com/vanhouc)
* **Nhan Ho** - *Helpful contributor* - [NhanHo](https://github.com/NhanHo)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT license.
