---
title: "From Tiny Commits to GSoC"
date: "02-05-2024"
---

## How It All Started

The first computer I ever laid my hands on was bought by my father around the time I was born. Over the years, I spent countless hours playing games, exploring the internet, and tinkering with my computer’s hardware and software. Along the way, I came across open-source tools like VLC and others. Though I didn’t fully understand how they worked, I recognized there was a class of wonderful, free tools that made life easier. Eventually, I realized how much I loved the idea of building tools that could help others in the same way.

My journey took a more active turn because I used YouTube a lot and found certain features missing or lacking customization. After trying several extensions that didn’t quite integrate well or meet my needs, I decided to create my own. With no real-world project experience, this became my first passion project. I dove in, learning everything from scratch, including how to build a browser extension, and created Toppings. This experience not only helped me grow as a developer but also brought me closer to understanding the ropes of open-source software.

If you're a YouTube user looking to customize your experience, check out [ Toppings ](https://enry.ch/toppings), my open-source browser extension!

## Discovering Google Summer of Code

Then came COVID-19, and like many of us, I found myself at home with a lot of time on my hands. Like many freshmen at that time, I spent much of my time watching YouTube, videos, streams and coding tutorials. That’s when I stumbled upon a podcast by Kunal Kushwaha, where he shared his experience as a Google Summer of Code (GSoC) contributor. I thought to myself, “Maybe _I_ could do that one day.”

## The Struggles: Rejection, Self-Doubt, and Uncertainty

As the pandemic subsided, colleges reopened, and we returned to campus. GSoC remained on my mind, but I had no idea how to get started. My biggest obstacle was self-doubt—constantly questioning if I knew enough or if I was ready. With little confidence, no experience, and no guidance, I applied for GSoC for the first time to a project I didn’t fully understand, submitting what I knew was a weak proposal. Naturally, it was rejected. But I kept telling myself, “Next year.”

The following year, things didn't go much better, while I researched more, read blogs, and watched guidance videos and consuming as much information as I could, but I still lacked a clear plan. On the day before the application deadline, a close friend pushed me to apply with him. So, We spent the day drafting a proposal, and at the last minute, I uploaded mine, while my friend's submission was late. We were under the impression we had till midnight, but didn’t realize that the deadlines were based on other time zone. I managed to submit mine, but my friend missed the deadline. However, my friend inspired me to keep going, reminding me that I could do this. I promised myself I would try harder. Third time's the charm, right?

## Gaining Confidence: Contributing to Open Source

I had spend a lot of time building [Toppings](https://enry.ch/toppings), contributing to other open-source projects, and just getting comfortable with the idea of contributing and grow confidence in my skills. I started small—fixing a simple issue in Material UI. At the time, I was new to TypeScript, but a maintainer helped me get my first ever PR merged.

Here’s a snapshot of my first commit, a small fix to the Material UI codebase:

```typescript
// packages/mui-base/src/useAutocomplete/useAutocomplete.d.ts

getInputProps: () => React.InputHTMLAttributes<HTMLInputElement> & {
    ref: React.Ref<HTMLInputElement>;
};
```

That tiny change meant so much to me. It wasn’t just a code change—it was a moment of validation.

That initial success gave me the confidence to dive deeper. I contributed to more projects like Gradio and Configu, participated in Hacksquad, and even managed to win some rankings in the hackathon. Every little win pushed me forward.

## Finding the Right Fit: Rocket.Chat and Beyond

By the end of Hacksquad, I felt ready for GSoC. I started narrowing down the organiztions I wanted to apply to narrowed my focus to. Rocket.Chat and Postman stood out to me. I reached out to past contributors for advice. Eventually, Priyanshu Sharma, a former Postman GSoC contributor, responded, providing invaluable guidance. I also received support from a close friend, who connected me with a past participant, helping me clarify many doubts.

As my preparations continued, I found that Rocket.Chat's GSoC community was extremely active. While this was exciting, it was also overwhelming. The sheer number of participants made it difficult to get in touch with mentors or stand out. Despite this, I pushed on, familiarizing myself with the codebase and the project's requirements. But, ultimately, I felt that Rocket.Chat wasn’t the right fit for me, so I decided to explore other options.

In the meantime, I applied to other programs like the MLH Fellowship and Outreachy. While GSoC was my primary focus, I wanted to keep my options open. The MLH Fellowship application process left me confused; I was rejected but received no specific feedback about my proposal. On the other hand, Outreachy’s application process was much smoother, and I was selected for the contribution phase. However, since the timelines overlapped with GSoC, I ultimately chose to focus all my energy on GSoC.

## The Moment I Found My Community: JSON Schema

One day, a reply from the Postman forum pointed me toward a project I had never heard of before—**JSON Schema**. The moment I stepped into their community chat, everything just clicked. The mentors and community were welcoming and supportive, the project felt interesting, and it wasn't crowded. I knew I had found the right place.

Over the next few weeks, I dove into the project, worked on a few issues, fixing bugs, and collaborating with other participants. I reached out to my project mentor, Benjamin Granados, who provided invaluable guidance and constant encouragement. The team at JSON Schema made me feel like part of the family, and I found myself applying for GSoC with them.

## The Waiting Game: Post-Submission Nerves

After I submitted my proposal, I decided to take some time off and relax. I felt confident in my work, but it’s hard to avoid self-doubt. There were moments when I thought, “Maybe I’m not good enough for this,” or “Maybe my proposal isn’t strong enough.”

But thankfully, I had friends who always had my back. They believed in me on days when I couldn’t believe in myself. Their support kept me going.

## The Acceptance Email

Finally, the moment came. The email I had been waiting for. I opened the email, heart pounding, and there it was:

> “Welcome to Google Summer of Code 2024! We are pleased to have you join the GSoC community.”

The excitement was overwhelming. My friends and I celebrated together, and for the first time in a long while, I felt like all the hard work, the struggles, and the self-doubt had paid off.

My proposal—_Build Data-Driven Tooling Page_ for JSON Schema—had been accepted.

## Reflections and Gratitude

Looking back, this journey has been one of constant learning, growth, and overcoming fears. From my first rejection to my third successful attempt. This achievement wasn’t just about GSoC—it was about realizing my potential, connecting with amazing people, and much more.

There are a lot of people who made this journey possible, and I’m incredibly grateful to each and every one of them. To my family, friends I’ve personally expressed my gratiute and thanked, I’d like to give a formal shout-out to the incredible individuals and communities who directly impacted my journey. mentors, and the amazing open-source community, your encouragement has been invaluable. You've made this achievement possible.

1. [**Kunal Kushwaha**](https://github.com/kunal-kushwaha) - For inspiring me to apply for GSoC in the first place.
2. [**Michał Dudak**](https://github.com/michaldudak) at [Material UI](https://github.com/mui/material-ui) - For guiding me through my first contribution.
3. [**Team Configu**](https://github.com/configu/configu) - For the opportunity to contribute and learn.
4. [**Abubakar Abid**](https://github.com/abidlabs) at [Gradio](https://github.com/gradio-app/gradio) - For teaching me about open-source etiquette.
5. [**Hacksquad**](https://www.hacksquad.dev) - For the great experience contributing during the hackathon.
6. [**Priyanshu Sharma**](https://github.com/priyanshu-kun) - For his thoughtful advice during my preparation for GSoC.
7. [**JSON Schema Community**](https://github.com/json-schema-org) - For being welcoming and providing me with a fantastic opportunity to contribute.
8. [**Benjamin Granados**](https://github.com/benjagm) - For being an amazing mentor throughout the GSoC journey.

This journey is just beginning, and I’m excited about the future. The best part? It’s only going to get better from here.

_Excited for a great Google Summer of Code 2024!_
