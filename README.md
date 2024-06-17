# SkillSync
Submitted to MHacks 16.

# Inspiration

The inspiration for SkillSync stems from the increasingly volatile and unpredictable nature of today's job market. With technological advancements and economic shifts leading to rapid changes in job requirements, many professionals face job insecurity and uncertainty about their future roles. Recognizing the power of continuous learning and adaptability in this landscape, SkillSync was envisioned as a platform to combat these challenges.

# What it does

SkillSync facilitates a dynamic environment where individuals can proactively share and learn skills through peer-to-peer knowledge sharing. By linking people to exchange skills, SkillSync aims to Exchange, Empower, Elevate users to become more versatile and valuable in their professional lives. We do this by first linking users who have a mutual skill exchange through OpenAI's Gen4 Turbo API that matches skills to share and skills to learn between two people. Once users become SkillLinks with each other, they can set up a time to Sync skills with our SyncUp function. The function enables users to find a time through a shared availability schedule, generate an adaptable agenda, and utilize the Google Meet API to facilitate a structured, timely meeting. Following their SyncUp, each user will be prompted to review their experience, potentially follow up with their SkillLink, or update their profile. By prioritizing SyncUp feedback, we commit to protecting the time of our users and the validity of the skills they share and acquire, enhancing job security and technical development in an ever-evolving work world.

# How we built it

We chose react as our framework to create our platform. To begin, we developed prototype profile architecture in order to understand what elements are important to the user linking algorithm, SkillLink network, and SyncUp experience. We built out each page to conform to our fleshed out drawings which connect users based on their strengthens and learning goals.

# Challenges we ran into

Connecting the backend to the frontend provided challenges to integrate firebase into our system. This was essential for database control and user authentication which we eventually found.

# Accomplishments that we're proud of

We're proud to contribute to a prominent social problem - job insecurity - particularly in the face of record layoffs in the tech industry. We're confident that our skill syncing platform can revolutionize a new wave of peer-to-peer learning, enabling employees to collaborate with one another and promote their own professional development for free. This in turn reduces the need for employers to turn to mass layoffs for cost-cutting, addressing multiple facets of this complicated issue.

Ultimately, this is our first hackathon. We had little expectations going in - just wanted to have fun and build something that hopefully at least a few people would consider using. Given the time constrains and our relative inexperience, we are incredibly proud of the commitment we put in, the timeless hours staring at code, and the insightful learnings we took away.

# What we learned

On the technical side, we developed a greater understanding of how components and elements interact with each other in React. In specific, we learned how to integrate third party libraries like Firebase to implement our login authentication system and streamline our database management. We gained experience in the Document Object Model (DOM) to connect web pages and script our backend.

In addition, we learned about successful ways to brainstorm ideas. Initially, we had trouble brainstorming topics that we all had mutual passions in developing and strengths in contributing. Eventually, we adopted a ideation model in which we listed out a bunch of topics that we found meaningful to our lives. We rated each topic by the level of passion we expressed, the technical complexities of addressing the problem, and the societal significance of our potential impact. This method of ideation boosted our efficiency significantly and ensured clarity in our next steps.

# What's next for SkillSync

The Google Meet API is not currently fully integrated into our React webapp due to the limitations of the Google Developer Workspace. We're confident that as the API gets more popular in the tech industry, it will be more widely accessible to users like ourselves and that we can implement a seamless integration into our SyncUp feature. In addition, we plan on developing a dynamic schedule builder for users to set up a meeting rather than a default chat feature, as we want to take on more responsibility in firmly establishing the sync amongst our users.