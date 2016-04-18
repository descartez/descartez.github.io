---
layout: post
title:  "Git Basics: Workflow Pt.1"
date:   2015-08-22 09:44:31
categories: lessons intro git
---
# Git Workflow: Basics 1 of 2
Okay, so you have to make an app, but you want to keep track of everything, and allow others to contribute. That's where Git comes in.

### What's it for?
- Keeping track of changes you make for code.
- Add new features without messing with the current app.
- Compared changed code and make sure it's compatible with old code.

### What you should know at the end of this:
- How to make and clone a repository
- How to make changes to that repo and then push those changes

### The Clone Wars:

#### How to make a repo
- Go to your Github account.
- There's a "+" symbol at the top right, that looks like this:
![001](../images/github_lesson_001.png)
- Click that and choose "new repository", and give your repo some info!
![002](../images/github_lesson_002.png)
- After that you should have a repo! If you checked that box that said "initialize with a README", it will load with a README.md
- This is your intro for others into your code. People usually put in code dependencies and instructions for starting up the code.

#### How to clone a repo
- If you look at your repo now, you should see this:
![003](../images/github_lesson_003.png)
- Bottom right of the image there. Notice that "HTTPS clone URL"? click on it and copy it.
- Now go to your terminal, and use it to travel to where you want your repository to go. I keep mine in a "git" directory.
- Now, with your link copied and in your clipboard, type into your terminal.

`git clone pasteyourURLhere`

"pasteyourURLhere" should be where you... paste the URL you copied.
- Now type `ls` and see that your repo has been copied!

### Making changes, pushin' them up

- Open up your newly cloned directory. Make some changes to your readme file.
    - [Look up](https://github.com/adam-p/markdown-here/wiki/Markdown-Here-Cheatsheet) some Markdown syntax if you want to be fancy.
- Now type 'git status' into your terminal. The output should look something like this:
    {% highlight bash %}
    Untracked files:
    (use "git add <file>..." to include in what will be committed)

     README.md

    nothing added to commit but untracked files present (use "git add" to track)
    {% endhighlight %}

  - So your changes were recognized, but now it needs to be _staged_ to do this we need to type:
    - `git add .` (This adds all changed files, you can also choose particular files to stage by typing out their names individually)
    - `git status` will tell you the changes are added. Now we must __commit__ to our changes as the final stage of staging.
    - `git commit -m` followed by `"some message telling others what changed"`
  - Everything is staged and ready to go!
    - Type in `git push origin master`
    - Login if that's needed.
    - Now look at your repo on Github! Holy crap it's changed!

### Wrap Up
We'll get to branches and how that works, but for now you can make changes and make sure they're seen. Be proud! You made it through the first bit of Git!
