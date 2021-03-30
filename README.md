# salad-frontend


### Install packages before starting develop
```shell
npm install
```

### To develop
Run command
```shell
npm run develop
```
Then open `http://localhost:8000` in your browser to access your page.

NOte: If there is any error happen in this process, please terminate, clean cache, and then start again.

### To clean the cache
Run command
```shell
npm run clean
```
This command will delete `.cache` and `public` folder.


### To start Storybook
Run command
```shell
npm run storybook
```
It will start the process to build stories which contains `*.stories*` in their name.

All stories will be at `http://localhost:{random-port-number}`.
