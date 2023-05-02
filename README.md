# employee-tracker

## Table Of Contents
*[Technology Used](#technology-used)

*[Description](#description)

*[Code Snippet](#code-snippet)

*[Credits](#credits)

*[Author](#author)

## Technology used

| Technology Used         | Resource URL  |
| -------------           |:-------------:|
| Node.js                 | [https://nodejs.org/en](https://nodejs.org/en) | 
| npm                     | [https://www.npmjs.com/](https://www.npmjs.com/)      |
| Express.js              | [https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
| Git                     | [https://git-scm.com/](https://git-scm.com/)     | 
| JavaScript              | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| Heroku                  | [https://devcenter.heroku.com/](https://devcenter.heroku.com/) |

## Description


## Code Snippet
This function of 'addNote' grabs the title and text or new notes and then updates our list by returning what was entered in.

```JavaScript
addNote(note) {
    const { title, text } = note;
    if (!title || !text) {
      throw new Error("Note 'title' and 'text' cannot be blank");
    }
    const newNote = { title, text, id: uuidv1() };
    return this.getNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }
```
## Credits
[Using object.key() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

[DELETE route syntax](https://www.geeksforgeeks.org/express-js-app-delete-function/)

[Use of my try/catch error handling](https://expressjs.com/en/guide/error-handling.html)

[uuid.v1 syntax](https://www.npmjs.com/package/uuid#uuidv1options-buffer-offset)

## Author
```MD
### Emanuel Molina

[GitHub](https://github.com/AcquahLopid)
[LinkedIn](https://www.linkedin.com/in/emanuel-molina-65b84426b/)
[GitLab](https://ucb.bootcampcontent.com/emanuelmolina2k-BAsayK)

```