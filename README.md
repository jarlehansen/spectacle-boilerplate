# Spectacle Boilerplate

* Forked from this [repo](https://github.com/FormidableLabs/spectacle-boilerplate)  
* [Spectacle documentation](https://github.com/FormidableLabs/spectacle)

---

__Changes__
* Use of webpack-dev-server instead of nodejs
* Updated npm dependencies
* Added setup-script that will help on initial setup of the project

## Installation
Clone the repository  
```
git clone https://github.com/jarlehansen/spectacle-boilerplate.git project-name
```

Run the `setup.sh` script.  
It will run `npm install` and use the name of the project to update package.json and readme.
It will also remove the `.git` folder and finally delete the setup-script.
```
./setup.sh
```

## Usage

Run `npm start` to start the webpack-dev-server.
The presentation is then available at http://localhost:8080

To build the project, run `npm run build`

## Reference

The Spectacle core API is available at [https://github.com/FormidableLabs/spectacle/blob/master/README.markdown](https://github.com/FormidableLabs/spectacle/blob/master/README.markdown).
