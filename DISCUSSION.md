# Discussion

## UI/UX Issues

1. I really dislike lists in tables, so two options for replacements is either converting the table to cards to re-organize the information (BCBS "Find a Doctor" search works this way) or to use chips in the column.
2. If the search bar is a quick filter, then why is there even a search button or reset button? Typically those are available when you use a variety of filter options and filling out a more robust search.
3. There's no binding of the search state to the URL. Considering this is a tool used to find advocates, then it's safe to assume that people are going to share links to lists of advocates.
4. There's no formatting of data in the datatable, especially phone numbers and the specialty list is unsorted
5. There's no general sorting of the list of advocates

## Code Issues

1. Where the hell is the type safety?
2. There's no pagination/infinite scroll, so we're reading the entire table into the UI every time
3. No indexing on the advocates table
4. No caching on the backend
5. Storing the list of specialties as a jsonb column instead of a table
6. The onChange function is crazy and the onClick and the onChange function both set the filtered advocates
7. Filtered advocates is a computed property based on the state of the API call and the filter, it is not state
8. Not using the built in NextResponse
9. Not using a library for HTTP calls in the front-end, useEffect is for magicians/library authors
10. Not having the <main> tag in the layout file
11. Returning a dummy db when the .env file is missing the necessary url
12. Not composing the DB URL (what do you do if you need to recycle the password)
