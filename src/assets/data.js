import { nanoid } from "nanoid";
import Blog from './Screenshot (116).png'
import Expense from './Screenshot (118).png'
import Comfy from './Screenshot (121).png'
import Drum from './Screenshot (123).png'
import Chat from './Chats.png'

export const projectsList = [
    {
      id: nanoid(),
      image: Blog,
      name: 'BLOG',
      title:
        "This is a simple blog website where a user can log-in, create blog posts, delete their own posts, and view other's posts. The web app uses Firebase to store the data and is created with React.",
      url:'https://blog-platform-one-chi.vercel.app/',
    },
    {
      id: nanoid(),
      image: Expense,
      name: 'Expense Tarcker',
      title:
        'Users can login and keep a track of their expenses by adding expense or income to their list. The web app uses Firebase to store the data and is created with React.',
      url:'https://expense-tracker-ruddy-sigma.vercel.app/',
    },
    {
      id: nanoid(),
      image: Comfy,
      name: 'Comfy Sloth',
      title:
        'This is an e-commerce website design. It contains product listing, filters for the products page, allows users to login and add items to cart before proceeding to check-out. The web app is made using React and Tailwind.',
      url:'https://comfy-sloth-blue.vercel.app/',
    },
    {
      id: nanoid(),
      image: Chat,
      name: 'Whip Chat',
      title:
        'Whip Chat is a chats application that allows users to register, login, find their friends and chat with them online. The web app uses Firebase to store user data and messages, and is made using React.',
        url:'https://chat-application-livid-gamma.vercel.app/register',
    },
    
    {
      id: nanoid(),
      image: Drum,
      name: 'Drum Kit',
      title:
        'Drum Kit is a fun project created using HTML, CSS, and JavaScript. One presses the keys on the keyboard to get the drum beats rolling.',
        url:'https://tariqfaria23.github.io/DrumKit/',
    },
  ];

  export const toolsList = [
    {
      id: nanoid(),
      image: 'https://yt3.googleusercontent.com/ytc/AIdro_keG95kcun6Bg2BCPgHNt0b7Gi9ST3ylBP_xE9NM2RfVNqK=s900-c-k-c0x00ffffff-no-rj',
      name: 'Adobe Photoshop',
      text:
        'Adobe Photoshop is a raster graphics editor developed and published by Adobe for Windows and macOS.',
    },
    {
      id: nanoid(),
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/2101px-Adobe_XD_CC_icon.svg.png',
      name: 'Adobe XD',
      text:
        'Adobe XD is a vector design tool for web and mobile applications, developed and published by Adobe Inc.',
    },
    {
      id: nanoid(),
      image: 'https://s3-alpha.figma.com/hub/file/1166690750/85f69649-5387-44c2-ba45-81ae13812e36-cover.png',
      name: 'Figma',
      text:
        'Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications',
    },
    {
      id: nanoid(),
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/2101px-Adobe_Illustrator_CC_icon.svg.png',
      name: 'Adobe Illustrator',
      text:
        'Adobe Illustrator is a vector graphics editor and design software developed and marketed by Adobe.',
    },
  ];

  export const skillsList = [
    {
      id: nanoid(),
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
      name: 'JavaScript',
      text:
        'JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.',
    },
    {
      id: nanoid(),
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
      name: 'TypeScript',
      text:
        'TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript.',
    },
    {
      id: nanoid(),
      image: 'https://static-00.iconduck.com/assets.00/java-icon-512x512-kvr1nudq.png',
      name: 'JAVA',
      text:
        'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
    },
    {
      id: nanoid(),
      image: 'https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png',
      name: 'C++',
      text:
        'C++ is a high-level, general-purpose programming language which is used to create high-performance applications and software like OS, Games, E-commerce software, etc.',
    },
    {
      id: nanoid(),
      image: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      name: 'React',
      text:
        'React is a free and open-source front-end JavaScript library for building user interfaces based on components.',
    },
    {
      id: nanoid(),
      image: 'https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp',
      name: 'Tailwind',
      text:
        'Tailwind CSS is a utility-first CSS framework that streamlines web development by providing a set of pre-designed utility classes.',
    },
  ];

  