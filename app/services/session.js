import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SessionService extends Service {

  @tracked
  current = [];

  @tracked
  currentCart = [];

  @tracked 
  customer = [];
  
  motors = [{
    title:"Bike Z5P",
    description:"Simple and a nice ride",
    image:"https://thumbor.forbes.com/thumbor/trim/0x360:4501x2892/fit-in/711x399/smart/https://specials-images.forbesimg.com/imageserve/5c0a960ca7ea43705919981f/0x0.jpg",
    price:50000.99,
    amount:0
  },{
    title:"Bike XV2",
    description:"Smooth ride, cheap price",
    image:"https://www.beautifullife.info/wp-content/uploads/2020/05/14/hubless_rear_wheel_bike.jpg",
    price:60000.99,
    amount:0
  },{
    title:"Motor XV2",
    description:"Fast motor around",
    image:"https://cars.usnews.com/images/new-features/widget-section/2019_Honda_Rebel_500_hJvs0Ww.jpg",
    price:25000.99,
    amount:0
  },{
    title:"Bike F22",
    description:"Lots of miles but reliable",
    image:"http://images.summitmedia-digital.com/topgear/images/2019/12/19/2020-honda-adv-150-1576741842.jpg",
    price:79000.99,
    amount:0
  },{
    title:"Motor F150",
    description:"Easy to ride",
    image:"https://cdn.trendhunterstatic.com/thumbs/dyson-motorcycle.jpeg",
    price:100000.99,
    amount:0
  }]

  toys = [{
    title:"Action Figure",
    description:"Mint Condition",
    image:"https://c0.wallpaperflare.com/preview/777/794/434/toy-small-cute-figurine.jpg",
    price:14.99,
    amount:0
  },{
    title:"Haku Figurine",
    description:"From Naruto",
    image:"https://www.wallpapertip.com/wmimgs/176-1761882_ninja-young-person-toy-figurine-small-cute-japanese.jpg",
    price:30.99,
    amount:0
  },{
    title:"Itachi Figurine",
    description:"From Naruto",
    image:"https://c0.wallpaperflare.com/preview/204/774/333/ninja-small-cute-japanese.jpg",
    price:19.99,
    amount:0
  },{
    title:"Plushy",
    description:"Hello Kitty",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGvfskLByWDvvECbPC8TrckiHRKsVTKYEvHw&usqp=CAU",
    price:25.99,
    amount:0
  },{
    title:"Minion Toy",
    description:"Slightly Used",
    image:"https://wallpaperaccess.com/full/1804541.jpg",
    price:30.99,
    amount:0
  }];

  electronics = [{
    title:"Xbox One",
    description:"free game added",
    image:"https://wallpaperaccess.com/full/211212.png",
    price:600.99,
    amount:0
  },{
    title:"Headphones",
    description:"Brand New",
    image:"https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    price:37.99,
    amount:0
  },{
    title:"36 in LCD",
    description:"1 year old",
    image:"https://c8.alamy.com/comp/MWY537/smart-tv-and-multimedia-box-with-remote-controller-and-mountain-landscape-wallpaper-on-screen-tv-isolated-on-white-background-MWY537.jpg",
    price:400.99,
    amount:0
  },{
    title:"Rice Cooker",
    description:"2 years old",
    image:"https://media.istockphoto.com/photos/electric-rice-cooker-picture-id187333822?k=6&m=187333822&s=612x612&w=0&h=uJJJDbjpOW3inO20v56lKX59MozwAbcMSoClGf4DBDw=",
    price:70.99,
    amount:0
  },{
    title:"iPhone 8",
    description:"Slightly Used",
    image:"https://i.ytimg.com/vi/ikOeMmQnJ7s/maxresdefault.jpg",
    price:80.99,
    amount:0
  }];

  sports = [{
    title:"BasketBall",
    description:"Brand New",
    image:"https://cdn.wallpapersafari.com/96/10/0STsNl.jpg",
    price:10.99,
    amount:0
  },{
    title:"Soccor Ball",
    description:"Autographed",
    image:"https://wallpaperaccess.com/full/563319.jpg",
    price:19.99,
    amount:0
  },{
    title:"Baseball Bat",
    description:"slight dent",
    image:"https://previews.123rf.com/images/deusexlupus/deusexlupus1509/deusexlupus150900154/44872514-baseball-bat-metal.jpg",
    price:15.99,
    amount:0
  },{
    title:"Tennis Racket",
    description:"ball included",
    image:"https://www.setaswall.com/wp-content/uploads/2017/06/Tennis-Wallpapers-11-2048-x-1536.jpg",
    price:35.99,
    amount:0
  },{
    title:"Hockey Sticks",
    description:"Pair",
    image:"https://i5.walmartimages.com/asr/1003b8b4-a49e-4101-a9b8-936ac78e5d85_1.d317a6a2ad60ac1ec3aeb1add25730c5.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    price:75.99,
    amount:0
  }];

  fashion = [{
    title:"Casio Watch",
    description:"Brand New",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx4EEpvwKgiVFXVYkXzOxxfddTqh-kUJewkw&usqp=CAU",
    price:190.99,
    amount:0
  },{
    title:"Diamond Earrings",
    description:"Seasonal",
    image:"https://wallpaperaccess.com/full/3909700.jpg",
    price:1000.99,
    amount:0
  },{
    title:"Bracelet",
    description:"gold plating",
    image:"https://wallpaperaccess.com/full/2135499.jpg",
    price:200.99,
    amount:0
  },{
    title:"Sunglasses",
    description:"Raybands",
    image:"https://wallpapercave.com/wp/wp3117198.jpg",
    price:500.99,
    amount:0
  },{
    title:"Scarfs",
    description:"1 for 3",
    image:"https://images.unsplash.com/photo-1457545195570-67f207084966?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2NhcnZlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    price:30.99,
    amount:0
  }];
}
