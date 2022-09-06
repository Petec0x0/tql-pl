**Implementation Details**

This API was built using Express/Node and a package called `express-rate-limit` which uses 'sliding window counter' algorithm for rate-limiting.

For getting age, the **dob** passed to the API is subtracted from the current date to get the age.

**How does this work**

When the **/howold** endpoint is called, the program checks if the **dob** query paramenter is available before continuing. A 400 error is returned if the **dob** query parameter does not exist.

If the **dob** query paramenter exist, the program checks if the value is a valid timestamp. It returns a 422 error when an invalid timestamp is passed.

The age is calculated by first subtracting the year from the passed timestamp in **dob** query from the current year, also check if current month and day has reached the month and day passed through the **dob** parameter to either subtract 1 from the age or let the age remain the same.

The `express-rate-limit` is configured and passed as a general middleware to prevent more than 3 calls within a second.