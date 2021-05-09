# Image Repo

This is a dockerized web app for an image repository, where users can upload images along with a description and custom tags. Users can also search the image repository with the search tool, or by filtering based on image tags.

The front end was built with ReactJS, and makes use of Firebase storage and Firebase real time database.

# Next Steps:
- Authentication and user accounts could be implemented - users would be able to view their own photos as well as photos that other users have granted them access to. Since Firebase has already been set up for the image storage, perhaps it could be use to manage user accounts too.
- Bulk image upload could be implemented. Currently, through the UI, users can only upload one image from their file system at a time.


# To run the app:
1. Clone this repository onto your local machine: `git clone https://github.com/qrst07/image-repo`
2. cd into the sub directory `image-repo`
3. Create a Firebase API key, then in the `/src` folder, create a `.env` file with your Firebase API key
```
REACT_APP_FIREBASE_API = #####
```
4. Then, build the app with Docker: `docker-compose up`
5. Or, run the app with npm, `npm install` then `npm start`
