# IdeaApe Enterprise API

# Read v1
`POST /enterprise/analysis/v1/read`

This endpoint is used to read the analysis results for a given analysis ID. It requires an API key for authorization.

## Expected Input
The expected input is a JSON object with the following properties:

- `api_key`: A string that represents the API key of the enterprise user.
- `analysis_id`: A string that represents the ID of the analysis to be read.

Example:
```json
{
  "api_key": "your_api_key",
  "analysis_id": "your_analysis_id"
}
```

## Expected Output
- The expected output is a SearchResultV1 object.

- If the API key is not found in the database, a 403 Unauthorized user error will be returned.

- If the analysis ID is not found, a 404 Analysis not found error will be returned.


## Sample Request
Here is a sample request using JavaScript's fetch API:
```
const response = await fetch('BACKENDURL/enterprise/analysis/v1/read', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        api_key: 'your_api_key',
        analysis_id: 'your_analysis_id'
    })
});

const data = await response.json();
console.log(data);
```

### Sample response
```
{
    "id": "de15ec27-a928-40ed-bd54-ba5de34d0448",
    "user_id": "string",
    "title": "string - all time",
    "query": "string site:reddit.com inurl:comments",
    "posts": [
        {
            "title": "Evaluate(string) - comments, ideas please! : r/AutoHotkey - Reddit",
            "description": "As part of my self-education on AHK2, I've written a beginner's script to evaluate a string. I think it works, but I would be grateful for ...",
            "url": "https://www.reddit.com/r/AutoHotkey/comments/1axwe33/evaluatestring_comments_ideas_please/"
        },
        ...
        {
            "title": "Are there easier options for string handling? : r/cpp_questions - Reddit",
            "description": "Any less involved options for working with strings in C++?. Edit, thank you u/neiltechnician ! https://www.reddit.com/r/cpp_questions/comments/ ...",
            "url": "https://www.reddit.com/r/cpp_questions/comments/15a9q59/are_there_easier_options_for_string_handling/"
        }
    ],
    "opportunities_text": "### Programming Beginners Learning String Manipulation\n- **Business Opportunity:** Development of an interactive learning platform focused on string manipulation.\n  - **Why:** This platform could offer step-by-step tutorials, real-time feedback, and challenges tailored to beginners. By focusing on common pain points like understanding syntax and choosing the right string methods, the platform would provide a guided learning path that builds confidence and skills in an area that many beginners find challenging.\n\n### Developers Seeking Feedback on String-Related Projects\n- **Business Opportunity:** Creation of a code review and mentorship platform with a focus on string manipulation and other programming fundamentals.\n  ...",
    "pain_points_text": "### Programming Beginners Learning String Manipulation\n- **Painpoint 1:** Struggling with the basics of string manipulation, such as understanding how to use quotes within strings, leading to confusion and syntax errors.\n- ...,
    "recommended_queries_opportunities": [],
    "recommended_queries_pain_points": [],
    "llm": "gpt4",
    "created_at": "2024-04-19T13:17:59.494086Z"
}
```