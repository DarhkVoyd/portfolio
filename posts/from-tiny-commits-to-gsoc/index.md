---
title: "From Tiny Commits to GSoC"
date: "02-05-2024"
---

## Not So Quick Story

Around the time I was born, my father bought our first computer. Over the years, I have spent endless hours playing games, surfing the internet, messing with my computer's hardware and software and playing more games. Along the way, I have used countless open source tools and software and therefore I have grown to be a huge fan and advocate of the work and building tools that just make people’s lives easier.

**_Self Sponsored_**: Later, when I faced some friction while enjoying the web, I started building my own tool [Toppings](https://enrych.github.io/toppings-web), which is a browser extension and I started to learn specific technologies to build my project but since I had no experience working in open source so each time I learned something I started to explore other open source projects to better understand on a bigger, mature and actual codebase.

## Hearing about Google Summer of Code

The world was in lockdown due to COVID, I was just sitting clueless at my home. Just like every Tier-3 college freshman that year, I spent all of my time watching YouTube streams and sometimes coding lectures and guidance videos. I somehow stumbled upon a video/podcast of Kunal Kushwaha, talking about his experience being a Google Summer of Code contributor and I thought to myself, maybe I could try to do this someday.

## Overcoming Obstacles

As the pandemic ended, the world went back to it's routine. Colleges opened and we were back on campus. I still had GSoC in mind but I was clueless. The biggest obstacle that I always face is self doubt. Always making me question, **"Do I know enough?"**, **"Can I do this?"**, **"I am not ready!"**. With no self-confidence and lots of insecurities I tried my bare minimum and applied to a project I didn't understand at all. I had no interaction with the organisation on the last day of application with the worst proposal of all times. Obviously, it didn't work.

Next year, I read a lot of blogs, docs, watched a lot of guidance videos but again, I had no plan and I wasn't even going to apply. On the day before application deadline, one of my closest friend, **Angad**. He asked me what all the fuss was about. We ended up deciding that we'll at least apply. So, we spent the entire day trying to find an easy project and we drafted a semi-decent proposal very close to the end of the deadline. We were unaware of the time zone difference so we believed that we had till the end of the day. While I was able to upload mine at the very last moment unknowingly, his took a little while longer and he missed the deadline, it was then when we realised about the time zone difference but there was nothing to be done. Again, since I had no prior interaction, and participation in the community, the proposal was eventually rejected. Angad is one of the most hardworking and passionate people I know, he came to me and we talked. He made me realise, this is possible and I can easily do this. He is always inspiring but this time he was convincing, so I promised him I'd do it.

## Starting Early This Year

Spending most of my time building my open-source project/browser extension [Toppings](https://enrych.github.io/toppings-web), I was more confident in my abilities and skills. I was looking to make my first contribution to an open-source project and I somehow went to Material UI and picked up a _good first issue_, while I had experience with Javascript by then, I was still unknown to Typescript, so one of the maintainer helped me fix my first issue with this tiniest change.

```typescript
// packages/mui-base/src/useAutocomplete/useAutocomplete.d.ts

getInputProps: () => React.InputHTMLAttributes<HTMLInputElement> & {
    ref: React.Ref<HTMLInputElement>;
};

```

This gave me a start and confidence boost. I started contributing to fix more issues at Material UI, exploring more projects such as Gradio, Configu, etc. and contributing to them throughout October participating in Hacksquad. As Hacksquad was over, my team landed into winning rankings, increasing my excitement and confidence.

## Preparing for GSOC

By the end of Hacksquad, I believed I was ready for the GSoC. I started planning, searching for past organisations that match my skill set. I filtered my options to Rocket.Chat and Postman, so I started to try and find their IRC or some public GSoC channel to introduce myself and gather some advice to prepare. But, after trying for a while, I didn't find any active GSoC channel so I took some time off and started sending some cold emails to past participants and help forums of past organisations. It had been a while, no one had replied and I started to become little nervous, but luckily after a little more time, Priyanshu Sharma, previous year Postman GSoC contributor, replied and shared a great amount of insight and advice, he also shared his wonderful proposal which helped me better understand the structure of a good proposal and has inspired my proposal. Later, I was helped by my close friend Ravi, who reached out to one of his friends who was a past contributor and set up a call with him to help me with some doubts and uncertainties.

## Getting Started with Rocket.Chat

The end-semester exams and the winter break had slowed things down. But, by the time I returned back to college, this year's program was announced and the IRCs with GSoC channels had become active, contributors already had multiple merged PRs, engagement with the community. I quickly gathered all the resources and started to read the available resources and docs. Getting up to speed, attending GSoC contributors meetings, community meetings and more. Everything was moving fast. Given, Rocket.Chat is a popular GSoC organisation being consistently participating in the program, it had hundreds of participants and I was overwhelmed seeing this massive number of potential contributors all around being hyperactive, it was getting really hard to even get in contact with a mentor. To no avail, the community maintains a leaderboard to track all active participants with their number of issues, open and closed PRs. Still, I kept going and getting up to speed and preparing for a project idea I liked and got familiar to the codebase and the maintainers. But, even then the crowd was too much for me and it had started to feel like a competition, rather than collaboration. So, I realised that this is not the organisation for me, and I decided to find another.

## Other Opportunities

Meanwhile, I had also applied to some other opportunities such as MLH Fellowship and Outreachy. While I was mostly focused on GSoC, I was still hopeful for these other opportunities. The MLH Fellowship result was a bit confusing, but while I was rejected, I wasn't completely sure about the weak spot in my proposal and where I could improve. To my email requesting some clarification and advice, the only reason they could give for rejection was “filling of pods”. No problem. The application phase of Outreachy was smoother and I was selected to move to the contribution phase but since the timelines were clashing with GSoC and I was more excited for GSoC, I didn't participate further and started to focus back on GSoC.

## Switching to JSON Schema

I searched more and found more options such as AUSSIE etc. but still I kept searching. Luckily, around that time one of the members of the Postman forum replied to my early comment seeking guidance and pointed me towards their program idea. It introduced me to "JSON Schema". From the moment I entered the community chat, it felt right, they were extremely welcoming and supportive. It was calm and I could comfortably get familiar with the mentors, the project idea and their work.

Now that I was comfortable, I eased into the project, authored issues, fixed critical bugs and worked in **collaboration** with other participants.

Now, I was familiar with the workflow and working etiquette of the organisation. I reached out to my project idea mentor, **Benjamin Granados**, seeking guidance and mentorship. He has been extremely supportive, patient, and I am very grateful for his guidance, mentorship, constant positive encouragement and confidence boost throughout this period that keeps me motivated.

In my time contributing to JSON Schema during the pre-GSOC time, the team and mentors have been extremely supportive and encouraging. The positive and welcoming attitude of the entire community keeps me motivated and a smile on my face. So much so that I ended up applying all three proposals to JSON Schema.

## Post Deadline Uncertainty

After the application deadline, I layed down for a while, taking some time to rest and relax. Every day, I was excited and had confidence in my work. I was certain that I would get in with one of my proposals but I would lie if I said I wasn't nervous. There were days when I was worried and didn't believe in myself, losing my confidence. Given this was our Senior year most of our friends were busy fighting their own battles out on internships, some of my closest friends Shantanu and Mahesh were always there for me. They constantly cheered me up and believed in me on days I didn't. I am very grateful to have them.

## The Acceptance Email

This moment had been building up from the moment I saw that YouTube video. The countdown was over, the email had arrived. I took a deep breath, my friends all around me capturing the moment, we all looked at the screen. I opened the email with faith and hope and it read:

> Welcome to Google Summer of Code 2024! We are pleased to have you join the GSoC community.
> Your proposal Build Data-Driven Tooling Page has been accepted by Org JSON Schema for GSoC 2024.

We all burst into happiness, screaming as this old goal was finally achieved. This might not be a big deal for many but it sure was a big moment for me and it has motivated me and I am more driven than ever. Now, I am excited for the future and making more plans.

[Here](/programs/gsoc/2024/GSoC%20Proposal%202024_%20JSON%20Schema%20-%20Build%20Data-Driven%20Tooling%20Page.pdf), you can find my accepted GSoC 2024 proposal for JSON Schema.

## Special Thanks

I am very grateful to my mother, father, and sisters for their constant support, love, and always taking care of me. To my dearest friends and mentors, I extend my heartfelt gratitude. Your unwavering support, encouragement, and belief in me have been the driving force behind my journey to GSoC. For always inspiring and believing in me, especially on the days I didn't. **Angad, Ravido, Pucchu, Dubey, Isha, Chawla, Anshul, Ashu, Ankush**. This would have been impossible without you guys.

1. [Kunal Kushwaha](https://github.com/kunal-kushwaha): For inspiring me and introducing me to Google Summer of Code.
2. [Michał Dudak](https://github.com/michaldudak) at [Material UI](https://github.com/mui/material-ui): For guiding me through my first issue and accepting that first tiny commit that started this.
3. [Team Configu](https://github.com/configu/configu): For the opportunity to contribute to learn from the experience. Also, for the awesome T-shirt.
4. [Abubakar Abid](https://github.com/abidlabs) at [Gradio](https://github.com/gradio-app/gradio): For their guidance about open-source collaboration, contribution and etiquette. Also, for the awesome merch.
5. [Hacksquad](https://www.hacksquad.dev): For the wonderful experience, contributing to open-source projects throughout October and that amazing merch pack.
6. [Priyanshu Sharma](https://github.com/priyanshu-kun): For taking time to reply to my email and their extremely helpful and insightful advice and guidance for GSOC.
7. [JSON Schema Community](https://github.com/json-schema-org): For the warm welcome into their community and this wonderful opportunity to work with them.
8. [Benjamin Granados](https://github.com/benjagm): For being the best project mentor, I am very grateful for their guidance, mentorship, constant positive encouragement and confidence boost throughout this period that keeps me motivated.

_Excited for a great Google Summer of Code_
