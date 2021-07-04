## Part 1

1. URL shortening system is a system which creates a shorter URL from a longer one (original), which is given to it.

2. Short URL uses less space when they are displayed and there are less possibilities for making mistake when using short URLs.

3. User inputs an original url (long one) which he wants to make shorter. On clicking the buttton, api is called. On the backend, from the url domain is extracted and its popularity (number which counts how many times it is called) is incremented. Then, backend checks if that original url already exists in the database. If so, the whole url object(original and the short one) is returned to the front end. If it doesn't exist, a shorter one is created, inserted in the database and returned to the front end. When user goes to the short link, he is redirected to the original url.
   On the front end, there is a component for inputing the url, which consists of input field and a button, there is a component for outputing a short url, which is a link to the original url, and there is a domain component which is a page where popular domains are displayed. There are two services (url and domain). One of them is doing the work regarding urls (calling api for making them short) and the other one communicates with backend to get popular domains.
   In the database, there are two collections (urls and domains). Url stores mapping of original urls to short ones, and the other one has data about domain and its popularity in the last 24 hours.

4. One of the challanges can be data capacity. Of course, enough storage is needed (depending whether urls are permanent or temporary. In this system it is permanent) and to keep in mind if data models need to be changed in the future.
   If domains are changed, links that have geen generated before will not work anymore.

5. Ideas for advanced features:

- Unique short URLs
- unique per registered user
- store popularity of domains not only for 24 hours, so admins can see which ones are the most popular ever, which in the last month...
- website should be responsive and there can be a mobile version of the system...
