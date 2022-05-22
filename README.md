# Fiable

## Make money biking : https://github.com/rashi2002/fiable

**Contributors:** Naol Denko, Basil Yusuf and Rashi Mathur <br>
**Hackathon:** Gryphhacks <br>
**Date:** May 22nd <br>
**Version:** 1.0 <br>

## Description of the Problem

To create an incentivized rewards app for biking to encourage use of bikes for short distance travel which allows the users to record thier rides, paths, discover their surroundings and helps to reduce pollution.

## Technology Stack
1. React-Native, Stack Navigator, React Hooks
2. Expo CLI, Metro Bundler, Expo Go
3. Google Cloud Platform, Google Maps API, Google Maps Directions API and React-Native-Maps

## All the pages of the app
### 1. Authenticaiton
![image](https://user-images.githubusercontent.com/92009321/169708663-b3d81d5c-aa72-4ba7-9187-45f3bee3d669.png) <br>
### 2. HomeScreen
![image](https://user-images.githubusercontent.com/92009321/169708809-84ac1f15-aeee-43f4-82fc-53b0eade1451.png) <br>
### 3. Map & Recording (Dark Mode)
![image](https://user-images.githubusercontent.com/92009321/169708837-c7373974-9f0a-41db-80c6-fcf002bfb586.png) <br>
### 4. Map & Recording (Light Mode)
![image](https://user-images.githubusercontent.com/92009321/169709032-cffc50da-956b-4c6d-b198-d560fe383d87.png) <br>
### 5. Map & Recording (Real time location tracking)
![image](https://user-images.githubusercontent.com/92009321/169708990-c7521f22-b8dc-4775-938a-972592066d40.png) <br>
### 6. Live Stats
![image](https://user-images.githubusercontent.com/92009321/169708891-3e588d6b-5425-46d0-95ae-9773d9dae21e.png) <br>
### 7. Rewards
![image](https://user-images.githubusercontent.com/92009321/169708968-1761533a-c2fe-473c-9417-5643123a8715.png) <br>
### 8. Settings
![image](https://user-images.githubusercontent.com/92009321/169709068-ceb0c5db-692f-4be7-81ad-5f7159714e9a.png) <br>

## Our Process

1. Initial Idea (Naol): "I was looking into https://www.ycombinator.com/rfs and when I was on there I noticed one of the requests for startups was transportation & housing, so I thought of facilitating some sort of relationship with users and short-distance personal transportation vehicles. After some brainstorming and chatting with friends, I eventually formulated an idea for an incentivized rewards app for biking."
2. Meetings and Setup: Page Count, Authentication and Brainstorming.
3. Convert this to a startup once the hackathon is over

## User Guide

1. Make sure you have npm installed. Otherwise, refer to this link: <br>https://docs.npmjs.com/downloading-and-installing-node-js-and-npm<br>
2. Install expo using your command line <br> ```npm install --global expo-cli```<br>
3. Read this documentation for troubleshooting <br>https://docs.expo.dev/get-started/installation/<br>
4. Clone the repository<br>https://github.com/rashi2002/fiable<br>
5. Make sure you are inside the "fiable" folder
6. Run this command: ```npm i```
7. After the installation is done, install the "Expo Go" app on your phone (App store or Playstore)
8. Run this command: ```expo start```
9. Scan the QR code that is generated
10. Enjoy the app!

## Test Plan: 

## Future Improvements:
1. Redux state management. Normal unidirectional state management is a pain. Every state variable has to be sent every time we are using navigate
2. Functional Polylines to get the direction from any latitude or longitude
3. Make the Google Cloud API key restricted. It should be in a .env file
4. Design Improvement 1: Make fiable$ border thiner
5. Design Improvement 2: Border radius for fiable$, sign out & change password

