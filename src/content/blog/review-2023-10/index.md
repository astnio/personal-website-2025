---
title: 'Month in Review: October 2023'
slug: review-oct-2023
description: 'My first monthly review for what I completed in October, and my plans moving forward.'
date_published: 2023-11-01
image: cover.jpg
topic: Personal Review
category: Monthly Review
tags: ['programming', 'json', 'college', 'life', 'project']
---

Today is the first day of November, and I thought this would be a good opportunity get started on a monthly review. I have always wanted to get into the habit of this, along with weekly reviews. Regarding what happened this month though, I feel like I did a lot, but don't have much to show for it.

## How my Blogging Went

For my blog, I only got about 4 posts out from September 27th to October 27th. I'm also not sure if I should count the first two, but I probably should. At this point anything posted just to get me in the habit of writing is probably better than nothing. In the future though, I would like a more structured approach. I mentioned in previous posts that I wanted to do weekly reviews and discuss more of what I have been learning and what I'm planning on a weekly basis, however that didn't pan through much in October. I still don't really have a plan for it, and at this point I think I should only stick to a loose schedule. This is because my schedule is a bit hectic right now, so just fitting in any time where I can is all I can really do right now. In the upcoming months I will be working to fix this, though.

## Blogging Goals

In the future, I actually want to do more tutorials and guides, and make YouTube videos along with them. I have been learning a lot recently, and I think I can at least teach the basics of what I've learned. This will be difficult to accomplish, though, and it will take quite a bit of time. If I can just develop a plan and some good habits I'm sure I can do it.

## How Classes Went

As I may have mentioned in previous posts, I am currently taking college courses for web development. It has been a struggle, as my time has been quite split. Finding time between classes and work makes it difficult to find time for my personal projects, and when I get invested in my personal projects it sometimes takes away from my classes, which means I end up working some homework overtime to get things done by the deadline. However, my grades are doing great so far! This will also be my final quarter before graduating, so I likely will have plenty of time to work on some of my projects before landing a job in or after January.

## Class Goals

I don't have any specific goals for my classes. Right now my grades are looking pretty good, and I get everything in on time. My group projects have been doing quite fairly. I don't like how much time my classes eat up, but I can't do much about that, so overall I suppose I can say that I'm satisfied with my class goals right now.

## Personal Projects

The only project I have really been working since mid August is my Ecommerce site. This is going very slowly, but only because I keep increasing the scope of the project. I probably could have "finished" it about three weeks ago, but there are a lot of things I wanted to implement first. In fact, one serious hurdle I have been facing is the way in which product options are selected. This has been taking me a long time because not only have I had to redo the data structure of my products, but I also have to refactor a lot of my code and implement new ways of handling the options.

Before I get too involved, I will explain my products data structure:

Right now I have all my products stored in a JSON file, and looks like this:

```json
"productId": 0,
"brand": "Placeholder Inc.",
"title": "extra Soft T-Shirt",
"description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
"dateReleased": "2023-09-23",
"categories": ["T-Shirts", "Tops", "Womens"],
"options": [
   {
   "optionId": 0,
   "price": 34.95,
   "quantity": 10,
   "imageSet": ["item0-0"],
   "attributes": [
       {
       "attributeId": 0,
       "name": "color",
       "type": "radio",
       "value": "white",
       "radioVisual": {
           "type": "image",
           "value": "option_bg_02"
       }
       },
       {
       "attributeId": 3,
       "name": "material",
       "type": "radio",
       "value": "cotton",
       "radioVisual": {
           "type": "image",
           "value": "option_bg_02"
       }
       },
       {
       "attributeId": 1,
       "name": "size",
       "type": "select",
       "value": "small"
       },
       {
       "attributeId": 2,
       "name": "style",
       "type": "select",
       "value": "crew neck"
       }
   ]
   },
   {
   "optionId": 1,
   "price": 34.95,
   "quantity": 0,
   "imageSet": ["item0-0"],
   "attributes": [
       {
       "attributeId": 0,
       "name": "color",
       "type": "radio",
       "value": "white",
       "radioVisual": {
           "type": "image",
           "value": "option_bg_02"
       }
       },
       {
       "attributeId": 3,
       "name": "material",
       "type": "radio",
       "value": "silk",
       "radioVisual": {
           "type": "image",
           "value": "option_bg_02"
       }
       },
       {
       "attributeId": 1,
       "name": "size",
       "type": "select",
       "value": "medium"
       },
       {
       "attributeId": 2,
       "name": "style",
       "type": "select",
       "value": "crew neck"
       }
   ]
   }
]
```

That probably looks like a lot, and it only gets longer. The reason I have it structured like this is because of my idea that a "Product" is more like a container to hold items of similar aspects. In this case, the similarities would be the Title, Description, Categories, and Brand. If a Product is a container for items, then the items, or Options, are considered by what you might be able to physically hold and sort. For instance, Option 1 above would be an Extra Soft T-Shirt that is White, made of Silk, size Medium, and a Crew Neck. This would be physically different from any other item of the same type, but just a different color or size. Because of this, I had to create every option with its own set of attributes to represent what a "real" item would be.

The above example is also from my most recent rework of the structure. Before, I had a lot of these attributes hard coded like this:

```json
"productId": 0,
"brand": "Placeholder Inc.",
"title": "Extra Soft T-Shirt",
"description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
"dateReleased": "2023-09-23",
"categories": ["T-Shirts", "Tops", "Womens"],
"options": [
    {
    "optionId": 69,
    "optionStyle": "White",
    "optionSize": "S",
    "price": 34.95,
    "inStock": 10,
    "imageName": "item0-0",
    "optionVisual": {
        "type": "image",
        "value": "option_bg_02"
    }
    }
]
```

The issue with the above is the hard-coded `optionStyle`, `optionSize`, and `optionVisual`. This is an issue because it does not scale automatically. With the newer structure, I have an algorithm that simply looks at every attribute, and combines together the similar ones by their `name` and `type`, and determines if they should be a drop down by if the `type` is `radio` or `select`.

While this is a more scalable approach, it has also become much more complicated. One of the bigger issues was because I have these generated using web components, which are then nested in another web component, which is nested in another web component. I had to learn about custom events in order to "bubble up" information from the children components up to the parent components.

I still have not completely solved this issue. Right now I can determine the option selected based on the attributes, and that works fine and dandy. The real issue is that not every option is available in every attribute. For instance, you can have a T-Shirt in Blue, Medium, and Cotton. All medium shirts may not be available in Red, however. But if you have a Blue, Medium shirt selected, you can still select Red as a color. What I want is to disable the Red option while Medium is currently selected, and display a hint that says "Not available in chosen size!". Once size or color changes, then the option would be enabled again.

Admittedly I have been trying to use some AI to help with this. Copilot and Chat GPT have been quite useful, and explain things pretty well, but they are not very good at helping me find solutions to my code. They do provide some good starts when I get stuck, though. I probably should not rely too much on AI however, as it likely won't be allowed in a real job environment.

Overall, though, that has all I have been working at recently. I currently have about 207 commits for October. From August to September I had only 81. I'm not sure how many hours exactly I have been working on it, though.

Anyway, I got a bit caught up talking about what I have been doing for my project. I will get into it more once I'm done, as I want to discuss how my workflow was, my mistakes made, and what I would do different in the future.

If you want to see what my project looks like right now, check out it's repo on [GitHub](https://github.com/gmni-dev/Simple-Ecommerce-Frontend).

## Future Goals

For the rest of November, I realistically would not expect more than 3-4 posts. This past month has shown me it is more difficult than I anticipated to get these out. I likely just need a plan to think things through better, but with my hectic schedule it has been a challenge. I will work to improve that, though, and I will go over how that went in December.

Right now I am mostly focused on my classes. Midterms are wrapping up, and I finish on December 8th. Halfway through, just one more half to go.

I think I will wrap up things here. Thank you for reading, and stay tuned for more!

> Photo by [Marta Wave](https://www.pexels.com/photo/fallen-leaf-on-wooden-surface-5876222/)
