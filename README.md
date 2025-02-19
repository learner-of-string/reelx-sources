# Hi,
### This is the source code of ReelX, an open-source project by me. Welcome To ReelX, just watch your favorite movies at relax.

**Here is the optimized version:** [ReelX](https://learner-of-string.github.io/reelx/)?

### What is ReelX?

- `ReelX` is an open source personal movie listing tool. With ReelX, you can take a list all of your favorite movies and watch then at any time.

- You have to fill an extra input field besides movie name and ott, where you can take the url where you will watch that particular movie.

- When you will start typing to add a new movie, it will automatically show if that movie already added or not. I mean you can search your movies too.

### Do you want to run this project locally from source code directly?
 Ok no problem. Here is the instructions bellow...

 #### What you need to install to run this project first?
 - You must need to install `Visual Studio Code` and `Node.Js` first.
 - Then you need to run some commands on your command prompt whatever you use windows or linux or even mac.
  
  ```
git clone 
  ```

  ```
cd reelx
  ```
  ```
code .
  ```
  ```
npm install
  ```
  ```
npm run dev
  ```

The Project is already running in your local machine and you can open the project in your browser from the url provided or generated in your VSCode terminal which looks like `http://localhost:5173/` or may exactly this.

##### N:B:
There are some problem in this project. As it is an open source project I hope someone or anyone will fix these one day. I am listing the problems here bellow.

- The watch button - if you click at the text in the button it will work properly. But when you click on the button outside the text, new tab will not open.
  
- The Design is not consistent - when you add some movies, one have a very short title and the next have a long title, you will notice this thing.

- MovieForm.jsx:32 - When you will click on Add button to add a movie, clicking on this button the existing list of movies has gone to hell. But after reloading the page it backs again because I stored them into the local storage of browser. So I disabled the `event.preventDefault();` and this is at line 32 with a long comment you will easily find it.