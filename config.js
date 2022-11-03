/* 
Import this module in the beginning of every entry point of the application. Keep in mind that it changes the `process.env` variable and thus has side-effects. This module relies on the Node.js caching mechanism (https://stackoverflow.com/questions/11937859/stateful-singleton-modules) so it’s safe to import it twice in the same script (only the first `import` statement will be executed)
*/

// First, install `dotenv` using `npm i -S dotenv`, so you can import it and use here
import dotenv from 'dotenv'

// This line will return all the environment variables changed by `dotenv`
export default dotenv.config({ path: '.env' })