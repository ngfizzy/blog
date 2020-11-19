const { categories, categoryIds } = require('../categories');
const { randomId } = require('../generators');

module.exports =
[
  {
    id: randomId(),
    authorId: 1,
    title: 'Until further notice',
    body: `
    Of course, every rule, every announcement and every policy is in place until further notice.

    We say it as a form of throat clearing. A way to make the announcement seem more official and specific.
    We repeat the redundant as a form of gift wrap, a way to be sure that it feels both urgent and impersonal.
    “May I have your attention please” is another wasted phrase that is actually self-cancelling on inspection.
    In this case, it acknowledges that attention is being taken, whether you want to loan it out or not.
    This patina of bureaucratic civility exists to let the bureaucrat off the hook. But it also is a signal
    to the listener that an official is speaking up. We should use it (or not use it) with full knowledge
    of the signal we’re sending.
    It’s the seat belt training video, the do not remove tag on our mattress, the ‘your call is important’
    filler on hold and the ritual of singing a not-very-good song to people we care about every single year.

    If you look around the built world, you’ll find these tropes and filigrees just about everywhere.
    As media changes, we strip away the old ones and invent new ones to fill their spot. Use them (or not)
    as a way of sending a message of awareness and authority.
    `,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    published: true,
      categories: [
        categories.find(category => category.id === categoryIds.selfHelp)
      ],
    tags: [],
    audienceActivities: [],
  },
  {
    id: randomId(),
    authorId: 1,
    title: 'The ocean is made of drops',
    body: `
    That’s easy to say but hard to visualize.

    Even a puddle has more drops than we can count.

    It’s got to be difficult to be a drop.

    And yet…

    What else could the ocean be made of?


    `,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
    published: true,
      categories: [
        categories.find(category => category.id === categoryIds.selfHelp)
      ],
    tags: [],
    audienceActivities: [],
  },
  {
    id: randomId(),
    authorId: 1,
    title: 'If it were easy…',
    body: `
    That’s easy to say but hard to visualize.

    Even a puddle has more drops than we can count.

    It’s got to be difficult to be a drop.

    And yet…

    What else could the ocean be made of?


    `,
    createdAt: new Date('11-20-2020').toString(),
    updatedAt: new Date('11-20-2020').toString(),
    published: true,
      categories: [
        categories.find(category => category.id === categoryIds.selfHelp)
      ],
    tags: [],
    audienceActivities: [],
  },
  {
    id: randomId(),
    authorId: 1,
    title: 'The gift of results',
    body: `
    When Ignaz Semmelweis pioneered statistics in order to save countless women
    from dying in childbirth, his fellow doctors refused to believe him.
    They ignored his work, didn’t wash their hands and it was another twenty
    years before his insights on the spread of disease were adopted.

    We live in a faster, more competitive world than he did.

    When Jethro Tull wrote about the rotation of crops, many
    farmers continued to do things in the old way. Over time, though,
    the yields don’t lie. You don’t have to like the idea, but you can see that it works.

    Results show up. They’re easy to see, easy to measure and they persist.

    The bridge falls down or it doesn’t. Market share goes up or it doesn’t.

    We can view results as a threat, or see them as an opportunity.
    It depends on whether we’re defending a little-understood status
    quo or seeking to make things work better.

    Results don’t care about our explanation.
    We need a useful explanation if we’re going to improve,
    but denying the results doesn’t change them.

    As the world has become ever more filled with results,
    it has crowded out each individual’s personal narrative
    of how the world works. Particularly in times of change
    and negative outcomes, this can cause a lot of distress.

    Our narrative is ours, and it informs who we are
    and the story we tell ourselves.

    Beliefs are powerful.
    They’re personal.
    They can have a significant impact on the way we
    engage with ourselves and others.
    But results are universal and concrete,
    and no matter how much we’d like them to go away, there they are.

    When people talk about how modernity has changed humanity,
    they often overlook the fundamental impact that results have had.
    Competitive environments create more results, at greater speed,
    and those results compound over time.

    We still need a narrative and we still need our individual outlook.
    But over the last century, we’ve had to make more and more room for
    the systems that create results. Our shared reality demands it.
    `,
    createdAt: new Date('11-20-2020').toString(),
    updatedAt: new Date('11-20-2020').toString(),
    published: true,
      categories: [
        categories.find(category => category.id === categoryIds.selfHelp)
      ],
    tags: [],
    audienceActivities: [],
  },
  {
    id: randomId(),
    authorId: 1,
    title: 'Second cousins',
    body: `
    And yet we often assume that one leads to the other.

We spend years and years educating people to do well
on tests in the belief that this will make them smart.

And we assume that they’ll figure out the persuasive stuff on their own.

We conflate the two on a regular basis, assuming that charisma
or followers or influence is somehow aligned with insight, foresight, and learning.

The good news is that being persuasive is a skill.
If you’re smart, we’ll all benefit if you’ll also invest the effort to find a way to lead.
    `,
    createdAt: new Date('11-20-2020').toString(),
    updatedAt: new Date('11-20-2020').toString(),
    published: true,
      categories: [
        categories.find(category => category.id === categoryIds.selfHelp)
      ],
    tags: [],
    audienceActivities: [],
  },
];
