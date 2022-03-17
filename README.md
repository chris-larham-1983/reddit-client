# Table of Contents

* [General Information](#general-information)
* [Project Structure](#project-structure)
* [Wireframe](#wireframe)
* [Technologies](#technologies)
* [Unit Test Results](#unit-test-results)
* [Using the App](#using-the-app)

***

## General Information

This is my solution to the **Codecademy** portfolio project entitled *Reddit Client*, wherein I had to design 
a **React App** that allows users to navigate to topics of interest provided by the Reddit JSON API.

The app had to satisfy the following requirements:

- be built using React and Redux
- be hosted on GitHub
- include a README that documents the project
- include unit tests
- scale well across devices of differing screen size
- work well across different browsers
- accessible at a URL
- Users see an initial view of the data when visiting the app
- Users can search the data using terms
- Users can filter the data based on predefined categories
- include a cohesive design system
- include animations and transitions

I also chose six topics of interest in addition to those provided by the Reddit JSON API - and designed custom 
navigation buttons for them - in order to give the User a wider selection of interesting threads. I practised 
GitHub skills by opening two 'issues' with my initial upload, defining 'milestones' for issue completion, and 
then closing out the issues.

Another criterion for this project was that the app should achieve scores of 90+ on Lighthouse (https://web.dev/measure/). 
This project achieved scores of 100 (**Best Practices**), 98 (**Accessibility**), 92 (**SEO**), and 65 (**Performance**). 
The *Performance* score was lower because of the format of the images returned by the Reddit JSON API - the report 
suggested that WebP and AVIF image formats should be used, rather than the PNG images served by the API. Obviously this is 
something that I do not control.

![Lighthouse Audit][lighthouse_audit]

[lighthouse_audit]: src/images/lighthouse-audit.PNG

***

## Project Structure

![Project Structure][project_structure]

[project_structure]: src/images/reddit-client-structure.png

***

## Wireframe

Drawn by hand:

![Wireframe][wireframe]

[wireframe]: src/images/reddit-client-wireframe.png

Created using the InVision wireframing app:

![WireframeII][wireframeII]

[wireframeII]: src/images/reddit_client_wireframe.png

***

## Technologies
  
I wrote this **React App** using the following technologies:

- *ReactJS*
- *JSX*
- *Redux*
- *HTML*
- *CSS*
- *JavaScript*
- *Jest*
- *Git and GitHub*
- *Command line and file navigation*
- *Wireframing*
  
***

## Unit Test Results

![Unit Test Results 1 of 2][unit_test_results_1_of_2]

[unit_test_results_1_of_2]: src/images/redditSlice-unit-tests.PNG

![Unit Test Results 2 of 2][unit_test_results_2_of_2]

[unit_test_results_2_of_2]: src/images/subredditSlice-unit-tests.PNG

***

## Using the App

This app can be viewed and used at:

- https://codecademy-reddit-client.surge.sh
- https://chris-larham-1983.github.io/reddit-client/
