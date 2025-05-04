[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/tu_usuario/tu_repositorio)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)


#### Installation

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.

## Usage

Get started in no time:

- **Development**: Run `npm run dev` or `npm start` to start the development server.
- **Build**: Use `npm run build` to generate a production build.
- **Preview**: Run `npm run preview` to preview the production build.
- **Astro CLI**: Explore additional Astro CLI commands using `npm run astro`.
### Updating User Links

To customize the links displayed in your application, follow these steps:

1. Open the `src/data` directory in your project.
2. Modify each `mdx` or `json` file with the information you want to display. You can change the link title, the link itself, and the associated icon.


Here's an example of how you can change the information of the links:

```json

   {
    "name": "Angela Sofia Osorio",
    "email": "contact@sofidev.top",
    "github": "https://github.com/SofiDevO",
    "linkedin": "https://www.linkedin.com/in/sofidev/",
    "blog": "https://sofidev.blog",
    "portfolio": "https://itssofi.dev",
    "cv": "https://itssofi.dev/docs/Angela_Sofia_Osorio_CV2024_updated.pdf" ,
    "profilePic": "/img/profile_pic4.png",
    "bannerImage": "/img/bannerYT.png"
}

```

5. Once you have updated the information of the links in the `src/data` directory, the changes will be automatically reflected in your application when you rebuild or run it.

Remember to ensure you provide valid links and that the icons used are available in the iconify libary.

### Including Icons

To import icons into your project, we use the Iconify CDN and utilize the `icon` attribute of each Iconify icon in the `userLinks`. For example, to use an icon of React:

```html
<iconify-icon icon="logos:react" width="27" height="27"></iconify-icon>
```

In our `data.js`, we only need to specify the icon identifier, like this:

```javascript
{
    title: "React",
    link: "https://reactjs.org/",
    icon: "logos:react"
}
```

Here's how you can add the Iconify script to the `<head>` section of your project:

```html
<head>
    <script src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"></script>
</head>
```

Once you include this script, you can use any Iconify icon by specifying its identifier in the `icon` attribute. Make sure to replace `"logos:react"` with the appropriate icon identifier for the icons you want to use. You can find a variety of icons available on the [Iconify logos page](https://icon-sets.iconify.design/logos/).
#### Customization

Feel free to modify this project to suit your needs! Whether it's changing the layout, adding new features, or tweaking the styles, let your creativity flow.

#### Author

- SofiDev



## Contributors

| Username   | GitHub Profile                               | Photo                                                                  |
| ---------- | -------------------------------------------- | ---------------------------------------------------------------------- |
| ElStron    | [@ElStron](https://github.com/ElStron)       | <img src="https://github.com/ElStron.png" width="50" height="50" />    |
| Rickytodev | [@rickytodev](https://github.com/rickytodev) | <img src="https://github.com/rickytodev.png" width="50" height="50" /> |


#### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. Feel free to explore, modify, and make it your own!
