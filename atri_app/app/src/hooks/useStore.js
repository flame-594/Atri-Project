import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Navbar": {
      "callbacks": {}
    },
    "NavbarFlex": {
      "callbacks": {}
    },
    "NavbarFlex1": {
      "callbacks": {}
    },
    "NavbarLinks": {
      "callbacks": {}
    },
    "NavbarFlex2": {
      "callbacks": {}
    },
    "NavbarDiv": {
      "callbacks": {}
    },
    "Flex67": {
      "callbacks": {}
    },
    "Home": {
      "callbacks": {}
    },
    "HomeFlex": {
      "callbacks": {}
    },
    "HomeFlex1": {
      "callbacks": {}
    },
    "HomrFlex3": {
      "callbacks": {}
    },
    "HomeFlex2": {
      "callbacks": {}
    },
    "Category": {
      "callbacks": {}
    },
    "CategoryMenuFlex": {
      "callbacks": {}
    },
    "CategoryButtons": {
      "callbacks": {}
    },
    "CategoryMenuOptions": {
      "callbacks": {}
    },
    "OptionsFlex1": {
      "callbacks": {}
    },
    "Option1": {
      "callbacks": {}
    },
    "Option2": {
      "callbacks": {}
    },
    "OptionsFlex2": {
      "callbacks": {}
    },
    "Option3": {
      "callbacks": {}
    },
    "Option4": {
      "callbacks": {}
    },
    "About": {
      "callbacks": {}
    },
    "AboutUs": {
      "callbacks": {}
    },
    "AboutFlex2": {
      "callbacks": {}
    },
    "AboutFlex7": {
      "callbacks": {}
    },
    "AboutFlex1": {
      "callbacks": {}
    },
    "AboutFlex3": {
      "callbacks": {}
    },
    "AboutFlex4": {
      "callbacks": {}
    },
    "AboutFlex5": {
      "callbacks": {}
    },
    "AboutFlex6": {
      "callbacks": {}
    },
    "Menu": {
      "callbacks": {}
    },
    "MenuFlex1": {
      "callbacks": {}
    },
    "MenuFlex2": {
      "callbacks": {}
    },
    "MenuFlex3": {
      "callbacks": {}
    },
    "MenuFlex6": {
      "callbacks": {}
    },
    "ItemFlex1": {
      "callbacks": {}
    },
    "ItemPrice1": {
      "callbacks": {}
    },
    "ItemFlex2": {
      "callbacks": {}
    },
    "ItemPrice2": {
      "callbacks": {}
    },
    "MenuFlex7": {
      "callbacks": {}
    },
    "ItemFlex3": {
      "callbacks": {}
    },
    "ItemPrice3": {
      "callbacks": {}
    },
    "ItemFlex4": {
      "callbacks": {}
    },
    "ItemPrice4": {
      "callbacks": {}
    },
    "MenuFlex4": {
      "callbacks": {}
    },
    "MenuFlex8": {
      "callbacks": {}
    },
    "ItemFlex5": {
      "callbacks": {}
    },
    "ItemPrice5": {
      "callbacks": {}
    },
    "ItemFlex": {
      "callbacks": {}
    },
    "ItemPrice6": {
      "callbacks": {}
    },
    "MenuFlex9": {
      "callbacks": {}
    },
    "ItemFlex7": {
      "callbacks": {}
    },
    "ItemPrice7": {
      "callbacks": {}
    },
    "ItemFlex8": {
      "callbacks": {}
    },
    "ItemPrice8": {
      "callbacks": {}
    },
    "MenuFlex5": {
      "callbacks": {}
    },
    "BurgerSpan": {
      "callbacks": {}
    },
    "Burger_Span": {
      "callbacks": {}
    },
    "SpanFlex1": {
      "callbacks": {}
    },
    "SpanFlex2": {
      "callbacks": {}
    },
    "Client": {
      "callbacks": {}
    },
    "Clients": {
      "callbacks": {}
    },
    "ClientsFlex1": {
      "callbacks": {}
    },
    "ClientsFlex2": {
      "callbacks": {}
    },
    "ClientsFlex3": {
      "callbacks": {}
    },
    "ClientFlex3": {
      "callbacks": {}
    },
    "ClientFlex4": {
      "callbacks": {}
    },
    "Flex13": {
      "callbacks": {}
    },
    "Articles": {
      "callbacks": {}
    },
    "ArticlesFlexBox": {
      "callbacks": {}
    },
    "ArticleFlexHeading": {
      "callbacks": {}
    },
    "ArticlesSection": {
      "callbacks": {}
    },
    "ArticleFlex1": {
      "callbacks": {}
    },
    "ArticleFlex2": {
      "callbacks": {}
    },
    "ArticleFlexBox1": {
      "callbacks": {}
    },
    "ArticleFlex3": {
      "callbacks": {}
    },
    "ArticleFlex4": {
      "callbacks": {}
    },
    "ArticleFlexBox2": {
      "callbacks": {}
    },
    "ArticleFlex5": {
      "callbacks": {}
    },
    "ArticleFlex6": {
      "callbacks": {}
    },
    "Booking": {
      "callbacks": {}
    },
    "BookingFlexbox": {
      "callbacks": {}
    },
    "BookingFlex1": {
      "callbacks": {}
    },
    "ContacFlex1": {
      "callbacks": {}
    },
    "ContactFlex2": {
      "callbacks": {}
    },
    "ContactFlex3": {
      "callbacks": {}
    },
    "BookingFlex2": {
      "callbacks": {}
    },
    "BookingFlex3": {
      "callbacks": {}
    },
    "BookingFormFlex4": {
      "callbacks": {}
    },
    "BookingFormFlex3": {
      "callbacks": {}
    },
    "FormDate": {
      "callbacks": {}
    },
    "FormSchedule": {
      "callbacks": {}
    },
    "BookingFormFlex2": {
      "callbacks": {}
    },
    "FormPhone": {
      "callbacks": {}
    },
    "FormLocation": {
      "callbacks": {}
    },
    "BookingFormFlex1": {
      "callbacks": {}
    },
    "FormName": {
      "callbacks": {}
    },
    "FormEmail": {
      "callbacks": {}
    },
    "BookingFormMessage": {
      "callbacks": {}
    },
    "Follo": {
      "callbacks": {}
    },
    "Follow": {
      "callbacks": {}
    },
    "FollowFlex1": {
      "callbacks": {}
    },
    "FollowFlex2": {
      "callbacks": {}
    },
    "Flex3": {
      "callbacks": {}
    },
    "FollowFlex3": {
      "callbacks": {}
    },
    "FollowFlex5": {
      "callbacks": {}
    },
    "FolowFlex5": {
      "callbacks": {}
    },
    "Footer": {
      "callbacks": {}
    },
    "FooterFlex": {
      "callbacks": {}
    },
    "FooterFlex1": {
      "callbacks": {}
    },
    "RatingFlex": {
      "callbacks": {}
    },
    "InstagramLink3": {
      "callbacks": {}
    },
    "InstagramLinkFlexBox": {
      "callbacks": {}
    },
    "InstagramLinkFlex2": {
      "callbacks": {}
    },
    "InstagramLinkFlex1": {
      "callbacks": {}
    },
    "FooterFlex2": {
      "callbacks": {}
    },
    "PageList": {
      "callbacks": {}
    },
    "UtilityList": {
      "callbacks": {}
    },
    "Sponsors": {
      "callbacks": {}
    },
    "SponsorFlex": {
      "callbacks": {}
    },
    "SponsorFlex1": {
      "callbacks": {}
    },
    "SponsorFlex2": {
      "callbacks": {}
    },
    "SponsorFlex3": {
      "callbacks": {}
    },
    "Logo": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link3": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link4": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link5": {
      "custom": {
        "text": "Cart"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link1": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link2": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "NavbarButton1": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "NavbarButton2": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "MenuIcon": {
      "custom": {
        "open": true,
        "iconHeight": 24,
        "iconWidth": 24
      },
      "callbacks": {}
    },
    "HomeText1": {
      "custom": {
        "text": "The best place to"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "HomeText2": {
      "custom": {
        "text": "eat burgers in LA."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "HomeText3": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "HomeButton1": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "HomeButton2": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "HomeImage": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/home_Img.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "CategoryMenuText": {
      "custom": {
        "text": "Browse our menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "CategoryMenuButton1": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "CategoryMenuButton2": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "CategoryImage1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/category1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "OptionName1": {
      "custom": {
        "text": "Breakfast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Description1": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ExploreOption1": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "CategoryImage2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/category2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "OptionName2": {
      "custom": {
        "text": "Main Dishes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Description2": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ExploreOption2": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "CategoryImage3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/category3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "OptionName3": {
      "custom": {
        "text": "Drinks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Description3": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ExploreOption3": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "CategoryImage4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/category4.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "OptionName4": {
      "custom": {
        "text": "Desserts"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Description4": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ExploreOption4": {
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "AboutTextBox5": {
      "custom": {
        "text": "About us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "AboutTextBox6": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "AboutTextBox7": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper odio egestas id pulvinar consectetur elit tortor non hac pellentesque lacus donec accumsan quisque ultricies adipiscing mauris tortor cras est eu accumsan mauris."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "AboutButton1": {
      "custom": {
        "text": "About us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "AboutButton2": {
      "custom": {
        "text": "Join our team"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "AboutImage1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "AboutTextBox1": {
      "custom": {
        "text": "Come and visit us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "AboutImage2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "AboutTextBox2": {
      "custom": {
        "text": "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "AboutImage3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "AboutTextBox3": {
      "custom": {
        "text": "(414) 857 - 0107"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "AboutImage4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about4.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "AboutTextBox4": {
      "custom": {
        "text": "losangeles@restaurantex.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "MenuTextBox1": {
      "custom": {
        "text": "Browse our Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "MenuTextBox2": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "MenuImage1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/menu1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ItemName1": {
      "custom": {
        "text": "Classic Burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ItemText1": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "PriceText1": {
      "custom": {
        "text": "$10.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "MenuImage2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/menu2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ItemName2": {
      "custom": {
        "text": "Chocolate Milkshake"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ItemText2": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "PriceText2": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "MenuImage3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/menu3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ItemName3": {
      "custom": {
        "text": "Classic Fries"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ItemText3": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "PriceText3": {
      "custom": {
        "text": "$ 5.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "MenuImage4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/menu4.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ItemName4": {
      "custom": {
        "text": "Pancakes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ItemText4": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "PriceText4": {
      "custom": {
        "text": "$ 8.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "MenuImage5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/menu5.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ItemName5": {
      "custom": {
        "text": "Ice cream"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ItemText5": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "PriceText5": {
      "custom": {
        "text": "$ 3.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "MenuImage6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/menu6.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ItemName6": {
      "custom": {
        "text": "Chicken Burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ItemText6": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "PriceText6": {
      "custom": {
        "text": "$ 9.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "MenuImage7": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/menu7.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ItemName7": {
      "custom": {
        "text": "Egg Toast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ItemText7": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "PriceText7": {
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "MenuImage8": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/menu8.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ItemName8": {
      "custom": {
        "text": "Regular Soda"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ItemText8": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "PriceText8": {
      "custom": {
        "text": "$ 1.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "MenuButton2": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "MenuButton1": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "SpanImage1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Burger%20span.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "SpanTextBox1": {
      "custom": {
        "text": "Taste the most delicious burger in Los Angeles, CA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "SpanTextBox2": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum. Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "SpanButton2": {
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "SpanButton1": {
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ClientsTextBox1": {
      "custom": {
        "text": "1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ClientsTextBox2": {
      "custom": {
        "text": "What our clients say"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ClientsTextBox3": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel1": {
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel2": {
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel3": {
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ClientsImage1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ClientsImage2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ClientsImage3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/rating.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "lientsTextBox3": {
      "custom": {
        "text": "\"You must try these burgers!\""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ClientsTextBox4": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ClientsImage4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/client1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ClientsTextBox5": {
      "custom": {
        "text": "Matt Cannon "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ClientsTextBox6": {
      "custom": {
        "text": "San Diego, CA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ClientsButton1": {
      "custom": {
        "text": "Order Online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ClientsButton2": {
      "custom": {
        "text": "Book A Table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "MainHeading": {
      "custom": {
        "text": "Our articles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ArticlesLink": {
      "custom": {
        "text": "Browse our articles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ArticleImage1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ArticleDate1": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ArticleName1": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ArticleText1": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipisc"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ArticleImage2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ArticleDate2": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ArticleName2": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ArticleImage3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ArticleDate3": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ArticleName3": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ArticleImage4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article4.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ArticleDate4": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ArticleName4": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ArticleImage5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article5.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ArticleDate5": {
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "ArticleName5": {
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "BookingText1": {
      "custom": {
        "text": "Book your table now"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "BookingText2": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox88": {
      "custom": {
        "text": "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "BookingImage1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox89": {
      "custom": {
        "text": "(414) 857 - 0107"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "BookingImage2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox90": {
      "custom": {
        "text": "losangeles@restaurentex.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "BookingImage3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/about4.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "BookingFormButton": {
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBoxNote": {
      "custom": {
        "text": "Add a note"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "InputNote": {
      "custom": {
        "value": "",
        "placeholder": "PlaceAholder TextDo you have any note for us??"
      },
      "callbacks": {}
    },
    "TextBoxDate": {
      "custom": {
        "text": "Date"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "InputDate": {
      "custom": {
        "value": "",
        "placeholder": "Day and Month"
      },
      "callbacks": {}
    },
    "TextBoxSchedule": {
      "custom": {
        "text": "Schedule"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "InputSchedule": {
      "custom": {
        "value": "",
        "placeholder": "Ex. 2:00PM"
      },
      "callbacks": {}
    },
    "TextBoxPhone": {
      "custom": {
        "text": "Phone"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "InputPhone": {
      "custom": {
        "value": "",
        "placeholder": "(123) 456-789"
      },
      "callbacks": {}
    },
    "TextBoxInput": {
      "custom": {
        "text": "Location"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "InputLocation": {
      "custom": {
        "value": "",
        "placeholder": "Ex. Los Angeles"
      },
      "callbacks": {}
    },
    "TextBoxName": {
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "InputName": {
      "custom": {
        "value": "",
        "placeholder": "John Carter"
      },
      "callbacks": {}
    },
    "TextBoxEmail": {
      "custom": {
        "text": "Email Address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "InputEmail": {
      "custom": {
        "value": "",
        "placeholder": "example@email.com"
      },
      "callbacks": {}
    },
    "MessageTextBox": {
      "custom": {
        "text": "The email is sent successfully"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "FollowTextBox1": {
      "custom": {
        "text": "Follow us on Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "FollowButton": {
      "custom": {
        "text": "Follow Us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "FollowImg2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Follow2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "FollowImg1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Follow1.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "FollowImage3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Follow3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "FollowImage4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Follow4.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Follow5.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "FollowImage6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Follow6.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "FooterLogoImage": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "FooterTextBox1": {
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "RatingStar1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "RatingStar2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "RatingStar3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "RatingStar5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "RatingStar4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "FooterTextBox2": {
      "custom": {
        "text": "Follow us on Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image54": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Follow5.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "InstagramLink4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Follow6.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "InstagramLink1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Follow3.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "InstagramLink2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/article2.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "PageHeading": {
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Page1": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Page2": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Page3": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Page4": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Page5": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Page6": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Page7": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "UtilityHeading": {
      "custom": {
        "text": "Utility"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Utility5": {
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Utility6": {
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Utility7": {
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Utility4": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Utility1": {
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Utility3": {
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Utility2": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "SponsorText": {
      "custom": {
        "text": "Order from your favorite app today!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "SponsorImage1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/sponsor1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "SponsorImage2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/sponsor2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "SponsorImage4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/sponsor4.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "SponsorImage3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/sponsor3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
