#  Idea Box  
> A [Front-End Project](https://github.com/lbmerchant93/ideabox-boilerplate) by [Lucas Merchant](https://github.com/lbmerchant93) and [Ben Prat ](https://github.com/benjaminprat) 
> * Project Manager [Kayla Wood ](https://github.com/kaylaewood) 

## Contents
1. [Overview and Goals](#overview)
1. [ Prerequisites & Technologies](#prerequisites)
1. [Features](#features)
1. [Challenges](#challenges)
1. [Wins](#wins)


## Overview 
We are Module One students at Turing School of Software and Design. In this project we were tasked to build an application allowing users to create and store ideas. Additional functionality includes the ability to favorite an idea, delete an idea and filter through ideas. Each idea is stored locally on the user's machine, allowing them to persist between sessions. 

### Goals

Learning goals, summarized below, are taken from the  project spec.

``` Markdown
- Write clean HTML & CSS to match provided comp
- Implement client-side data persistence using localStorage and JSON
- Understand the importance of having a separate data model and DOM model
- Incorporate and iterate over arrays to filter what is displayed
- Craft code with clean style
  - small functions 
  -  DRY (Don't Repeat Yourself) 
  -  SRP (Single Responsibility Principle) 
```






---
 ## Prerequisites 

None. This project was developed on macOS Catalina 10.15.6 and tested in Chrome browsers (Version 85.0.4183.83), but does not require users to install any software or further functionality.


 ## Technologies

  - HTML
  - CSS
  - JavaScript
  - JSON (data interchange format)
  - Git
  -  [GitHub Pages site](https://lbmerchant93.github.io/ideabox-boilerplate/)


 >[Back to Top](#idea-box)

---
## Features

+ [Desktop Layout](#desktop-layout)
+ [Create and Save Idea](#create-and-save-idea)
+ [Favorite  Idea](#favorite-idea)
+ [Delete  Idea](#delete-idea)
+ [Page Refresh ](#page-refresh)
+ [Show Starred Ideas](#show-starred-ideas)
+ [Search Ideas](#search-ideas)

>[Back to Top](#idea-box)


## Desktop Layout

On initial load, the page has a sidebar menu laid out statically on the left. The idea creation form and displayed ideas area are stacked on the right. The page will have no text in any input field and the save button will be disabled with a gray background. The displayed ideas area is empty. 

![IdeaBox Desktop Layout](https://media.giphy.com/media/dDZJDiHR1KpUJHv9le/giphy.gif "IdeaBox Desktop Layout")

> [Back to Features](#features)

## Create and Save Idea

To create an idea, the user must have text in both the title and body input fields. If either input field is empty, the "Save" button is disabled.  If there is an entry in either idea creation input field the cursor changes to a pointer when hovered over the "Save" Button.

![IdeaBox Enable Save](https://media.giphy.com/media/2OoBukYz8YZpNxb3Sl/giphy.gif "Enable save")

Clicking "Save" will
  - Capture the user input
  - Create a new idea card with the corresponding "Title" and "Body" input 
  - Save the data to local memory
  - Display the card in the idea grid
  - Clear the "Title" and "Body" input fields

![Save Idea](https://media.giphy.com/media/i2PKIeRLAjWcOJldA0/giphy.gif "Save Idea")



These ideas will persist through user sessions.

> [Back to Features](#features)

## Favorite Idea
+ To favorite an idea, the user clicks the star in the top left corner of the idea card. The star will then turn red, indicating that the idea has been favorited. The user can undo this action by clicking the star again, which removes red from the star. 

![Favorite Idea](https://media.giphy.com/media/bvqQuP8g7BebPuvlTK/giphy.gif "Favorite Idea")

>[Back to Features](#features)
## Delete  Idea

+  To delete an idea, the user clicks the X in the top right corner of the idea card. The X turns red and the idea card is removed from the display and permanently deleted. This change will persist even if the page is reloaded.

![Delete Idea](https://media.giphy.com/media/LGW7HZMEkmyhFfvDxI/giphy.gif "Delete Idea")

>[Back to Features](#features)

## Page Refresh

+ When the user creates a new card and refreshes the page, the idea card is still on the list.
 
![New card refresh](https://media.giphy.com/media/LGW7HZMEkmyhFfvDxI/giphy.gif "New card refresh")

+ When the user creates two cards, deletes one, then reloads the page, the card that was not deleted will persist on the page.

![Card Persist](https://media.giphy.com/media/FUqGjg34KpnW4qdsGz/giphy.gif "Card persist")
+ When the user favorites an idea then refreshes the page, the idea card is still favorited as indicated by the red star. 
  >[Back to Features](#features)
  >
![Favorite Persist](https://media.giphy.com/media/gmzc3w0lgj45Dv0aBB/giphy.gif "Favorite persist")
## Show Starred Ideas
+ When the user clicks the "Show Starred Ideas" button, only favorited ideas display on the page.
+  When "Show Starred Ideas" button is clicked, the button text will change to "Show All Ideas".

![Show starred ideas](https://media.giphy.com/media/fmoeUHPDCC2G5l8hma/giphy.gif "Show starred ideas")


+ When the user clicks "Show Starred Ideas" followed by "Show All Ideas", all cards will display, whether a favorite or not.

![Show all ideas](https://media.giphy.com/media/7DxBvcGHWITSTltchG/giphy.gif "Show all ideas")


>[Back to Features](#features)


## Search Ideas

+ When the user enters a letter or phrase into the 'Search ideas' bar, they only see cards with a title or body that matches their input. 

![Search ideas](https://media.giphy.com/media/bvS4Q0tytexc7lNpIM/giphy.gif "Search ideas")

+ Anytime the user clears the search bar with  backspace and delete, all cards are displayed since no search parameters are provided. 

![Backspace](https://media.giphy.com/media/CDEtCJB7V4OdiLhZUI/giphy.gif "Backspace")
>[Back to Features](#features)
---

 ## Challenges  
 
 + Initial comp was challenging with a lot of effort, eyeballing and trial and error.

+ Understanding and implementing client-side data persistence using localStorage and JSON.

>[Back to Top](#idea-box)
---
 ## Wins
 
  + “Show Starred Screen” functionality.  Updates instantly with a click to unfavorite or delete an idea.
  +  Search bar functionality. Updates instantly upon each key press without having to delete from an array.

  
  
>[Back to Top](#idea-box)
