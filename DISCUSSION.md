# Discussion

Here are my first code audit issues before I start the assessment. I doubt that I'll tackle all of these.

## UI/UX Issues

1. I really dislike lists in tables, so two options for replacements is either converting the table to cards to re-organize the information (BCBS "Find a Doctor" search works this way) or to use chips in the column.
2. If the search bar is a quick filter, then why is there even a search button or reset button? Typically those are available when you use a variety of filter options and filling out a more robust search.
3. There's no binding of the search state to the URL. Considering this is a tool used to find advocates, then it's safe to assume that people are going to share links to lists of advocates.
4. There's no formatting of data in the datatable, especially phone numbers and the specialty list is unsorted
5. There's no general sorting of the list of advocates

## Code Issues

1. Where is the type safety??
2. There's no pagination/infinite scroll, so we're reading the entire table into the UI every time
3. No indexing on the advocates table
4. No caching on the backend
5. Storing the list of specialties as a jsonb column instead of a table
6. The onChange function is crazy and the onClick and the onChange function both set the filtered advocates
7. Filtered advocates is a computed property based on the state of the API call and the filter, it is not state
8. Not using the built in NextResponse
9. Not using a library for HTTP calls in the front-end
10. Not having the <main> tag in the layout file
11. Returning a dummy db when the .env file is missing the necessary url
12. Not composing the DB URL (what do you do if you need to recycle the password)

# Summary

Overall, this was an incredibly fun take home. I haven't used Next.js with the new App Router and I used to use tRPC with it, so I aimed to have a similar experience and that's why I added ts-rest. Outside of ts-rest and Next.js, this is a very similar stack of technology I use on a side project (tanstack, drizzle, shadcn, tailwind) so I was able to really enjoy building this. I lost track of time with this assessment, and I definitely went above two hours, but this was awesome to work on and I aimed to impress.

Disclaimer: This was not built with _any_ AI tools.

## Tech Choices

1. Shadcn - This is a UI library that's super tweakable, composable, and looks great out of the box. There's going to be a lot of shadcn websites in our future, and I love that you can break from the core theme super easily. I used the ocean breeze theme from [tweakcn](https://tweakcn.com/).
2. TS-Rest - I chose TS-Rest to demonstrate API knowledge and route features while still giving me strong type definitions and an RPC client to use in the front-end. If I could've split the API to a separate server, I would've chosen [Hono](https://hono.dev/) and a [openapi-ts](https://openapi-ts.dev/) client. TS-Rest's contract is really compelling and similar to the [Zod OpenAPI](https://hono.dev/examples/zod-openapi) package and plenty of other routers for backends these days. In general, this API layer will scale well in this Next.js app for future features. The built in Tanstack Query module is a huge plus.
3. Tanstack Query - Tanstack Query speaks for itself, it takes care of all the weirdness of data fetching in React and all of the edge cases you can run into with rolling your own useEffects plus a ton of features.
4. Tanstack Table - I chose Tanstack Table to keep a consistent ecosystem, but AgGrid would've also worked here as well. I would've probably wasted a lot of time theming AgGrid to match Tanstack Table especially given that shadcn supports Tanstack Table out of the box.

### Next Steps

1. Caching - Currently, we're relying on Next.js's default caching behavior which is alright. I would rather either really lean into Next.js's `unstable_cache` or use something really battle tested like [keyv](https://keyv.org/docs/). I'd probably use this to cache database queries with a tagging system. Since this application doesn't have another server writing data to the database, we can keep a cache without a lifetime. Finally, since the /api/seed route is the only thing that writes data, cache invalidation is pretty easy.
2. Server Filters - This would be a large lift to add for a small assessment (I assume I'll add these later). We'd essentially have to write a layer that transforms the Tanstack Table filters into query params for the router and the backend to consume. We'd also need to setup [Postgres ts_vectors](https://orm.drizzle.team/docs/guides/postgresql-full-text-search) for full search. I'm very excited to do this portion of the feature.
3. Pagination - Combining this with server filters and caching would lead to a full feature that wouldn't blow your database with queries. I'd probably go with an infinite-scrolling style of pagination considering how well supported that is with Tanstack Query and how common of a UI pattern it is.
4. Formatting - I'd add formatting to the Phone Number column

Thank you for the opportunity to build something like this. I really enjoyed it
