This is a [Next.js](https://nextjs.org) coding challenge project.

## Getting Started

First, run the development server:

```bash
npm run dev
```

To run in docker, first build it with:
```bash
npm run docker:build
```

Then run, to start on dev mode:
```bash
npm run docker:run
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Post Mortem

This project was fun and a bit challenging to make in a 3 day span, given I could not dedicate 8 hours per day every day. The boilerplating in the beggining was the slowest part, but when the layouts were completed all other parts went more smoothly. I feel like I accomplished the majority of the requisites to their full extent in the given time.

 Some of requirements, like showcasing the first name of the user are simply impossible with the limitations of the reqres API. Also some requirements are easy to miss, like the docker part, since it is only specified in the very end, and not as one of the 4 parts of the development.

For means of transparency I have to disclose 2 things: 
- Since I had already done another part of the coding challenge that also had similar requisites and functionalities, one or two parts were inspired by them, like the Axios API calls function and some markup strtuctures.
- Copilot was used to streamline some parts of development (prompting, but not autocompleting). It was not to used to build any components or functionalities to a full extent, but to get rid of minor bugs during development and avoid repetitive tasks.