# OBS All Platforms Music Widget

This project is a widget that displays the currently playing song from any platform compatible with Last.fm. It integrates with OBS (Open Broadcaster Software) so you can show the information in real-time while streaming or recording.

## How It Works

The widget uses the Last.fm API to fetch the user's recent tracks (scrobbles). Each time the widget updates, it shows:

- The name of the song currently playing.
- The artist's name.
- The album image (or a default image if not available).

This widget updates automatically every 3 seconds to show the current song. It is designed to be used on platforms like Twitch or YouTube, displaying the song the user is listening to in real-time while streaming.

## Technologies Used

This project was created using the following technologies:

- **JavaScript**: To handle the widget's logic and interaction with the Last.fm API.
- **HTML**: For the widget's structure.
- **CSS**: For the widget's visual design.
- **Last.fm API**: To fetch the user's recent tracks.
- **OBS (Open Broadcaster Software)**: To integrate the widget into your streams.

## Preview

Here is a preview of how the widget will look when you run "index.html"
(once added to your scene, the widget will be transparent)

![Widget Preview](assets/Preview.PNG)

## How to Use

### Step 1: Create a Last.fm Account

1. Go to [https://www.last.fm/signup](https://www.last.fm/signup).
2. Register with your email, Facebook, Google, or Apple account.
3. Once you are signed in, go to the following page to get your API key: [https://www.last.fm/api](https://www.last.fm/api).
4. Log in with your Last.fm account if you haven't already.
5. Click on "Get an API account".
6. Complete the form with the required details (you can leave the URL fields empty if you don't have them).
7. Click "Submit" to get your API key.

### Step 2: Create the `config.js` File

1. Create a file named `config.js` in the root directory of your project.
2. Inside `config.js`, add the following code:

```javascript

const config={
    apiKey:"YOUR_API_KEY", // Replace "YOUR_API_KEY" with the API Key you obtained in the previous step
    user:"YOUR_USERNAME" // Replace "YOUR_USERNAME" with your Last.fm username

};
```
### Step 3: Add the Widget to OBS

To add the widget to OBS:

1. Open **OBS**.
2. In the **Sources** section of your scene, click the **+** icon and select **Browser**.
3. In the pop-up window, give the source a name (e.g., "Music Widget").
4. In the **URL** field, provide the local path to your project (e.g., `file:///C:/Path/to/your/project/index.html`).
5. Click **OK** and adjust the size of the source as needed.

Once added to your scene, the widget will be transparent, showing only the song and artist information. You can layer it over your stream content without any visible background, making it blend seamlessly into your broadcast.
### NOTE:
  
In order for the widget to work with Apple Music and to further extend the applications compatible with the widget, it is extremely important to install the "Web Scrobbler" browser extension. Then connect all of your accounts to lastfm.com



