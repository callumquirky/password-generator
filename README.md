# Password Generator

## Description

This project is built using JavaScript and is based on taking the user's password preferences via prompts and confirms to generate them a secure, randomly generated password that they can copy from the page for their own use.

After clicking the button, the user is prompted to enter their specified length between 10 and 64. The application features code to prevent the user from entering numbers less than 10 and greater than 64 in addition to input that aren't numbers. Any input not meeting this criteria results in the prompt being repeated until the conditions are satisfied.

![length prompt](/assets/images/length-prompt.PNG)

The user is then prompted to specify if they would like their password to include special characters, numeric characters, lower case characters, and upper case characters via a series of confirms.

![character prompt](/assets/images/characters-prompt.PNG)

Once this has been completed, the application then displays the randomly generated password with their preferences in the display so that they can copy it and use it!

![generated password](/assets/images/generated-password.PNG)

You can view the deployed application here: https://callumquirky.github.io/password-generator/

## License 

This project uses a MIT license.
