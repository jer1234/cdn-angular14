# Angular 14 - CDN Project

## Description

This is a Angular 14 specially created for CDN Project. A simple app with UI and interact with backend APIs.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)


## Installation

Prerequisite (recommended) ,You need :

`Angular CLI: 14.2.12
 Node: 16.13.0
 Package Manager: npm 8.1.0`

To install and run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/jer1234/cdn-angular14.git`
2. Navigate to the project directory: `cd  cdn-angular14`
3. Install dependencies: `npm install  or npm install --force`
4. Navigate to `/src/environments/environment.ts` and edit below variable:
    - `apiUrl: ` with backend API url
6. Start the development server: `ng serve`
7. Open your browser and visit `http://localhost:4200` to see the running application.

## Usage

Once the project is running, you can perform the following actions:

- Create an user
  ![image](https://github.com/jer1234/cdn-angular14/assets/44467321/84138b00-fc2d-4cce-9056-606e67d775d8)

- Edit user details
- Delete user
  ![image](https://github.com/jer1234/cdn-angular14/assets/44467321/9331c09f-ad17-4832-aa3b-929224dbfb52)

- View all user profile
  ![image](https://github.com/jer1234/cdn-angular14/assets/44467321/0bdf40e6-2295-484b-becd-c7a2e5d3c9ab)

-Empty listing
  ![image](https://github.com/jer1234/cdn-angular14/assets/44467321/27976449-9fae-4d12-b9fb-32be324a1dde)


## Deployment

To deploy this Angular project to a production environment, follow these steps:

1. Build the project : `ng build`
2. Copy the generated files from the `dist` directory to your web server or hosting platform.
3. Configure your web server to serve the Angular application.


## Additional Resources

- Angular Official Documentation: [https://angular.io/docs](https://angular.io/docs)
- Angular Style Guide: [https://angular.io/guide/styleguide](https://angular.io/guide/styleguide)

- Other libraries used:
  ` @sweetalert2/ngx-sweetalert2 : ^12.0.2
    bootstrap: ^5.0.0
    lottie-web: ^5.12.2
    ngx-chips: ^3.0.0
    ngx-lottie: ^9.1.0`

