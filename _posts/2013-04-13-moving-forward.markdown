---
author: smspillaz
comments: true
date: 2013-04-13 08:53:31+00:00
layout: post
slug: moving-forward
title: Moving forward
wordpress_id: 2764
---

In the past few months I've been involved in a bit of a public disagreement about my relationship with the Ubuntu project, namely in terms of some work I was doing on Compiz and Unity back in December to February.

While I believed that my statements represented the truth at the time, in hindsight, I believe they were more or less a product of my frustration. I wanted to publicly apologize for that, and share a clarified timeline and sequence of events now that I've had a chat with a few of the people involved so set the record straight, and I also want to share about the plan that we've come up with to move forward.

I [blogged](http://smspillaz.wordpress.com/2012/12/23/new-old-buffers/) in December that I had come up with a set of changes for both Compiz and Unity to take advantage of the new GLX_EXT_buffer_age extension. Importantly, these changes were substantial, required change across three key areas of the stack and required testing on several different hardware and driver combinations.

I had posted a set of changes up for review around that time, but the review process didn't happen for a number of largely unrelated reasons. First of all, it was around the time of the December holidays, so people were just starting to take breaks. Second of all, there were a few staff movements within Canonical which meant that the number of reviewers available for that work was lower than it normally would have been.

In [late February](http://bazaar.launchpad.net/~compiz-team/compiz/raring/revision/3629) the decision was taken by the team that manages the Ubuntu distribution to branch Compiz for raring and only accept minor changes. I was consulted on that decision and agreed to it. I've been told that the rest of the team at Canonical working on Unity was also informed of this. I was unhappy at the time that no review of my changes occurred given the two month period, but I also accepted that we were close to feature freeze and it wouldn't make sense to have any large changes in place then. At this point, I decided to stop working on those changes, instead with a view to pick them up again for 13.10.

Around the same time, a discussion about a [rolling release](https://lists.ubuntu.com/archives/ubuntu-devel/2013-February/036537.html) took place on the public mailing list and at vUDS.

I [posted in various comments](http://philipballew.wordpress.com/2013/03/07/confessions-of-a-community-member/#comment-287) that I was disappointed with the lack of review over the past two months, attributing it to the confusion caused by the rolling release and the apparently evident preference for a closed development model. **These comments were mistaken.** The real cause appears simply to be that there was a staff shortage, and not enough was done by me to draw the staff's attention to these proposals.

The rolling release proposal said that this model should be adopted "now", and many people on the list agreed. Adopting the "rolling release" for 13.04 would mean two things:



	
  1. 13.04 would become the "rolling release" and would not be "released" at its usual release point.

	
  2. With no release of 13.04, there would also be no feature freeze.


Whilst we were operating under that assumption and whilst that discussion was ongoing, I was told that my changes were likely to be merged in at some point in the near future. As such,[ the review process started again](https://code.launchpad.net/~smspillaz/unity/unity.fix_1080947.2/+merge/154847/comments/338511) in spite of the previous agreement to keep large changes out of raring. This was because both the reviewers and myself believed that these changes were now appropriate for the release. **My main error here was failing to contact the distribution team to check if there had been a misunderstanding**.

In the meantime, we faced a number of [high](https://bugs.launchpad.net/compiz/+bug/1138517) [and](https://bugs.launchpad.net/compiz/+bug/1140505) [critical](https://bugs.launchpad.net/compiz/+bug/1130679) [regressions](https://bugs.launchpad.net/compiz/+bug/1141079) [stemming](https://bugs.launchpad.net/compiz/+bug/1158161) [from](https://bugs.launchpad.net/compiz/+bug/1159324) [a small fix for java](https://bugs.launchpad.net/compiz/+bug/1110138) and a [workaround](https://bugs.launchpad.net/compiz/+bug/1127866) for a [hang in virtualbox](https://bugs.launchpad.net/compiz/+bug/1127866). This didn't do a whole lot for confidence for anybody. It just so happened that the regressions we kept on having were in parts of the code that were difficult to get any kind of automated testing around.

The review process ended again a week or two afterwards, citing that the [release team was unhappy with having those changes for raring](https://code.launchpad.net/~smspillaz/unity/unity.fix_1080947.2/+merge/154847/comments/343117), because they would present a risk by breaking feature freeze for the 13.04 release, which was now happening. I was disheartened that this was the case and [stated that on the merge review](https://code.launchpad.net/~smspillaz/unity/unity.fix_1080947.2/+merge/154847/comments/343117).

To be honest, I think my behavior here wasn't very constructive. The better approach would have been to engage properly with the distribution team to devise proper test plans and QA strategies, and to clarify with everyone what the true status of all pending work was. That being said, things finally came to a head today. The distribution team and I have had a good long talk about everything, and we've come up with a plan to move forward and past this mess. The stupid conflict and a war of words by myself was entirely unnecessary in order to come to this resolution.

**I want to make it clear that these difficulties were the fault of nobody**. _Nobody_ was negligent, _nobody_ was inconsiderate (except perhaps myself) and_ nobody_ was acting in bad faith. These difficulties were the product of circumstance, which didn't apparently manifest themselves in that way when I was looking at them.

It is anticipated that the relevant changes are going to be slated for review and testing for 13.10 at the beginning of the cycle. The test plan is going to include the usual test suite + ensuring that we don't have any autopilot failures, as well as some extensive user testing to try and uncover any subtle bugs that may have been missed during the time that this work was QA'd.

Right now, I encourage everyone to [test the PPA that Trevino has put up](https://plus.google.com/108101042776723451522/posts/RvpwLmVqR8h) which contain the most up to date version of these changes sync'd with trunk for both nux, unity and compiz. Test it on both nvidia and non-nvidia hardware, since the changes affect both. File (tagged) bugs and I'll get on to them when I can.

Lets make 13.10 rock!
